import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error("Missing OpenAI API key");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { chatContent, voice } = req.body;

    if (!chatContent) {
      return res.status(400).json({ error: "chatContent is required" });
    }

    const mp3Response = await openai.audio.speech.create({
      model: "tts-1",
      voice,
      input: chatContent,
    });

    const buffer = Buffer.from(await mp3Response.arrayBuffer());
    const audioUrl = `data:audio/mpeg;base64,${buffer.toString("base64")}`;

    res.status(200).json({ audioUrl });
  } catch (error) {
    console.error("Error generating audio:", error);
    res.status(500).json({ error: error });
  }
}
