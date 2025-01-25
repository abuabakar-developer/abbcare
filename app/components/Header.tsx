import React from "react";
import Link from "next/link";

const Header = () => {
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
        <div className="flex items-center space-x-4">
          <Link href="/book-appointment" legacyBehavior>
            <a className="relative bg-yellow-300 text-blue-900 px-5 py-2 rounded-full font-semibold shadow-md 
              hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 ease-in-out 
              before:absolute before:-z-10 before:left-0 before:top-0 before:w-full before:h-full before:bg-yellow-300 
              before:scale-105 before:rounded-full before:opacity-20 before:transition-transform before:duration-300">
              Book Appointment
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

