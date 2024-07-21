import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>ChatGPT written in Next.js</title>
        <meta name="description" content="A demo for ChatGPT in Next.js" />
      </Head>
      <header>
        {/* <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav> */}
        This is a header for ChatGPT-NEXT
      </header>
      <main>
        {children}
        <Analytics />
      </main>
      <footer>{/* <p>&copy; 2024 My Next.js App</p> */}</footer>
    </>
  );
};

export default Layout;
