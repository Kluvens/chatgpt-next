"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useChat } from "../../../contexts/ChatContext";
import ChatInput from "../../components/chat/ChatInput";
import ChatMessages from "../../components/chat/ChatMessages";
import Sidebar from "../../components/layout/Sidebar";
import QuestionButton from "../../components/question/QuestionButton";

const Home: React.FC = () => {
  const { messages, setMessages, isSidebarOpen, toggleSidebar, setChatId } =
    useChat();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const chatId = pathSegments[pathSegments.length - 1];
  setChatId(chatId);

  const fetchChatMessages = async () => {
    try {
      const response = await fetch(`/api/chat/find/messages/${chatId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch messages: ${response.statusText}`);
      }

      const data = await response.json();
      return data; // Assuming data contains the chat messages
    } catch (error) {
      console.error("Error fetching chat messages:", error);
      throw error; // Optional: rethrow to be handled by the caller
    }
  };

  useEffect(() => {
    fetchChatMessages()
      .then((messages) => {
        setMessages(messages);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const updateMessage = (id: string, request: string) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, request } : message,
      ),
    );
  };

  const regenerateResponse = (chatId: string) => {
    // const message = messages.find((message) => message.id === chatId);
    // const updatedChats = messages.filter((message) => message.id !== chatId);
    // setMessages(updatedChats);

    // try {
    //   if (message?.request) {
    //     addMessage(chatId, message?.request, setMessages);
    //   } else {
    //     console.error("The chat to regenerate is not found");
    //   }
    // } catch (error) {
    //   console.error("Failed to regenerate response", error);
    // }
    console.log(chatId);
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
    <div className="relative z-0 flex h-screen w-full overflow-hidden">
      <motion.div
        initial={false}
        animate={isSidebarOpen ? "open" : "close"}
        variants={containerVariants}
        layout
        className="hidden md:flex flex-shrink-0 bg-gray-50 w-[260px] overflow-x-hidden"
      >
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </motion.div>
      <div className="flex flex-col flex-1 px-1 pt-1">
        <ChatMessages
          messages={messages}
          updateMessage={updateMessage}
          regenerateResponse={regenerateResponse}
        />
        <ChatInput />
      </div>
      <QuestionButton />
    </div>
  );
};

export default Home;
