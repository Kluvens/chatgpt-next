import Sidebar from "@/components/layout/Sidebar";
import QuestionButton from "@/components/question/QuestionButton";
import { useChat } from "@/contexts/ChatContext";
import { addMessage } from "@/utils/chatUtils";
import { motion } from "framer-motion";
import React from "react";
import ChatInput from "../../components/chat/ChatInput";
import ChatMessages from "../../components/chat/ChatMessages";

const Home: React.FC = () => {
  const { messages, setMessages, isSidebarOpen, toggleSidebar } = useChat();

  const updateMessage = (id: string, request: string) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, request } : message,
      ),
    );
  };

  const regenerateResponse = (chatId: string) => {
    const message = messages.find((message) => message.id === chatId);
    const updatedChats = messages.filter((message) => message.id !== chatId);
    setMessages(updatedChats);

    try {
      if (message?.request) {
        addMessage(message?.request, setMessages, messages);
      } else {
        console.error("The chat to regenerate is not found");
      }
    } catch (error) {
      console.error("Failed to regenerate response", error);
    }
  };

  const toggleMarkBad = (id: string) => {
    setMessages(
      messages.map((message) =>
        message.id === id
          ? {
              ...message,
              response: {
                ...message.response,
                isResponseBad: !message.response.isResponseBad,
              },
            }
          : message,
      ),
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
          messages={messages}
          updateMessage={updateMessage}
          toggleMarkBad={toggleMarkBad}
          regenerateResponse={regenerateResponse}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <ChatInput />
      </div>
      <QuestionButton />
    </div>
  );
};

export default Home;
