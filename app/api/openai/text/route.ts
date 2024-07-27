// File: app/api/openai/completion/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

// Ensure the OpenAI API key is available
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error("Missing OpenAI API key");
}

// Initialize OpenAI client
const openai = new OpenAI({ apiKey: openaiApiKey });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Answer questions as concisely as possible",
        },
        { role: "user", content: message },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 300,
    });

    const chatContent = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({ chatContent });
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
