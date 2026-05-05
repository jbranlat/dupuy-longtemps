import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/sections/Navbar";
import FloatingContact from "./components/sections/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSG CLIM 13",
  description: "DSG CLIM 13",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DSG CLIM 13",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950">

        <Navbar />
        <div className="md:h-16" />
        <FloatingContact />
        <main className="flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}