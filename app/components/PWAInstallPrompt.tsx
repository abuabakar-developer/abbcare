

"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react"; // Modern close icon

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const storedDismissed = localStorage.getItem("pwa-dismissed");
    if (storedDismissed === "true") return;

    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-dismissed", "true");
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-10 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex items-center justify-between gap-4 animate-fade-in">
      <div>
        <p className="text-lg font-semibold">Install Abacare App</p>
        <p className="text-sm text-gray-300">Get the best healthcare services anytime.</p>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={handleInstall} 
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium"
        >
          Install
        </button>
        <button onClick={handleClose} className="text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;

