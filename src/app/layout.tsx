import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Landing from "@/components/Landing";
import typography from "@/typography";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: typography.title.en,
  description: typography.description.en,
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/path/to/favicon.ico" type="image/x-icon"></link>
      <meta name="google-site-verification" content="9ak-QnJWQcgbLfQFRyKA8rey3UE5tIfkUXZspKNJx6Y" />
      <body className={`${inter.className} custom-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
