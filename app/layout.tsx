import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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

import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "@/app/providers/PostHogProvider";
import { PostHogPageView } from "@/app/providers/PostHogPageView";

export const metadata: Metadata = {
  title: {
    // Default ini bakal dipakai kalau halamannya nggak punya title sendiri (misal Homepage)
    default: "Audora - 3D Isometric Icon Generator",
    // Template ini bakal dipakai buat halaman lain. %s itu variabel buat nama halamannya.
    template: "%s | Audora - 3D Isometric Icon Generator",
  },
  description: "Generate high-quality 3D isometric icons in seconds for your landing pages, apps, and Figma projects. Best AI-powered 3D isometric icon generator for designers and developers.",
  openGraph: {
    type: "website",
    url: "https://useaudora.com",
    title: "Audora - 3D Isometric Icon Generator",
    description: "Generate high-quality 3D isometric icons in seconds for your landing pages, apps, and Figma projects.",
    siteName: "Audora",
    // Kalau lu udah upload banner buat sosmed ke R2 lu, masukin linknya di bawah ini
    images: [
      {
        url: "https://cdn.useaudora.com/assets/og-homepage.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Audora - 3D Isometric Icon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audora - 3D Isometric Icon Generator",
    description: "Generate high-quality 3D isometric icons in seconds for your landing pages, apps, and Figma projects.",
    images: ["https://cdn.useaudora.com/assets/og-homepage.jpg?v=2"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        inter.variable,
        spaceGrotesk.variable
      )}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans"
      >
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PostHogPageView />
            {children}
          </ThemeProvider>
        </PostHogProvider>
        <GoogleAnalytics gaId="G-Z7QDG1PZ5S" />
      </body>
    </html>
  );
}
