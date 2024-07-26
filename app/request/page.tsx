"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useChat } from "../../contexts/ChatContext";
import { addMessage, createChat } from "../../utils/chatUtils";
import ChatInput from "../components/chat/ChatInput";
import ChatMessages from "../components/chat/ChatMessages";
import Sidebar from "../components/layout/Sidebar";

const ChatMessagePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();

  const request = searchParams.get("message");
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

  const model = "GPT_4O";

  const processMessage = async () => {
    try {
      const decodedMessage = decodeURIComponent(request as string);
      console.log(session);
      const chatId = await createChat(session?.user.id || "bug", model);

      if (chatId) {
        // Send the initial message and await a response from the backend
        const responseText = await addMessage(decodedMessage, setMessages);

        // Send the backend response to the server for saving the message
        const messageCreationResponse = await axios.post(
          "/api/message/create",
          {
            chatId,
            request: decodedMessage,
            response: responseText,
          },
        );

        // Handle post-message creation actions
        if (messageCreationResponse.status === 201) {
          router.replace(`/chat/${chatId}`);
        } else {
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
      console.log("session");
      console.log(session);
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
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </motion.div>
      <div className="flex flex-col flex-1 px-1 pt-1">
        <ChatMessages
          messages={messages}
          updateMessage={() => {}}
          regenerateResponse={() => {}}
        />
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
