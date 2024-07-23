"use client";

import { Message } from "../types";

export const addMessage = async (
  request: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  messages: Message[],
) => {
  const newMessageId = new Date().toString();
  const newMessage: Message = {
    id: newMessageId,
    request,
    response: null,
  };

  console.log(newMessage);

  setMessages([...messages, newMessage]);
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
  } catch (error) {
    console.error(error);
  }

  return newMessageId;
};
