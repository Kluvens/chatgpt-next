This is a clone of [ChatGPT](https://chatgpt.com/) from [OpenAI](https://openai.com/chatgpt/), built with [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- [Next.js](https://nextjs.org/) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- Support for [OpenAI](https://openai.com)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- [shadcn UI](https://ui.shadcn.com/) for UI components
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [Aceternity UI](https://ui.aceternity.com/) for cool animated UI components

## Model Providers

Currently OpenAI gpt-3.5-turbo is implemented. It is expected more models, such as gpt-4o and Gemini will be supported with your own api key.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The project has been deployed on Vercel and it is now available [here](https://chatgpt-next-justin.vercel.app/).

Now this project has integrated robust CI/CD, insightful web analytics and speed checks. With the main branch updated, the deployed version will be automated.

## TODO

1. Connect to the database (prisma)
2. Beatiful markdown file interpreter
3. allow streaming chat UI
4. rate limiting, session storage, and error handling

## Author

Jiapeng Yang (Justin)
