"use client";

import { Chat } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useChat } from "../../../contexts/ChatContext";
import { fetchChats, splitChatsByDate } from "../../../utils/sidebarUtils";
import HistoryItem from "../common/HistoryItem";
import { CollapseIcon, NewChatIcon } from "../icons/Icons";

const Sidebar = () => {
  const router = useRouter();
  const { sidebarChats, setSidebarChats, toggleSidebar, chatId } = useChat();

  useEffect(() => {
    const setSidebarChatsByDate = async () => {
      const fetchedChats = await fetchChats();
      const chatsByDate = splitChatsByDate(fetchedChats);
      setSidebarChats({
        today: chatsByDate.todayChats.reverse(),
        yesterday: chatsByDate.yesterdayChats.reverse(),
        previousDays: chatsByDate.previousChats.reverse(),
      });
    };

    setSidebarChatsByDate();
  }, [chatId]);

  return (
    <div className="sidebar-surface-primary h-full w-full">
      <div className="flex h-full min-h-0 flex-col pt-2">
        <div className="relative h-full flex-1 items-start">
          <nav className="flex h-full flex-col px-3 pb-3.5">
            <div className="flex justify-between flex h-14 items-center">
              <button
                aria-label="Collapse Icon"
                className="h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:sidebar-surface-secondary focus-visible:token-surface-secondary"
                onClick={toggleSidebar}
              >
                <CollapseIcon />
              </button>
              <button
                aria-label="New Chat Icon"
                className="h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:sidebar-surface-secondary focus-visible:token-surface-secondary"
                onClick={() => {
                  router.push("/chat");
                }}
              >
                <NewChatIcon />
              </button>
            </div>
            <div className="flex-col overflow-y-auto flex-1 -mr-2 pr-2 transition-opacity duration-500">
              {/* Chat History */}
              <div className="flex flex-col gap-2 pb-2 text-md mt-5">
                {/* Render function for chat history */}
                {Object.entries(sidebarChats).map(
                  ([key, chats]) =>
                    chats.length !== 0 && (
                      <div className="relative mt-5" key={key}>
                        <div className="flex h-9 items-center">
                          <h3 className="pb-2 pt-3 px-2 text-sm font-semibold token-text-secondary">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </h3>
                        </div>
                        <ol className="token-text-primary">
                          {chats.map((chat: Chat, index: number) => (
                            <HistoryItem key={index} chat={chat} />
                          ))}
                        </ol>
                      </div>
                    ),
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
