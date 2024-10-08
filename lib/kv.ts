import { createClient } from "@vercel/kv";

const kv = createClient({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN,
});

export default kv;
