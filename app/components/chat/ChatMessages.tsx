"use client";

import React, { useEffect, useRef } from "react";
import { Message } from "../../../types";
import Header from "../layout/Header";
import ModelMessage from "./ModelMessage";
import UserMessage from "./UserMessage";

interface ChatMessagesProps {
  messages: Message[];
  updateMessage: (id: string, newText: string) => void;
  regenerateResponse: (id: string) => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  updateMessage,
  regenerateResponse,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  return (
    <div className="flex-1 token-surface-primary text-token-primary overflow-y-auto overflow-x-hidden h-full w-full relative">
      <div className="flex flex-col text-sm md:pb-9">
        {/* Model Selection */}
        <Header />

        {messages.map((message) => {
          return (
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
          );
        })}
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
