"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useChat } from "../../../contexts/ChatContext";
import ChatInput from "../../components/chat/ChatInput";
import ChatMessages from "../../components/chat/ChatMessages";
import Sidebar from "../../components/layout/Sidebar";
import QuestionButton from "../../components/question/QuestionButton";
import { containerVariants } from "../../data/sidebarFM";

const Home: React.FC = () => {
  const { setMessages, isSidebarOpen, setChatId, setModel } = useChat();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const chatId = pathSegments[pathSegments.length - 1];

  const fetchChatMessages = async () => {
    try {
      const response = await fetch(`/api/chat/find/${chatId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch messages: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching chat messages:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchChatMessages()
      .then((response) => {
        setMessages(response.messages);
        setModel(response.model);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    setMessages([]);
    setChatId(chatId);
  }, [chatId]);

  return (
    <div className="relative z-0 flex h-screen w-full overflow-hidden">
      <motion.div
        initial={false}
        animate={isSidebarOpen ? "open" : "close"}
        variants={containerVariants}
        layout
        className="hidden md:flex overflow-hidden"
      >
        <div className="flex-shrink-0 bg-gray-50 w-[260px] overflow-y-auto overflow-x-hidden">
          <Sidebar />
        </div>
      </motion.div>
      <div className="flex flex-col flex-1 px-1 pt-1">
        <ChatMessages />
        <ChatInput />
      </div>
      <QuestionButton />
    </div>
  );
};

export default Home;
