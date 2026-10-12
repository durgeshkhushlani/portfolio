import type { Metadata } from "next";
import { Doto, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ScrollSpyDots from "@/components/ScrollSpyDots";

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  axes: ["ROND"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${doto.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <ScrollSpyDots />
        {children}
      </body>
    </html>
  );
}
