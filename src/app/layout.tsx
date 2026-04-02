import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VantaFlux AI | Fictional AI Agency Portfolio Demo",
  description:
    "A premium fictional AI automation agency landing page built as a portfolio-ready Next.js showcase using mock data.",
  applicationName: "VantaFlux AI Demo",
  keywords: [
    "Next.js landing page",
    "portfolio project",
    "fictional SaaS website",
    "AI agency showcase",
    "Tailwind CSS",
    "Framer Motion",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
