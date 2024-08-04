import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: { messageId: string } },
) {
  const { messageId } = params;
  const messageIdInt = parseInt(messageId, 10);

  if (isNaN(messageIdInt)) {
    return NextResponse.json({ error: "Invalid messageId" }, { status: 400 });
  }

  try {
    const { request: messageRequest, response } = await request.json();

    if (!messageRequest || !response) {
      return NextResponse.json(
        { error: "request and response are required" },
        { status: 400 },
      );
    }

    // Check if the message exists
    const messageExists = await prisma.message.findUnique({
      where: { id: messageIdInt },
    });

    if (!messageExists) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }

    // Update the message
    const updatedMessage = await prisma.message.update({
      where: { id: messageIdInt },
      data: {
        request: messageRequest,
        response,
      },
    });

    return NextResponse.json(updatedMessage, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating message", details: error },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
