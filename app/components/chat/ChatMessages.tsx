"use client";

import { useEffect, useRef } from "react";
import { useChat } from "../../../contexts/ChatContext";
import {
  addMessage,
  deleteMessage,
  saveChatMessage,
} from "../../../utils/chatUtils";
import Header from "../layout/Header";
import ModelMessage from "./ModelMessage";
import UserMessage from "./UserMessage";

const ChatMessages = () => {
  const { messages, setMessages, chatId, setIsGenerating } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  const regenerateResponse = async (messageId: string) => {
    console.log("delete here");
    console.log(messageId);
    const messageToRegenerate = messages.find(
      (message) => message.id === messageId,
    );
    if (messageToRegenerate?.request) {
      const newMessages = messages.filter(
        (message) => message.id !== messageId,
      );
      setMessages(newMessages);
      await deleteMessage(messageId);
      try {
        const { generatedText, tempMessageId } = await addMessage(
          chatId,
          messageToRegenerate.request,
          setMessages,
          setIsGenerating,
          eventSourceRef,
        );
        console.log(generatedText, tempMessageId);
        await saveChatMessage(
          chatId,
          messageToRegenerate.request,
          generatedText,
          tempMessageId,
          setMessages,
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateMessage = async (messageId: string, newText: string) => {
    const messageToRegenerate = messages.find(
      (message) => message.id === messageId,
    );
    if (messageToRegenerate?.request) {
      const newMessages = messages.filter(
        (message) => message.id !== messageId,
      );
      setMessages(newMessages);
      deleteMessage(messageId);
      const { generatedText, tempMessageId } = await addMessage(
        chatId,
        newText,
        setMessages,
        setIsGenerating,
        eventSourceRef,
      );
      await saveChatMessage(
        chatId,
        newText,
        generatedText,
        tempMessageId,
        setMessages,
      );
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  return (
    <div className="flex-1 token-surface-primary text-token-primary overflow-y-auto overflow-x-hidden h-full w-full relative">
      <div className="flex flex-col text-sm md:pb-9">
        <Header />

        {messages.map((message) => (
          <div key={message.id}>
            <UserMessage
              request={message.request}
              onUpdate={(newText) => updateMessage(message.id, newText)}
            />
            <ModelMessage
              response={message.response}
              regenerate={() => regenerateResponse(message.id)}
            />
          </div>
        ))}
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
