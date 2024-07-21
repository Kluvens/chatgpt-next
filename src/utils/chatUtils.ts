import { Message } from "@/types";

export const addMessage = async (
  request: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  messages: Message[],
) => {
  const newMessageId = new Date().toString();
  const newMessage: Message = {
    id: newMessageId,
    request,
    response: {
      response: null,
      audioUrl: "",
      isResponseBad: false,
    },
  };

  setMessages([...messages, newMessage]);
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setMessages((prevMessages: Message[]) =>
      prevMessages.map((message) =>
        message.id === newMessageId
          ? {
              ...message,
              response: {
                ...message.response,
                response: "very very very very nice",
              },
            }
          : message,
      ),
    );
  } catch (error) {
    console.error(error);
  }

  return newMessageId;
};
