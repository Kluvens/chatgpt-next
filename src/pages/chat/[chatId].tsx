import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ChatMessages from '../../components/ChatMessages';
import ChatInput from '../../components/ChatInput';
import QuestionButton from '@/components/QuestionButton';
import { Chat } from '@/types';
import axios from 'axios';

const Home: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([
    { id: 'first', message: 'very nice', response: { response: 'you are right', audioUrl: '', isResponseBad: false } },
    { id: 'second', message: 'very very nice', response: { response: 'you are right', audioUrl: '', isResponseBad: false } },
    { id: 'third', message: 'very very very nice', response: { response: 'The sun dipped below the horizon, casting a golden hue across the tranquil lake. The gentle rustling of leaves and the distant call of a loon added to the serene ambiance, creating a perfect backdrop for reflection. As the sky transitioned from vibrant oranges and pinks to deeper purples and blues, the first stars began to twinkle, mirroring the shimmering water below. It was a moment of pure magic, where time seemed to stand still, allowing one to fully appreciate the beauty and calm of nature', audioUrl: '', isResponseBad: false } },
    { id: 'fourth', message: 'very very very very nice', response: { response: 'The sun dipped below the horizon, casting a golden hue across the tranquil lake. The gentle rustling of leaves and the distant call of a loon added to the serene ambiance, creating a perfect backdrop for reflection. As the sky transitioned from vibrant oranges and pinks to deeper purples and blues, the first stars began to twinkle, mirroring the shimmering water below. It was a moment of pure magic, where time seemed to stand still, allowing one to fully appreciate the beauty and calm of natures evening symphony.', audioUrl: '', isResponseBad: false } },
    { id: 'fifth', message: 'very very very very nice', response: { response: `
    ### Tables

Markdown supports tables as well:

| Syntax    | Description |
|-----------|-------------|
| Header    | Title       |
| Paragraph | Text        |

### Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax.

### Horizontal Rule
    `, audioUrl: '', isResponseBad: false } },
  ])

  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const addChat = async (message: string) => {
    let newChat: Chat = {
      id: new Date().toString(),
      message,
      response: {
        response: null,
        audioUrl: '',
        isResponseBad: false,
      }
    }

    setChats([...chats, newChat]);
    try {
      await wait(5000);
      setChats([...chats, { ...newChat, response: { ...newChat.response, response: 'very very very very nice' } }]);
    } catch (error) {
      console.error(error);
    }
    // try {
    //   const response = await fetch('/api/openai', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ message }),
    //   });

    //   const data = await response.json();
    //   if (data.chatContent) {
    //     newChat.response = data.chatContent;
    //     setChats([...chats, newChat]);
    //   } else {
    //     console.error('Error fetching OpenAI response:', data.error);
    //   }
    // } catch (error) {
    //   console.error('Error fetching OpenAI response:', error);
    // }
  }

  const updateMessage = (id: string, newMessage: string) => {
    setChats(chats.map(chat => chat.id === id ? { ...chat, message: newMessage } : chat))
  }

  const regenerateResponse = (chatId: string) => {
    const chat = chats.find(chat => chat.id === chatId);
    const updatedChats = chats.filter(chat => chat.id !== chatId);
    setChats(updatedChats);

    try {
      // await axios.delete(``);
      if (chat?.message) {
        addChat(chat?.message);
      } else {
        console.error('The chat to regenerate is not found');
      }
    } catch (error) {
      console.error('Failed to regenerate response', error);
    }
  }

  const toggleMarkBad = (id: string) => {
    setChats(chats.map(chat => chat.id === id ? { ...chat, response: { ...chat.response, isResponseBad: !chat.response.isResponseBad } } : chat))
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
          <ChatMessages 
            chats={chats} 
            updateMessage={updateMessage} 
            toggleMarkBad={toggleMarkBad}
            regenerateResponse={regenerateResponse}
          />
          <ChatInput addChat={addChat} />
      </div>
      <QuestionButton />
    </div>
  );
};

export default Home;
