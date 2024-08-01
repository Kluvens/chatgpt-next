"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useChat } from "../../contexts/ChatContext";
import { addMessage, createChat } from "../../utils/chatUtils";
import ChatInput from "../components/chat/ChatInput";
import ChatMessages from "../components/chat/ChatMessages";
import Sidebar from "../components/layout/Sidebar";
import { containerVariants } from "../data/sidebarFM";

const ChatMessagePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();

  const request = searchParams.get("message");
  const { model, setMessages, isSidebarOpen } = useChat();

  const processMessage = async () => {
    try {
      const decodedMessage = decodeURIComponent(request as string);
      const chatId = await createChat(session?.user.id || "bug", model);

      if (chatId) {
        // Send the initial message and await a response from the backend
        try {
          await addMessage(chatId, decodedMessage, setMessages);

          router.replace(`/chat/${chatId}`);
        } catch (error) {
          console.error("Error saving the message to the server");
        }
      }
    } catch (error) {
      console.error("Error processing message:", error);
    }
  };

  useEffect(() => {
    if (!request) return;

    if (session?.user) {
      processMessage();
    }
  }, [session]);

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
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
};

const PageWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ChatMessagePage />
  </Suspense>
);

export default PageWrapper;
