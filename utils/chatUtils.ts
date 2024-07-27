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

export const addMessage = async (
  chatId: string | null,
  request: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
) => {
  if (!chatId) {
    console.error("Chat ID is required");
    return;
  }

  const newMessageId = new Date().toString();
  const newMessage: Message = {
    id: newMessageId,
    request,
    response: null,
  };

  setMessages((prevMessages) => [...prevMessages, newMessage]);
  try {
    // const response = await fetch("/api/openai/text", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ message: request }),
    // });

    // if (!response.ok) {
    //   throw new Error("Failed to fetch OpenAI response");
    // }

    // const data = await response.json();
    // const generatedText = data.chatContent;
    const generatedText = "very very good";

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setMessages((prevMessages: Message[]) =>
      prevMessages.map((message) =>
        message.id === newMessageId
          ? {
              ...message,
              response: generatedText,
            }
          : message,
      ),
    );

    const messageCreationResponse = await axios.post("/api/message/create", {
      chatId,
      request,
      response: generatedText,
    });

    if (messageCreationResponse.status !== 201) {
      console.error("Error saving the message to the server");
    }

    return messageCreationResponse;
  } catch (error) {
    console.error(error);
  }

  return null;
};
