import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuBar from "@/Components/MenuBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "zen-browse",
  description: "A clean, minimal, and elegant web browsing experience with Zen-like focus and productivity.",
  keywords: ["zen-browse", "minimal browser", "distraction-free", "web app", "clean UI", "focus mode"],
  authors: [{ name: "Your Name", url: "https://your-portfolio-or-github.com" }],
  creator: "Your Name",
  metadataBase: new URL("https://zen-browse.vercel.app"), // or your deployed URL
  openGraph: {
    title: "zen-browse",
    description: "Browse the web with Zen-like clarity and minimal distractions.",
    url: "https://zen-browse.vercel.app",
    siteName: "zen-browse",
    images: [
      {
        url: "https://zen-browse.vercel.app/og-image.png", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "zen-browse preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zen-browse",
    description: "A distraction-free web experience built for focus.",
    creator: "@yourTwitterHandle", // optional
    images: ["https://zen-browse.vercel.app/og-image.png"], // same as OpenGraph
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // if available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuBar/>
        {children}
      </body>
    </html>
  );
}
