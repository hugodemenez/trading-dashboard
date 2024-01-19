import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Trading dashboard",
  description: "Simple trading dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-dvh bg-background font-sans antialiased dark:dark h-dvh grid grid-rows-[auto,1fr]",
        fontSans.variable
      )}
      >
        <Navbar/>
        {children}
      </body>
    </html >
  );
}
