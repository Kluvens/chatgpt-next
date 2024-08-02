"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useChat } from "../../contexts/ChatContext";
import { addMessage, createChat, saveChatMessage } from "../../utils/chatUtils";
import ChatInput from "../components/chat/ChatInput";
import ChatMessages from "../components/chat/ChatMessages";
import Sidebar from "../components/layout/Sidebar";

const ChatMessagePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();

  const request = searchParams.get("message");
  const { model, setMessages, setIsGenerating, eventSourceRef } = useChat();

  const processMessage = async () => {
    try {
      const decodedMessage = decodeURIComponent(request as string);
      const chatId = await createChat(session?.user.id || "bug", model);

      if (chatId) {
        // Send the initial message and await a response from the backend
        try {
          const { generatedText, tempMessageId } = await addMessage(
            chatId,
            decodedMessage,
            setMessages,
            setIsGenerating,
            eventSourceRef,
          );
          await saveChatMessage(
            chatId,
            decodedMessage,
            generatedText,
            tempMessageId,
            setMessages,
          );

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

    setMessages([]);

    if (session?.user) {
      processMessage();
    }
  }, [session]);

  return (
    <div className="flex h-screen">
      <Sidebar />

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
