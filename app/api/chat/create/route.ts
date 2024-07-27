import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await request.json();
    const { userId, model } = body;

    if (!userId || !model) {
      return NextResponse.json(
        { error: "User ID and model type are required" },
        { status: 400 },
      );
    }

    const newChat = await prisma.chat.create({
      data: {
        userId,
        model,
      },
    });

    return NextResponse.json(newChat, { status: 201 });
  } catch (error) {
    console.error("Error creating chat:", error);
    return NextResponse.json(
      { error: "Error creating chat", details: error },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
