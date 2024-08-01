import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

// Define types for the request and parameters
interface Params {
  chatId: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params },
) {
  const { chatId } = params;

  if (!chatId) {
    return NextResponse.json({ error: "Chat ID is required" }, { status: 400 });
  }

  try {
    const chat = await getChatWithMessages(chatId);
    if (!chat) {
      return NextResponse.json({ error: "Chat not found" }, { status: 404 });
    }
    return NextResponse.json(chat, { status: 200 });
  } catch (error) {
    console.error("Error fetching chat and messages:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

async function getChatWithMessages(chatId: string) {
  return prisma.chat.findUnique({
    where: { id: chatId },
    include: {
      messages: {
        orderBy: { createdAt: "asc" }, // Order messages by creation time
      },
      user: true, // Include related user information if needed
    },
  });
}
