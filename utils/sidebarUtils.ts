import { Chat } from "@prisma/client";
import { isSameDay } from "./generalUtils";

export const splitChatsByDate = (chats: Chat[]) => {
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

  return {
    todayChats,
    yesterdayChats,
    previousChats,
  };
};

export const fetchChats = async () => {
  try {
    const res = await fetch(`/api/chat/find/chats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching chats:", error);
    return null;
  }
};
