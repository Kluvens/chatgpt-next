import { Chat } from "@/types";

export const addChat = async (
  message: string,
  setChats: Function,
  chats: Chat[]
) => {
  const newChatId = new Date().toString();
  let newChat: Chat = {
    id: newChatId,
    message,
    response: {
      response: null,
      audioUrl: "",
      isResponseBad: false,
    },
  };

  setChats([...chats, newChat]);
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setChats((prevChats: Chat[]) =>
      prevChats.map((chat) =>
        chat.id === newChatId
          ? {
              ...chat,
              response: {
                ...chat.response,
                response: "very very very very nice",
              },
            }
          : chat
      )
    );
  } catch (error) {
    console.error(error);
  }

  return newChatId;
};
