"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useChat } from "../../../contexts/ChatContext";
import { addMessage, saveChatMessage } from "../../../utils/chatUtils";
import {
  ChatInputGeneratingIcon,
  FileUploadIcon,
  SendMessageIcon,
} from "../icons/Icons";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setMessages, chatId, isGenerating, setIsGenerating, eventSourceRef } =
    useChat();

  const router = useRouter();
  const pathname = usePathname();

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      if (scrollHeight <= 200) {
        textareaRef.current.style.height = `${scrollHeight}px`;
        textareaRef.current.style.overflowY = "hidden";
      } else {
        textareaRef.current.style.height = "200px";
        textareaRef.current.style.overflowY = "scroll";
      }
    }
  };

  useEffect(() => {
    console.log(isGenerating);
  }, [isGenerating]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files) {
      console.log("Selected files:", files);
    }
  };

  const handleSendMessage = async () => {
    if (pathname === "/chat") {
      router.push(`/request?message=${message.trim()}`);
    } else {
      setMessage("");
      try {
        const { generatedText, tempMessageId } = await addMessage(
          chatId,
          message.trim(),
          setMessages,
          setIsGenerating,
          eventSourceRef,
        );
        await saveChatMessage(
          chatId,
          message.trim(),
          generatedText,
          tempMessageId,
          setMessages,
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleStopGenerating = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current = null;
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full token-surface-primary md:pt-0 md:border-transparent md:w-[calc(100%-.5rem)]">
      <div className="px-3 text-base md:px-4 m-auto md:px-5 lg:px-1 xl:px-5">
        <div className="mx-auto flex flex-1 gap-3 text-base md:max-2-3xl lg:max-w[40rem] xl:max-w-[48rem]">
          <form className="w-full" onSubmit={handleFormSubmit}>
            <div className="relative flex h-full max-w-full flex-1 flex-col">
              <div className="flex w-full items-center">
                <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors token-surface-secondary">
                  <div className="flex items-end">
                    {/* Upload File */}
                    <div className="flex flex-col">
                      <input
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        multiple
                        type="file"
                        tabIndex={-1}
                        className="hidden"
                        style={{ display: "none" }}
                      />
                      <button
                        aria-label="Upload File"
                        onClick={handleButtonClick}
                        className="flex items-center justify-center token-text-primary h-8 w-8 dark:text-white rounded-full focus-visible:outline-black dark:focus-visible:outline-white mb-1 ml-2"
                      >
                        <FileUploadIcon />
                      </button>
                    </div>

                    {/* Text Input */}
                    <div className="flex p-2 min-w-0 flex-1 flex-col">
                      <textarea
                        ref={textareaRef}
                        tabIndex={0}
                        dir="auto"
                        rows={1}
                        placeholder="Message ChatGPT"
                        className="resize-none bg-transparent token-text-primary focus:outline-none"
                        value={message}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                      />
                    </div>

                    {/* Send Button */}
                    {isGenerating ? (
                      <button
                        aria-label="Chat Input Generating"
                        onClick={handleStopGenerating}
                        className="mb-1 mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:bg-gray-400 disabled:text-gray-200 disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:ring-white dark:disabled:bg-gray-700 dark:disabled:text-gray-400"
                      >
                        <ChatInputGeneratingIcon />
                      </button>
                    ) : (
                      <button
                        aria-label="Send Message"
                        onClick={handleSendMessage}
                        className="mb-1 mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:token-surface-tertiary"
                        disabled={!message.trim()}
                      >
                        <SendMessageIcon />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="relative px-2 py-2 text-center text-xs token-text-secondary">
        <span>ChatGPT can make mistakes. Check important info.</span>
      </div>
    </div>
  );
};

export default React.memo(ChatInput);
