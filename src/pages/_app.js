import { ThemeProvider } from "@/contexts/ThemeProvider";
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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SettingsProvider>
          <ChatProvider>
            <Component {...pageProps} />
            <Analytics />
            <SpeedInsights />
          </ChatProvider>
        </SettingsProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
