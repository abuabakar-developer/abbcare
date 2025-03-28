
"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react"; // Modern close icon

export default function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("pwaPromptDismissed");
    if (!isDismissed) {
      setTimeout(() => setShowPrompt(true), 1000); // Show after 1s
    }
  }, []);

  const handleClose = () => {
    setShowPrompt(false);
    localStorage.setItem("pwaPromptDismissed", "true"); // Remember dismissal
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg z-50 animate-fadeIn">
      <span className="text-sm">
        📲 Install <b>Abacare App</b> for a better experience!
      </span>
      <button onClick={handleClose} className="text-white hover:text-gray-400">
        <X size={20} />
      </button>
    </div>
  );
}

