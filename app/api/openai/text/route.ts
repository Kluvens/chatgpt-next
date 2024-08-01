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
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Hello!" },
      ],
      stream: true,
    });

    for await (const chunk of completion) {
      if (chunk.choices[0].finish_reason === "stop") {
        return;
      }
    }

    // const encoder = new TextEncoder();
    // const readable = new Readable({
    //   read() {
    //     openai.chat.completions
    //       .create({
    //         model: "gpt-3.5-turbo",
    //         messages: [
    //           {
    //             role: "system",
    //             content: "Answer questions as concisely as possible",
    //           },
    //           { role: "user", content: message },
    //         ],
    //         max_tokens: 300,
    //         stream: true,
    //       })
    //       .then((response) => {
    //         response.addListener("data", (chunk) => {
    //           // Assuming chunk is a buffer or string, process accordingly
    //           const data = chunk.toString();
    //           const lines = data
    //             .split("\n")
    //             .filter((line) => line.trim() !== "");
    //           for (const line of lines) {
    //             if (line.startsWith("data: ")) {
    //               const message = line.substring(6);
    //               this.push(encoder.encode(`data: ${message}\n\n`));
    //             }
    //           }
    //         });

    //         response.addListener("end", () => {
    //           this.push(null);
    //         });
    //       })
    //       .catch((err) => {
    //         console.error("Error fetching OpenAI response:", err);
    //         this.push(
    //           encoder.encode(`event: error\ndata: ${JSON.stringify(err)}\n\n`),
    //         );
    //         this.push(null);
    //       });
    //   },
    // });

    // return new Response(readable, {
    //   headers: {
    //     "Content-Type": "text/event-stream",
    //     "Cache-Control": "no-cache",
    //     Connection: "keep-alive",
    //   },
    // });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
