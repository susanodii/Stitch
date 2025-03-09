import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import { Playfair_Display, Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";

export const metadata: Metadata = {
  title: "Stitch App",
  description:
    "Stitch App is an online market place for fashion designers, to list their products and get hired",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
