"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleBooking = () => {
    if (isAuthenticated) {
      router.push("/book-appointment");
    } else {
      router.push("/login");
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* UAN Number */}
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-lg font-bold tracking-wide">
            UAN: <span className="text-yellow-300">041-111-123-456</span>
          </span>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex items-center w-full md:w-auto">
          <button
            onClick={handleBooking}
            className="relative w-full max-w-xs md:max-w-none md:w-auto text-center bg-yellow-300 text-blue-900 px-6 py-3 
              rounded-full font-semibold shadow-md hover:bg-yellow-400 hover:shadow-lg 
              transition-all duration-300 ease-in-out 
              before:absolute before:-z-10 before:left-0 before:top-0 before:w-full before:h-full 
              before:bg-yellow-300 before:scale-105 before:rounded-full before:opacity-20 
              before:transition-transform before:duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
