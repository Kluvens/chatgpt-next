import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { chatId, request, response } = req.body;

  if (!chatId || !request || !response) {
    res
      .status(400)
      .json({ error: "chatId, request, and response are required" });
    return;
  }

  try {
    // Check if the chat exists
    const chatExists = await prisma.chat.findUnique({
      where: { id: chatId },
    });

    if (!chatExists) {
      res.status(404).json({ error: "Chat not found" });
      return;
    }

    // Create the message and link it to the chat
    const newMessage = await prisma.message.create({
      data: {
        chatId,
        request,
        response,
      },
    });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Error creating message", details: error });
  } finally {
    await prisma.$disconnect();
  }
}
