export interface Chat {
  id: string;
  model: ModelType;
  messages: Message[];
  createdAt: Date;
}

export interface Message {
  id: string;
  request: string;
  response: string | null;
}

export enum ModelType {
  GPT_4 = "gpt_4",
  GPT_3_5 = "gpt_3.5",
  GPT_4O = "gpt_4o",
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  chats: Chat[];
  createdAt: Date;
}
