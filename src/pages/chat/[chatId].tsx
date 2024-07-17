import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import ChatMessages from "../../components/ChatMessages";
import ChatInput from "../../components/ChatInput";
import QuestionButton from "@/components/QuestionButton";
import { Chat } from "@/types";
import { motion } from "framer-motion";
import { addChat } from "@/utils/chatUtils";
import { useChat } from "@/contexts/ChatContext";

const Home: React.FC = () => {
  const { chats, setChats, isSidebarOpen, toggleSidebar } = useChat();

  const updateMessage = (id: string, newMessage: string) => {
    setChats(
      chats.map((chat) =>
        chat.id === id ? { ...chat, message: newMessage } : chat
      )
    );
  };

  const regenerateResponse = (chatId: string) => {
    const chat = chats.find((chat) => chat.id === chatId);
    const updatedChats = chats.filter((chat) => chat.id !== chatId);
    setChats(updatedChats);

    try {
      if (chat?.message) {
        addChat(chat?.message, setChats, chats);
      } else {
        console.error("The chat to regenerate is not found");
      }
    } catch (error) {
      console.error("Failed to regenerate response", error);
    }
  };

  const toggleMarkBad = (id: string) => {
    setChats(
      chats.map((chat) =>
        chat.id === id
          ? {
              ...chat,
              response: {
                ...chat.response,
                isResponseBad: !chat.response.isResponseBad,
              },
            }
          : chat
      )
    );
  };

  const containerVariants = {
    close: {
      width: "0rem",
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
      <div className="flex flex-col flex-1 px-1 pt-1">
        <ChatMessages
          chats={chats}
          updateMessage={updateMessage}
          toggleMarkBad={toggleMarkBad}
          regenerateResponse={regenerateResponse}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <ChatInput setChats={setChats} chats={chats} />
      </div>
      <QuestionButton />
    </div>
  );
};

export default Home;
