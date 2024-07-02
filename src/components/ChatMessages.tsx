import React, { useState, useRef, useEffect } from 'react';
import UserMessage from './UserMessage';
import ModelMessage from './ModelMessage';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LoadingMessage from './LoadingMessage';
import { Chat } from '@/types';
import { NewChatIcon } from './icons/Icons';
import ShareChat from './ShareChat';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-xl-heavy">
                  <path fill="currentColor" fillRule="evenodd" d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" clipRule="evenodd"></path>
                </svg>
              </button>
              <div role='button' tabIndex={0} className="flex items-center justify-center h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:bg-gray-200 focus-visible:bg-gray-200">
                <NewChatIcon />
              </div>
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
            <DropdownMenu>
              <DropdownMenuTrigger className='h-10 w-10 flex items-center justify-center rounded-full focus-visible:outline-0 focus-visible:bg-gray-200 hover:bg-gray-200'>
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="https://lh3.googleusercontent.com/a/AEdFTp7GohtCTuOxye4y1c9F_BD4P6svNv7398pMSiLS=s96-c"
                    loading="lazy"
                    decoding="async"
                  />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 rounded-3xl mr-3">
                <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2'>
                  <div className="flex items-center justify-center token-text-secondary h-5 w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
                      <path fill="currentColor" fillRule="evenodd" d="m12 3.219 2.463 1.716a2 2 0 0 0 .791.327l2.955.529.529 2.955a2 2 0 0 0 .328.791L20.78 12l-1.715 2.463a2 2 0 0 0-.328.791l-.529 2.955-2.954.529c-.285.05-.555.162-.792.327L12 20.781l-2.463-1.715a2 2 0 0 0-.791-.328l-2.955-.529-.529-2.955a2 2 0 0 0-.327-.79L3.219 12l1.716-2.463a2 2 0 0 0 .327-.791l.529-2.955 2.955-.529a2 2 0 0 0 .79-.327zm1.143-1.641a2 2 0 0 0-2.286 0L8.394 3.294l-2.955.528a2 2 0 0 0-1.617 1.617l-.528 2.955-1.716 2.463a2 2 0 0 0 0 2.286l1.716 2.463.528 2.955a2 2 0 0 0 1.617 1.617l2.955.528 2.463 1.716a2 2 0 0 0 2.286 0l2.463-1.716 2.955-.528a2 2 0 0 0 1.617-1.617l.528-2.955 1.716-2.463a2 2 0 0 0 0-2.286l-1.716-2.463-.528-2.955a2 2 0 0 0-1.617-1.617l-2.955-.528z" clipRule="evenodd"></path>
                      <path fill="currentColor" d="M11.588 8.102a.5.5 0 0 1 .824 0l1.074 1.567a.5.5 0 0 0 .272.197l1.822.537a.5.5 0 0 1 .255.785l-1.159 1.505a.5.5 0 0 0-.103.32l.052 1.898a.5.5 0 0 1-.667.485l-1.79-.636a.5.5 0 0 0-.335 0l-1.79.636a.5.5 0 0 1-.668-.485l.052-1.899a.5.5 0 0 0-.103-.319l-1.159-1.505a.5.5 0 0 1 .255-.785l1.822-.537a.5.5 0 0 0 .271-.197z"></path>
                    </svg>
                  </div>
                  My plan
                </DropdownMenuItem>
                <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2'>
                  <div className="flex items-center justify-center token-text-secondary h-5 w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
                      <path fill="currentColor" fillRule="evenodd" d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M10.968 14.002a1 1 0 0 1-.719 1.218C7.467 15.937 5.5 18.29 5.5 21a1 1 0 1 1-2 0c0-3.729 2.69-6.8 6.25-7.717a1 1 0 0 1 1.218.72" clipRule="evenodd"></path>
                      <path fill="currentColor" d="M17.25 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M17.25 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0"></path>
                    </svg>
                  </div>
                  My GPTs
                </DropdownMenuItem>
                <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2'>
                  <div className="flex items-center justify-center token-text-secondary h-5 w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
                      <path fill="currentColor" d="M10.663 6.387c.152-.096.337.023.337.203V8a1 1 0 1 0 2 0V6.59c0-.18.185-.3.337-.203a2.5 2.5 0 0 1-.357 4.413 1 1 0 0 1 .02.2v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 .02-.2 2.5 2.5 0 0 1-.357-4.413"></path>
                      <path fill="currentColor" d="M17.975 4.01A8 8 0 0 0 17.4 4H9.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C6 6.361 6 6.943 6 7.8v8.37c.313-.11.65-.17 1-.17h11V4.6c0-.297 0-.459-.01-.575l-.001-.014zM17.657 18H7a1 1 0 1 0 0 2h10.657a5.5 5.5 0 0 1 0-2M4 19V7.759c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C8.29 2 8.954 2 9.758 2h7.674c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 0 1 .874.874c.138.271.182.541.201.77.017.208.017.454.017.706V17a1 1 0 0 1-.078.386c-.476 1.14-.476 2.089 0 3.228A1 1 0 0 1 19 22H7a3 3 0 0 1-3-3"></path>
                    </svg>
                  </div>
                  Customize ChatGPT
                </DropdownMenuItem>
                <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2'>
                  <div className="flex items-center justify-center token-text-secondary h-5 w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
                      <path fill="currentColor" fillRule="evenodd" d="M11.568 3.5a1 1 0 0 0-.863.494l-.811 1.381A3 3 0 0 1 7.33 6.856l-1.596.013a1 1 0 0 0-.858.501l-.44.761a1 1 0 0 0-.003.992l.792 1.4a3 3 0 0 1 0 2.954l-.792 1.4a1 1 0 0 0 .004.992l.439.76a1 1 0 0 0 .858.502l1.596.013a3 3 0 0 1 2.564 1.48l.811 1.382a1 1 0 0 0 .863.494h.87a1 1 0 0 0 .862-.494l.812-1.381a3 3 0 0 1 2.563-1.481l1.596-.013a1 1 0 0 0 .859-.501l.439-.761a1 1 0 0 0 .004-.992l-.793-1.4a3 3 0 0 1 0-2.953l.793-1.401a1 1 0 0 0-.004-.992l-.439-.76a1 1 0 0 0-.859-.502l-1.596-.013a3 3 0 0 1-2.563-1.48L13.3 3.993a1 1 0 0 0-.862-.494zM8.98 2.981A3 3 0 0 1 11.568 1.5h.87a3 3 0 0 1 2.588 1.481l.81 1.382a1 1 0 0 0 .855.494l1.597.013a3 3 0 0 1 2.575 1.502l.44.76a3 3 0 0 1 .011 2.975l-.792 1.4a1 1 0 0 0 0 .985l.792 1.401a3 3 0 0 1-.012 2.974l-.439.761a3 3 0 0 1-2.575 1.503l-1.597.012a1 1 0 0 0-.854.494l-.811 1.382a3 3 0 0 1-2.588 1.481h-.87a3 3 0 0 1-2.588-1.481l-.811-1.382a1 1 0 0 0-.855-.494l-1.596-.012a3 3 0 0 1-2.576-1.503l-.439-.76a3 3 0 0 1-.012-2.975l.793-1.4a1 1 0 0 0 0-.985l-.793-1.4a3 3 0 0 1 .012-2.975l.44-.761A3 3 0 0 1 5.717 4.87l1.596-.013a1 1 0 0 0 .855-.494z" clipRule="evenodd"></path>
                      <path fill="currentColor" fillRule="evenodd" d="M12.003 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8.502 12a3.5 3.5 0 1 1 7 .001 3.5 3.5 0 0 1-7-.001" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2'>
                  <div className="flex items-center justify-center token-text-secondary h-5 w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
                      <path fill="currentColor" fillRule="evenodd" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a1 1 0 1 1 0 2zm9.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 13H11a1 1 0 1 1 0-2h6.586l-2.293-2.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
