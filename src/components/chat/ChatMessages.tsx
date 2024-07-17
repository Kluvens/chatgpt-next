import React, { useRef, useEffect } from "react";
import UserMessage from "./UserMessage";
import ModelMessage from "./ModelMessage";
import { Chat } from "@/types";
import Header from "../layout/Header";

interface ChatMessagesProps {
  chats: Chat[];
  updateMessage: (id: string, newText: string) => void;
  toggleMarkBad: (id: string) => void;
  regenerateResponse: (id: string) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  chats,
  updateMessage,
  toggleMarkBad,
  regenerateResponse,
  isSidebarOpen,
  toggleSidebar,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats.length]);

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden h-full w-full relative">
      <div className="flex flex-col text-sm md:pb-9">
        {/* Model Selection */}
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {chats.map((chat) => {
          return (
            <div key={chat.id}>
              <UserMessage
                message={chat.message}
                onUpdate={(newText) => updateMessage(chat.id, newText)}
              />
              <ModelMessage
                response={chat.response}
                onToggleMarkBad={() => toggleMarkBad(chat.id)}
                regenerate={() => regenerateResponse(chat.id)}
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
