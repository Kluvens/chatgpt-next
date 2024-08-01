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
  model: string;
  setModel: React.Dispatch<React.SetStateAction<string>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [chatId, setChatId] = useState<string | null>(null);
  const [model, setModel] = useState<string>("GPT_4O");
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
        model,
        setModel,
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
