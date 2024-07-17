import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ChatProvider } from "../contexts/ChatContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ChatProvider>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </ChatProvider>
    </SessionProvider>
  );
}
