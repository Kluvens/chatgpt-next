import ChatInput from "@/components/chat/ChatInput";
import ChatMessages from "@/components/chat/ChatMessages";
import Sidebar from "@/components/layout/Sidebar";
import QuestionButton from "@/components/question/QuestionButton";
import { useChat } from "@/contexts/ChatContext";
import { addMessage } from "@/utils/chatUtils";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ChatMessagePage = () => {
  const router = useRouter();
  const { request } = router.query;
  const { messages, setMessages, isSidebarOpen, toggleSidebar } = useChat();

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
    if (request) {
      const decodedMessage = decodeURIComponent(request as string);
      addMessage(decodedMessage, setMessages, messages).then((newChatId) => {
        router.replace(`/chat/${newChatId}`);
      });
    }
  }, [request]);

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
          updateMessage={() => {}}
          regenerateResponse={() => {}}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <ChatInput />
      </div>
      <QuestionButton />
    </div>
  );
};

export default ChatMessagePage;
