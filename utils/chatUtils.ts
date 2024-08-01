"use client";

import axios from "axios";
import { Message } from "../types";

export const createChat = async (userId: string, model: string) => {
  try {
    const response = await axios.post("/api/chat/create", {
      userId,
      model,
    });
    return response.data.id;
  } catch (error) {
    console.error("Error creating chat:", error);
    return null;
  }
};

export const deleteMessage = async (messageId: string) => {
  try {
    const response = await axios.delete(`/api/message/delete/${messageId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to delete message. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error deleting message:", error);
    throw error;
  }
};

// export const addMessage = async (
//   chatId: string | null,
//   request: string,
//   messages: Message[],
//   setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
// ) => {
//   if (!chatId) {
//     console.error("Chat ID is required");
//     return;
//   }

//   const newMessageId = new Date().toString();
//   const newMessage: Message = {
//     id: newMessageId,
//     request,
//     response: null,
//   };

//   setMessages((prevMessages) => [...prevMessages, newMessage]);
//   try {
//     // const response = await fetch("/api/openai/text", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify({ message: request }),
//     // });

//     // if (!response.ok) {
//     //   throw new Error("Failed to fetch OpenAI response");
//     // }

//     // const data = await response.json();
//     // const generatedText = data.chatContent;
//     const generatedText =
//       "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows veryd";

//     await new Promise((resolve) => setTimeout(resolve, 3000));

//     setMessages((prevMessages: Message[]) =>
//       prevMessages.map((message) =>
//         message.id === newMessageId
//           ? {
//               ...message,
//               response: generatedText,
//             }
//           : message,
//       ),
//     );

//     const messageCreationResponse = await axios.post("/api/message/create", {
//       chatId,
//       request,
//       response: generatedText,
//     });

//     if (messageCreationResponse.status !== 201) {
//       console.error("Error saving the message to the server");
//     }

//     const createdMessage = messageCreationResponse.data.json();
//     console.log("created message is", createdMessage);
//     const createdMessageId = createdMessage.id;

//     setMessages((prevMessages: Message[]) =>
//       prevMessages.map((message) =>
//         message.id === newMessageId
//           ? {
//               ...message,
//               id: createdMessageId,
//             }
//           : message,
//       ),
//     );

//     return messageCreationResponse.status;
//   } catch (error) {
//     console.error(error);
//   }

//   return null;
// };

export const addMessage = async (
  chatId: string | null,
  request: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
) => {
  if (!chatId) {
    console.error("Chat ID is required");
    return;
  }

  const newMessageId = new Date().toISOString();
  const newMessage: Message = {
    id: newMessageId,
    request,
    response: null,
  };

  // Optimistically add the new message to the UI
  setMessages((prevMessages) => [...prevMessages, newMessage]);

  try {
    const eventSource = new EventSource(
      `/api/openai/stream?message=${encodeURIComponent(request)}`,
    );

    let generatedText = "";

    eventSource.onmessage = (event) => {
      const { data } = event;
      generatedText += data;
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === newMessageId
            ? { ...message, response: (message.response || "") + data }
            : message,
        ),
      );
    };

    eventSource.onerror = async () => {
      eventSource.close();
      try {
        // Save the message with the final response to the server
        const messageCreationResponse = await axios.post(
          "/api/message/create",
          {
            chatId,
            request,
            response: generatedText,
          },
        );

        if (messageCreationResponse.status === 201) {
          const createdMessageId = messageCreationResponse.data.id;

          // Update the message with the permanent ID
          setMessages((prevMessages) =>
            prevMessages.map((message) =>
              message.id === newMessageId
                ? { ...message, id: createdMessageId }
                : message,
            ),
          );

          console.log("save properly");
        } else {
          throw new Error("Error saving the message to the server");
        }
      } catch (error) {
        console.error(
          "An error occurred during the message creation process:",
          error,
        );
      }
    };
  } catch (error) {
    console.error(
      "An error occurred during the message creation process:",
      error,
    );
    return null;
  }
};

export const getResponseAudio = async (response: string, voice: string) => {
  try {
    const openaiResponse = await fetch("/api/openai/audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatContent: response, voice }),
    });

    if (!openaiResponse.ok) {
      throw new Error(
        `Failed to get response audio. Status: ${openaiResponse.status}`,
      );
    }

    return openaiResponse;
  } catch (error) {
    console.error("Error getting response audio. Status:", error);
    throw error;
  }
};
