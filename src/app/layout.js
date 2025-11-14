import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Error & Rendering Demos — Charley",
  description:
    "Client vs Server Components + error boundaries, customized by Charley.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Header / Nav */}
        <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-black/60">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/next.svg"
                alt="Next.js"
                width={28}
                height={28}
                className="dark:invert"
                priority
              />
              <span className="text-sm font-semibold tracking-tight">
                Charley’s Next Demo
              </span>
            </Link>

            <nav className="flex items-center gap-3 text-sm">
              <Link className="nav-link" href="/client-vs-server">
                Client vs Server
              </Link>
              <Link className="nav-link" href="/client-error">
                Client Error
              </Link>
              <Link className="nav-link" href="/server-error">
                Server Error
              </Link>
              <a
                className="btn-primary"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto min-h-[calc(100dvh-120px)] w-full max-w-5xl px-5">
          {children}
        </main>

        <footer className="border-t border-zinc-200/70 py-6 text-center text-sm text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-400">
          <p>
            Built with Next.js App Router • Styled by{" "}
            <span className="font-semibold">you</span> 💪
          </p>
        </footer>
      </body>
    </html>
  );
}
