import type { Metadata } from "next";
import "./globals.css";

import { shanti } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Columbus",
  description: "AI-powered location and market research",
  icons: {
    icon: "/logobueno.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=SN+Pro:ital,wght@0,200..900;1,200..900&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${shanti.className} antialiased`}>
        {/* <MapBackground /> removed for home page redesign */}
        {children}
      </body>
    </html>
  );
}
