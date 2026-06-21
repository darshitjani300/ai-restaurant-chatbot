import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/src/layout/Header";
import Footer from "@/src/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bella Vista Ristorante — AI-Powered Italian Dining",
  description:
    "Experience Austin's finest Italian cuisine at Bella Vista. Handmade pasta, wood-fired pizza, curated wines — plus our AI concierge to help you explore the menu and book a table.",
  keywords: [
    "Italian restaurant",
    "Austin",
    "fine dining",
    "AI chatbot",
    "reservations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Header />
        <main className="min-h-screen bg-brand-bg flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
