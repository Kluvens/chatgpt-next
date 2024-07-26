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
  request: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
) => {
  const newMessageId = new Date().toString();
  const newMessage: Message = {
    id: newMessageId,
    request,
    response: null,
  };

  setMessages((prevMessages) => [...prevMessages, newMessage]);
  try {
    // const response = await fetch("/api/openaiText", {
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

    return generatedText;
  } catch (error) {
    console.error(error);
  }

  return null;
};
