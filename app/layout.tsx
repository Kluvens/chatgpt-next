"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
import { ChatProvider } from "../contexts/ChatContext";
import { SettingsProvider } from "../contexts/SettingsContext";
import { ThemeProvider } from "../contexts/ThemeProvider";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <SettingsProvider>
              <ChatProvider>
                {children}
                <Analytics />
                <SpeedInsights />
              </ChatProvider>
            </SettingsProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
