import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Landing from "@/components/Landing";
import typography from "@/typography";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: typography.title.fr,
  description: typography.title.fr,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
