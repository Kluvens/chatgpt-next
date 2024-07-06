import React, { useState, useRef, useEffect } from 'react';
import UserMessage from './UserMessage';
import ModelMessage from './ModelMessage';
import AvatarDropDown from './AvatarDropDown';
import { Chat } from '@/types';
import { NewChatIcon, CollapseIcon  } from './icons/Icons';
import ShareChat from './ShareChat';
import Settings from './Settings';

interface ChatMessagesProps {
  chats: Chat[];
  updateMessage: (id: string, newText: string) => void;
  toggleMarkBad: (id: string) => void;
  regenerateResponse: (id: string) => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ chats, updateMessage, toggleMarkBad, regenerateResponse }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(chats);
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chats.length]);

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden h-full w-full">
      <div className="flex flex-col text-sm md:pb-9">
        {/* Model Selection */}
        <div className="sticky top-0 p-3 mb-1.5 flex items-center justify-between z-10 h-14 p-2 font-semibold token-surface-primary">
          <div className="flex items-center gap-2 overflow-hidden gap-0">
            <div className="flex items-center">
              <button className="h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:bg-gray-200 focus-visible:bg-gray-200">
                <CollapseIcon />
              </button>
              <div role='button' tabIndex={0} className="flex items-center justify-center h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:bg-gray-200 focus-visible:bg-gray-200">
                <NewChatIcon />
              </div>
              <Settings />
            </div>
            <div role="button" id="radix-:rb1:" aria-haspopup="menu" aria-expanded="false" data-state="closed" className="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-semibold hover:bg-gray-200 radix-state-open:bg-token-main-surface-secondary token-text-secondary rounded-lg py-1.5 overflow-hidden whitespace-nowrap">
              <div className="flex gap-2 token-text-secondary">ChatGPT
                <span className="token-text-secondary">4o</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md text-token-text-tertiary">
                <path fill="currentColor" fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          <div className="flex gap-2 pr-1">
            {/* Share link */}
            <ShareChat />
            {/* Profile Avatar */}
            <AvatarDropDown />
          </div>
        </div>

        {chats.map((chat) => {
          return (
            <div key={chat.id}>
              <UserMessage message={chat.message} onUpdate={(newText) => updateMessage(chat.id, newText)} />
              <ModelMessage response={chat.response} onToggleMarkBad={() => toggleMarkBad(chat.id)} regenerate={() => regenerateResponse(chat.id)} />
            </div>
          )
        })}
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
