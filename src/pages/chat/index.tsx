import ChatHome from "@/components/chat/ChatHome";
import ChatInput from "@/components/chat/ChatInput";
import Sidebar from "@/components/layout/Sidebar";
import { useChat } from "@/contexts/ChatContext";
import { motion } from "framer-motion";
import React from "react";

const Home: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useChat();

  const containerVariants = {
    close: {
      width: "0px",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    open: {
      width: "260px",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  return (
    <div className="flex h-screen">
      <motion.div
        initial={false}
        animate={isSidebarOpen ? "open" : "close"}
        variants={containerVariants}
        layout
        className="hidden md:flex flex-shrink-0 bg-gray-50 overflow-x-hidden"
      >
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </motion.div>
      <div className="flex flex-col flex-1">
        <ChatHome />
        <ChatInput />
      </div>
    </div>
  );
};

export default Home;
