import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audora - AI-Powered 3D Icon Designer",
  description: "Create stunning 3D icons from text using AI. Professional-grade results in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        inter.variable,
        spaceGrotesk.variable
      )}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F9F9F9] text-[#1A1C1C]">
        {children}
      </body>
    </html>
  );
}
