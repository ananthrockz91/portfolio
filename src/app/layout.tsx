import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { StarsBackground } from "@/components/StarsBackground";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ananth Kumar | Flutter Architect",
  description: "Portfolio of Ananth Kumar - Architect, Flutter, Firebase, FlutterFlow Expert.",
  icons: {
    icon: [
      { url: "/ak.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/ak.png", type: "image/png" },
    ],
    shortcut: "/ak.svg",
    apple: "/ak.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          outfit.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary"
        )}
      >
        <StarsBackground />
        {children}
      </body>
    </html>
  );
}
