"use client";

import axios from "axios";
import kv from "../lib/kv";
import { Message } from "../types";

export const createChat = async (userId: string, model: string) => {
  try {
    const response = await axios.post("/api/chat/create", {
      userId,
      model,
    });
    return response.data.id;
  } catch (error) {
    console.error("Error creating chat:", error);
    return null;
  }
};

export const deleteMessage = async (messageId: string) => {
  try {
    const response = await axios.delete(`/api/message/delete/${messageId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to delete message. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error deleting message:", error);
    throw error;
  }
};

export const addMessage = (
  chatId: string | null,
  request: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  setIsGenerating: React.Dispatch<React.SetStateAction<boolean>>,
  eventSourceRef: React.MutableRefObject<EventSource | null>,
): Promise<{ generatedText: string; tempMessageId: string }> => {
  return new Promise((resolve, reject) => {
    setIsGenerating(true);

    const tempMessageId = new Date().toISOString();
    const newMessage: Message = {
      id: tempMessageId,
      request,
      response: null,
    };

    // Optimistically add the new message to the UI
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    let generatedText = "";

    try {
      const eventSource = new EventSource(
        `/api/openai/stream?message=${encodeURIComponent(request)}`,
      );

      // reference to current event source
      eventSourceRef.current = eventSource;

      eventSource.onmessage = (event) => {
        const { data } = event;
        generatedText += data;

        if (!eventSourceRef.current) {
          eventSource.close();
          eventSourceRef.current = null;
          setIsGenerating(false);
          resolve({ generatedText, tempMessageId });
        }

        if (data === "") {
          console.log("empty data");
          eventSource.close();
          eventSourceRef.current = null;
          setIsGenerating(false);
          resolve({ generatedText, tempMessageId });
        }

        setMessages((prevMessages) => {
          const newMessages = prevMessages.map((message) =>
            message.id === tempMessageId
              ? {
                  ...message,
                  response: (message.response || "") + data,
                }
              : message,
          );

          console.log("new messages");

          if (chatId) {
            kv.set(chatId, newMessages, { ex: 3600 }).catch(console.error);
          }

          return newMessages;
        });
      };

      eventSource.onerror = (error) => {
        console.error(error);
        eventSource.close();
        eventSourceRef.current = null;
        setIsGenerating(false);
        resolve({ generatedText, tempMessageId });
      };
    } catch (error) {
      console.error(
        "An error occurred during the message creation process:",
        error,
      );
      setIsGenerating(false);
      reject(error);
    }
  });
};

export const saveChatMessage = async (
  chatId: string | null,
  request: string,
  generatedText: string,
  tempMessageId: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
) => {
  if (!chatId) {
    console.error("Chat ID is required");
    return;
  }

  try {
    // Save the message with the final response to the server
    const messageCreationResponse = await axios.post("/api/message/create", {
      chatId,
      request,
      response: generatedText,
    });

    if (messageCreationResponse.status === 201) {
      const createdMessageId = messageCreationResponse.data.id;

      // Update the message with the permanent ID
      setMessages((prevMessages) => {
        const newMessages = prevMessages.map((message) =>
          message.id === tempMessageId
            ? { ...message, id: createdMessageId }
            : message,
        );

        if (chatId) {
          kv.set(chatId, newMessages, { ex: 3600 }).catch(console.error);
        }

        return newMessages;
      });
    } else {
      throw new Error("Error saving the message to the server");
    }
  } catch (error) {
    console.error(
      "An error occurred during the message creation process:",
      error,
    );
  }
};

export const updateMessage = async (
  chatId: string | null,
  messageId: string,
  request: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  setIsGenerating: React.Dispatch<React.SetStateAction<boolean>>,
  eventSourceRef: React.MutableRefObject<EventSource | null>,
) => {
  setMessages((prevMessages) => {
    const newMessages = prevMessages.filter(
      (message) => message.id !== messageId,
    );
    const updatedMessage: Message = {
      id: messageId,
      request,
      response: null,
    };

    newMessages.push(updatedMessage);

    return newMessages;
  });

  let generatedText = "";

  try {
    const eventSource = new EventSource(
      `/api/openai/stream?message=${encodeURIComponent(request)}`,
    );

    // reference to current event source
    eventSourceRef.current = eventSource;

    eventSource.onmessage = async (event) => {
      const { data } = event;
      generatedText += data;

      if (!eventSourceRef.current) {
        eventSource.close();
        eventSourceRef.current = null;
        setIsGenerating(false);
        console.log("update message", request, generatedText);
        const res = await fetch(`/api/message/update/${messageId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ request, response: generatedText }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error(errorData);
        }
      }

      if (data === "") {
        console.log("empty data");
        eventSource.close();
        eventSourceRef.current = null;
        setIsGenerating(false);
        console.log("update message", request, generatedText);
        const res = await fetch(`/api/message/update/${messageId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ request, response: generatedText }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error(errorData);
        }
      }

      setMessages((prevMessages) => {
        const newMessages = prevMessages.map((message) =>
          message.id === messageId
            ? {
                ...message,
                response: (message.response || "") + data,
              }
            : message,
        );

        if (chatId) {
          kv.set(chatId, newMessages, { ex: 3600 }).catch(console.error);
        }

        return newMessages;
      });
    };

    eventSource.onerror = (error) => {
      console.error(error);
      eventSource.close();
      eventSourceRef.current = null;
      setIsGenerating(false);
    };
  } catch (error) {
    console.error(
      "An error occurred during the message creation process:",
      error,
    );
    setIsGenerating(false);
  }
};

export const getResponseAudio = async (response: string, voice: string) => {
  try {
    const openaiResponse = await fetch("/api/openai/audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatContent: response, voice }),
    });

    if (!openaiResponse.ok) {
      throw new Error(
        `Failed to get response audio. Status: ${openaiResponse.status}`,
      );
    }

    return openaiResponse;
  } catch (error) {
    console.error("Error getting response audio. Status:", error);
    throw error;
  }
};

export const fetchChatMessages = async (chatId: string) => {
  try {
    const response = await fetch(`/api/chat/find/${chatId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch messages: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    throw error;
  }
};
