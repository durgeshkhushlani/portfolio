import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ScrollSpyDots from "@/components/ScrollSpyDots";
import Starfield from "@/components/Starfield";
import { themeInitScript } from "@/components/ThemeToggle";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durgesh Khushlani — AI Engineer & Backend Developer",
  description:
    "Portfolio of Durgesh Khushlani, an AI Engineer and Backend Developer building production RAG and multi-agent systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Starfield />
        <div className="relative z-10 flex min-h-full flex-col">
          <NavBar />
          <ScrollSpyDots />
          {children}
        </div>
      </body>
    </html>
  );
}
