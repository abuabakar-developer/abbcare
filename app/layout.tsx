

"use client"; // Keep this because useState and useEffect are used
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import { useEffect, useState } from "react";
import { CalendarCheck } from "lucide-react"; // Importing Book Appointment Icon

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000); // Show install prompt after 3 seconds
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User installed the app");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
        setShowPrompt(false);
      });
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#34d399" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <HeroSection />
        <ServicesSection />

        {/* Install Prompt Button */}
        {showPrompt && (
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-3 rounded-lg flex items-center gap-3">
            <CalendarCheck className="text-green-700 w-10 h-10" /> {/* Book Appointment Icon */}
            <p className="text-green-700 font-bold">Install Abacare App</p>
            <button
              onClick={installApp}
              className="bg-green-700 text-white px-3 py-2 rounded-lg"
            >
              Install
            </button>
          </div>
        )}

        {/* Main content from page.tsx */}
        <main className="flex-grow">{children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}



