"use client";

import { Chat } from "@prisma/client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import { Message } from "../types";

interface ChatHistory {
  today: Chat[];
  yesterday: Chat[];
  previousDays: Chat[];
}

interface ChatContextType {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
  isSidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  toggleSidebar: () => void;
  chatId: string | null;
  setChatId: Dispatch<SetStateAction<string | null>>;
  sidebarChats: ChatHistory;
  setSidebarChats: Dispatch<SetStateAction<ChatHistory>>;
  model: string;
  setModel: Dispatch<SetStateAction<string>>;
  isGenerating: boolean;
  setIsGenerating: Dispatch<SetStateAction<boolean>>;
  eventSourceRef: React.MutableRefObject<EventSource | null>;
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
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
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
        isGenerating,
        setIsGenerating,
        eventSourceRef,
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
