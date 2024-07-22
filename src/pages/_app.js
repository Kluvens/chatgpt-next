import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
import { ChatProvider } from "../contexts/ChatContext";
import { SettingsProvider } from "../contexts/SettingsContext";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <SettingsProvider>
        <ChatProvider>
          <Component {...pageProps} />
          <Analytics />
          <SpeedInsights />
        </ChatProvider>
      </SettingsProvider>
    </SessionProvider>
  );
}
