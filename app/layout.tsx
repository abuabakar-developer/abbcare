
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import PWAInstallPrompt from "./components/PWAInstallPrompt"; // Import the prompt

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abacare App",
  description: "The best healthcare service platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <PWAInstallPrompt /> {/* Install prompt at the top */}
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

