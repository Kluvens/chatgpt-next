import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error("Missing OpenAI API key");
}

const openai = new OpenAI({
  apiKey: openaiApiKey,
});

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const message = searchParams.get("message");

    if (!message) {
      return NextResponse.json(
        { message: "Message parameter is required" },
        { status: 400 },
      );
    }

    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Answer questions as concisely as possible",
        },
        { role: "user", content: message },
      ],
      max_tokens: 300,
      stream: true,
    });

    return new Response(
      new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();

          try {
            for await (const chunk of stream) {
              const text = chunk.choices[0]?.delta?.content || "";
              if (text) {
                controller.enqueue(encoder.encode(`data: ${text}\n\n`));
              }
            }
          } catch (err) {
            console.error("Error reading stream:", err);
            controller.error(err);
          } finally {
            controller.close();
          }
        },
      }),
      {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      },
    );
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: (error as Error).message },
      { status: 500 },
    );
  }
}
