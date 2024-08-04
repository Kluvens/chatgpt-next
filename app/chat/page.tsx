"use client";

import React, { useEffect } from "react";
import { useChat } from "../../contexts/ChatContext";
import ChatHome from "../components/chat/ChatHome";
import ChatInput from "../components/chat/ChatInput";
import Sidebar from "../components/layout/Sidebar";
import QuestionButton from "../components/question/QuestionButton";

const Home: React.FC = () => {
  const { setChatId, setMessages } = useChat();

  useEffect(() => {
    setChatId(null);
    setMessages([]);
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 px-1 pt-1">
        <ChatHome />
        <ChatInput />
      </div>
      <QuestionButton />
    </div>
  );
};

export default Home;
