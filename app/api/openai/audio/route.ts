import { NextResponse } from "next/server";
import OpenAI from "openai";

// Ensure the OpenAI API key is available
const openaiApiKey = process.env.OPENAI_API_KEY;
if (!openaiApiKey) {
  throw new Error("Missing OpenAI API key");
}

const openai = new OpenAI({ apiKey: openaiApiKey });

// Export the handler for the `POST` request
export async function POST(req: Request) {
  try {
    const { chatContent, voice } = await req.json();

    if (!chatContent) {
      return NextResponse.json(
        { error: "chatContent is required" },
        { status: 400 },
      );
    }

    // Call the OpenAI API to generate the audio
    const mp3Response = await openai.audio.speech.create({
      model: "tts-1",
      voice,
      input: chatContent,
    });

    // Convert the response to a Buffer and then to a Base64 string
    const buffer = Buffer.from(await mp3Response.arrayBuffer());
    const audioUrl = `data:audio/mpeg;base64,${buffer.toString("base64")}`;

    // Respond with the generated audio URL
    return NextResponse.json({ audioUrl });
  } catch (error) {
    console.error("Error generating audio:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

// Handle other HTTP methods if necessary
export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
