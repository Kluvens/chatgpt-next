import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ChatMessages from '../../components/ChatMessages';
import ChatInput from '../../components/ChatInput';
import { Message } from '../../components/ChatMessages';
import QuestionButton from '@/components/QuestionButton';

const Home: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: '12d', sender: 'user', isBad: false, audioUrl: '', text: 'According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or ‘embodied artificial intelligence’ (AI) – is one aspect of the disruptive effects of technology on the labour market. ‘Disembodied AI’, like the algorithms running in our smartphones, is another.' },
    { id: '12e', sender: 'other', isBad: false, audioUrl: '', text: 'According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or ‘embodied artificial intelligence’ (AI) – is one aspect of the disruptive effects of technology on the labour market. ‘Disembodied AI’, like the algorithms running in our smartphones, is another.' },
    { id: 'gasf', sender: 'user', isBad: false, audioUrl: '', text: 'Hello' },
    { id: '12g', sender: 'other', isBad: false, audioUrl: '', text: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello' }
  ]);

  const addMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateMessage = (id: string, newText: string) => {
    setMessages(messages.map(msg => msg.id === id ? { ...msg, text: newText } : msg));
  };

  const toggleMarkBad = (id: string) => {
    setMessages(messages.map(msg => msg.id === id ? { ...msg, isBad: !msg.isBad } : msg));
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
          <ChatMessages messages={messages} updateMessage={updateMessage} toggleMarkBad={toggleMarkBad} />
          <ChatInput addMessage={addMessage} />
      </div>
      <QuestionButton />
    </div>
  );
};

export default Home;
