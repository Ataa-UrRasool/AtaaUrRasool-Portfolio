import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Ataa Ur Rasool - Software Engineer Portfolio",
  description: "Backend Developer specializing in Node.js, Express.js, and cloud technologies. Explore my projects, experience, and certifications.",
  keywords: ["Software Engineer", "Backend Developer", "Node.js", "Full Stack", "Portfolio", "Ataa Ur Rasool"],
  authors: [{ name: "Muhammad Ataa Ur Rasool" }],
  openGraph: {
    title: "Muhammad Ataa Ur Rasool - Software Engineer",
    description: "Backend Developer specializing in Node.js, Express.js, and cloud technologies",
    type: "website",
    locale: "en_US",
    siteName: "Ataa Ur Rasool Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ataa Ur Rasool - Software Engineer",
    description: "Backend Developer specializing in Node.js, Express.js, and cloud technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
