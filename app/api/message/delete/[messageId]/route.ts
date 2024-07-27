import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { messageId: string } },
) {
  const { messageId } = params;

  const messageIdInt = parseInt(messageId, 10);

  try {
    // Attempt to delete the message with the given ID
    const deletedMessage = await prisma.message.delete({
      where: { id: messageIdInt },
    });

    if (deletedMessage) {
      return NextResponse.json(
        { message: "Message deleted successfully" },
        { status: 200 },
      );
    } else {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
