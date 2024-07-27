import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <title>ChatGPT-Next: Clone ChatGPT with Next.js</title>
      <meta
        name="description"
        content="Build your own ChatGPT clone using Next.js, TypeScript, and Tailwind CSS. Explore features, tutorials, and code examples to create a sophisticated AI-powered chatbot."
      />
      <meta
        name="keywords"
        content="ChatGPT, Next.js, TypeScript, AI chatbot, OpenAI, Tailwind CSS, React, Clone, Tutorial"
      />
      <meta name="author" content="Jiapeng Yang" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://chatgpt-next-justin.vercel.app/" />

      {/* Charset */}
      <meta charSet="UTF-8" />
    </Head>
  );
}
