"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { useChat } from "../../../contexts/ChatContext";
import { fetchChatMessages } from "../../../utils/chatUtils";
import ChatInput from "../../components/chat/ChatInput";
import ChatMessages from "../../components/chat/ChatMessages";
import Sidebar from "../../components/layout/Sidebar";
import QuestionButton from "../../components/question/QuestionButton";

const Home: React.FC = () => {
  const { setMessages, setChatId, setModel } = useChat();
  const pathname = usePathname();
  const chatId = useMemo(() => {
    const pathSegments = pathname.split("/");
    return pathSegments[pathSegments.length - 1];
  }, [pathname]);

  useEffect(() => {
    setChatId(chatId);
    setMessages([]);

    fetchChatMessages(chatId)
      .then((response) => {
        setMessages(response.messages);
        setModel(response.model);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [chatId]);

  return (
    <div className="relative z-0 flex h-screen w-full overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 px-1 pt-1">
        <ChatMessages />
        <ChatInput />
      </div>
      <QuestionButton />
    </div>
  );
};

export default Home;
