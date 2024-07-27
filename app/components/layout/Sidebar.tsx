"use client";

import { Chat } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useChat } from "../../../contexts/ChatContext";
import HistoryItem from "../common/HistoryItem";
import { CollapseIcon, NewChatIcon } from "../icons/Icons";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  const router = useRouter();
  const { sidebarChats, setSidebarChats } = useChat();

  // const [chatHistory, setChatHistory] = useState({
  //   today: [
  //     "Interact Next js with the backend",
  //     "This is second for today",
  //     "This is third for today",
  //   ],
  //   yesterday: [
  //     "This is first for yesterday",
  //     "This is second for yesterday",
  //     "This is third for yesterday",
  //     "This is fourth for yesterday",
  //     "This is first for yesterday",
  //     "This is second for yesterday",
  //     "This is third for yesterday",
  //     "This is fourth for yesterday",
  //     "This is first for yesterday",
  //     "This is second for yesterday",
  //     "This is third for yesterday",
  //     "This is fourth for yesterday",
  //     "This is first for yesterday",
  //     "This is second for yesterday",
  //     "This is third for yesterday",
  //     "This is fourth for yesterday",
  //     "This is first for yesterday",
  //     "This is second for yesterday",
  //     "This is third for yesterday",
  //     "This is fourth for yesterday",
  //     "This is first for yesterday",
  //     "This is second for yesterday",
  //     "This is third for yesterday",
  //     "This is fourth for yesterday",
  //   ],
  // });

  const splitChatsByDate = (chats: Chat[]) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const todayChats: Chat[] = [];
    const yesterdayChats: Chat[] = [];
    const previousChats: Chat[] = [];

    chats.forEach((chat) => {
      const chatDate = new Date(chat.createdAt);
      if (isSameDay(chatDate, today)) {
        todayChats.push(chat);
      } else if (isSameDay(chatDate, yesterday)) {
        yesterdayChats.push(chat);
      } else {
        previousChats.push(chat);
      }
    });

    setSidebarChats({
      today: todayChats.map((chat) => chat.id),
      yesterday: yesterdayChats.map((chat) => chat.id),
      previousDays: previousChats.map((chat) => chat.id),
    });
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await fetch(`/api/chat/find/chats`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        splitChatsByDate(data);
      } catch (error) {
        console.error("Failed to fetch chat history:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="sidebar-surface-primary h-full w-full">
      <div className="flex h-full min-h-0 pt-3 flex-col">
        <div className="relative h-full flex-1 items-start">
          <nav className="flex h-full flex-col px-3 pb-3.5">
            <div className="flex justify-between flex h-14 items-center">
              <button
                className="h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:sidebar-surface-secondary focus-visible:token-surface-secondary"
                onClick={toggleSidebar}
              >
                <CollapseIcon />
              </button>
              <button
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
                <div>
                  {/* Chat History Today */}
                  <div className="relative mt-5">
                    <div className="flex h-9 items-center">
                      <h3 className="pb-2 pt-3 px-2 text-sm font-semibold token-text-secondary">
                        Today
                      </h3>
                    </div>
                    <ol className="token-text-primary">
                      {sidebarChats.today.map((chat, index) => (
                        <HistoryItem key={index} chat={chat} />
                      ))}
                    </ol>
                  </div>
                  {/* Chat History Yesterday */}
                  <div className="relative mt-5">
                    <div>
                      <span className="flex h-9 items-center">
                        <h3 className="pb-2 pt-3 px-2 text-sm font-semibold token-text-secondary">
                          Yesterday
                        </h3>
                      </span>
                    </div>
                    <ol className="token-text-primary">
                      {sidebarChats.yesterday.map((chat, index) => (
                        <HistoryItem key={index} chat={chat} />
                      ))}
                    </ol>
                  </div>
                  {/* Placeholder for Previous 7 Days */}
                  <div></div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
