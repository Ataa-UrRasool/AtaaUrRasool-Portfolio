import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio.config";

export const metadata: Metadata = {
  title: portfolio.name,
  description: `${portfolio.name} · ${portfolio.role}`,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
