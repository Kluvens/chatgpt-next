import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { chatId, request: messageRequest, response } = await request.json();

    if (!chatId || !messageRequest || !response) {
      return NextResponse.json(
        { error: "chatId, request, and response are required" },
        { status: 400 },
      );
    }

    // Check if the chat exists
    const chatExists = await prisma.chat.findUnique({
      where: { id: chatId },
    });

    if (!chatExists) {
      return NextResponse.json({ error: "Chat not found" }, { status: 404 });
    }

    // Create the message and link it to the chat
    const newMessage = await prisma.message.create({
      data: {
        chatId,
        request: messageRequest,
        response,
      },
    });

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating message", details: error },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
