"use client";

import { useEffect, useRef } from "react";
import { useChat } from "../../../contexts/ChatContext";
import { updateMessage } from "../../../utils/chatUtils";
import Header from "../layout/Header";
import ModelMessage from "./ModelMessage";
import UserMessage from "./UserMessage";

const ChatMessages = () => {
  const { messages, setMessages, chatId, setIsGenerating, eventSourceRef } =
    useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const regenerateResponse = async (messageId: string) => {
    const messageToRegenerate = messages.find(
      (message) => message.id === messageId,
    );
    if (messageToRegenerate?.request && chatId) {
      try {
        await updateMessage(
          chatId,
          messageId,
          messageToRegenerate.request,
          setMessages,
          setIsGenerating,
          eventSourceRef,
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const modifyMessage = async (messageId: string, newText: string) => {
    const messageToRegenerate = messages.find(
      (message) => message.id === messageId,
    );
    if (messageToRegenerate?.request && chatId) {
      try {
        await updateMessage(
          chatId,
          messageId,
          newText,
          setMessages,
          setIsGenerating,
          eventSourceRef,
        );
      } catch (error) {
        console.error(error);
      }
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
              onUpdate={(newText) => modifyMessage(message.id, newText)}
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
