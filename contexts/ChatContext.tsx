"use client";

import { Chat } from "@prisma/client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { Message } from "../types";

interface ChatHistory {
  today: Chat[];
  yesterday: Chat[];
  previousDays: Chat[];
}

interface ChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
  chatId: string | null;
  setChatId: React.Dispatch<React.SetStateAction<string | null>>;
  sidebarChats: ChatHistory;
  setSidebarChats: React.Dispatch<React.SetStateAction<ChatHistory>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [chatId, setChatId] = useState<string | null>(null);
  const [sidebarChats, setSidebarChats] = useState<ChatHistory>({
    today: [],
    yesterday: [],
    previousDays: [],
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        isSidebarOpen,
        setSidebarOpen,
        toggleSidebar,
        chatId,
        setChatId,
        sidebarChats,
        setSidebarChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
