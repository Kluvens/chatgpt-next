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

export const addMessage = async (
  chatId: string | null,
  request: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
) => {
  if (!chatId) {
    console.error("Chat ID is required");
    return;
  }

  const newMessageId = new Date().toISOString(); // More standard format for a temporary ID
  const newMessage: Message = {
    id: newMessageId,
    request,
    response: null,
  };

  // Optimistically add the new message to the UI
  setMessages((prevMessages) => [...prevMessages, newMessage]);

  try {
    // Simulating an API response or using a real API
    const simulatedResponse = "Example response text from the server";
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate delay

    // Update the message with the server's response
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === newMessageId
          ? { ...message, response: simulatedResponse }
          : message,
      ),
    );

    // Post the message to the server and receive the permanent ID
    const response = await axios.post("/api/message/create", {
      chatId,
      request,
      response: simulatedResponse,
    });

    if (response.status === 201) {
      const createdMessageId = response.data.id; // Assuming the server response includes the ID

      // Update the message with the permanent ID
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === newMessageId
            ? { ...message, id: createdMessageId }
            : message,
        ),
      );
    } else {
      throw new Error("Error saving the message to the server");
    }

    return response.status;
  } catch (error) {
    console.error(
      "An error occurred during the message creation process:",
      error,
    );
    return null;
  }
};
