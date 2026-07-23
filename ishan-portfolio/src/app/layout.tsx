import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Ishan Chennupati — Full Stack Developer",
  description:
    "AI-Assisted Full Stack Developer from Hyderabad. Python, FastAPI, React, TypeScript, AWS. Open to opportunities.",
  keywords: [
    "Ishan Chennupati",
    "Full Stack Developer",
    "FastAPI",
    "React",
    "Python",
    "AI",
    "AWS",
    "Hyderabad",
  ],
  authors: [{ name: "Ishan Chennupati" }],
  openGraph: {
    title: "Ishan Chennupati — Full Stack Developer",
    description: "AI-Assisted Full Stack Developer from Hyderabad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm bg-bg text-[#f0f0f0]">{children}</body>
    </html>
  );
}
