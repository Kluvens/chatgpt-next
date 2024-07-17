import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addChat } from "@/utils/chatUtils";
import { useChat } from "@/contexts/ChatContext";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import ChatMessages from "@/components/ChatMessages";
import ChatInput from "@/components/ChatInput";
import QuestionButton from "@/components/QuestionButton";

const ChatMessagePage = () => {
  const router = useRouter();
  const { message } = router.query;
  const { chats, setChats, isSidebarOpen, toggleSidebar } = useChat();

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

  useEffect(() => {
    if (message) {
      const decodedMessage = decodeURIComponent(message as string);
      addChat(decodedMessage, setChats, chats).then((newChatId) => {
        router.replace(`/chat/${newChatId}`);
      });
    }
  }, [message]);

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
          updateMessage={() => {}}
          toggleMarkBad={() => {}}
          regenerateResponse={() => {}}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <ChatInput setChats={setChats} chats={chats} />
      </div>
      <QuestionButton />
    </div>
  );
};

export default ChatMessagePage;
