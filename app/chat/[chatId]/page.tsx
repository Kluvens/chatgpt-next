"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { useChat } from "../../../contexts/ChatContext";
import kv from "../../../lib/kv";
import { Message } from "../../../types";
import { fetchChatMessages } from "../../../utils/chatUtils";
import ChatInput from "../../components/chat/ChatInput";
import ChatMessages from "../../components/chat/ChatMessages";
import Sidebar from "../../components/layout/Sidebar";
import QuestionButton from "../../components/question/QuestionButton";

const Home: React.FC = () => {
  const { setMessages, setChatId, setModel } = useChat();
  const pathname = usePathname();
  const chatId = useMemo(() => {
    const pathSegments = pathname.split("/");
    return pathSegments[pathSegments.length - 1];
  }, [pathname]);

  useEffect(() => {
    async function fetchAndSetMessages() {
      setChatId(chatId);

      try {
        const cachedMessages = await kv.get<Message[]>(chatId);
        if (cachedMessages) {
          setMessages(cachedMessages);
        } else {
          setMessages([]);

          const response = await fetchChatMessages(chatId);
          setMessages(response.messages);
          setModel(response.model);

          await kv.set(chatId, response.messages, { ex: 3600 });
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
        setMessages([]);
      }
    }

    fetchAndSetMessages();
  }, [chatId]);

  return (
    <div className="relative z-0 flex h-screen w-full overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 px-1 pt-1">
        <ChatMessages />
        <ChatInput />
      </div>
      <QuestionButton />
    </div>
  );
};

export default Home;
