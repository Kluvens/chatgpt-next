import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Analytics />
    </SessionProvider>
  );
}
