"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { ChatProvider } from "../contexts/ChatContext";
import { SettingsProvider } from "../contexts/SettingsContext";
import { ThemeProvider } from "../contexts/ThemeProvider";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
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
