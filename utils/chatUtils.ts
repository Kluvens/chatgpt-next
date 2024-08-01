"use client";

import axios from "axios";
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
        setMessages((prevMessages) =>
          prevMessages.map((message) =>
            message.id === tempMessageId
              ? { ...message, response: (message.response || "") + data }
              : message,
          ),
        );
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
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === tempMessageId
            ? { ...message, id: createdMessageId }
            : message,
        ),
      );
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
