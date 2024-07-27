// File: app/api/chat/find/messages/[chatId]/route.ts

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

// Initialize Prisma Client

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
    const messages = await getChatMessages(chatId);
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

async function getChatMessages(chatId: string) {
  // This function interacts with the database to fetch messages
  return await prisma.message.findMany({
    where: { chatId },
    orderBy: { createdAt: "asc" },
  });
}
