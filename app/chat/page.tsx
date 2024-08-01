"use client";

import { motion } from "framer-motion";
import React from "react";
import { useChat } from "../../contexts/ChatContext";
import ChatHome from "../components/chat/ChatHome";
import ChatInput from "../components/chat/ChatInput";
import Sidebar from "../components/layout/Sidebar";
import { containerVariants } from "../data/sidebarFM";

const Home: React.FC = () => {
  const { isSidebarOpen, setChatId } = useChat();

  setChatId(null);

  return (
    <div className="flex h-screen">
      <motion.div
        initial={false}
        animate={isSidebarOpen ? "open" : "close"}
        variants={containerVariants}
        layout
        className="hidden md:flex flex-shrink-0 bg-gray-50 overflow-x-hidden"
      >
        <Sidebar />
      </motion.div>
      <div className="flex flex-col flex-1 px-1 pt-1">
        <ChatHome />
        <ChatInput />
      </div>
    </div>
  );
};

export default Home;
