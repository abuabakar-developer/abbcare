"use client";

import { useState, useEffect } from "react";
import { MdEvent } from "react-icons/md";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [mobileHomeDropdown, setMobileHomeDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Check if token exists
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleMobileHomeDropdown = () => setMobileHomeDropdown((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    setIsLoggedIn(false); // Update state
    router.push("/login"); // Redirect to login
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <MdEvent size={32} className="text-green-400" />
          <span className="ml-3 text-2xl font-bold text-green-300 hover:scale-105 transition">
            ABCare
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center px-8 py-2 bg-gray-900 rounded-full space-x-6 shadow-lg border border-gray-700">
          <div
            className="relative"
            onMouseEnter={() => setHomeDropdownOpen(true)}
            onMouseLeave={() => setHomeDropdownOpen(false)}
          >
            <button className="text-white font-semibold hover:text-green-400 transition px-4 py-2 rounded-md hover:bg-green-700">
              Home
            </button>
            <AnimatePresence>
              {homeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700 w-56"
                >
                  {["Pharmacy", "Vaccination", "Phisio", "Mothercare", "Lab"].map((service) => (
                    <Link
                      key={service}
                      href={`/${service.toLowerCase() === "phisio" ? "rehabilitationServices" 
                        : service.toLowerCase() === "pharmacy" ? "medicines" 
                        : service.toLowerCase()}`}
                      className="block px-4 py-3 text-white hover:bg-green-700 rounded-md"
                    >
                      Home {service} Service
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/doctors" className="text-white font-semibold hover:text-green-400 px-4 py-2 rounded-md hover:bg-green-700">
            Our Doctors
          </Link>
          <Link href="/aboutus" className="text-white font-semibold hover:text-green-400 px-4 py-2 rounded-md hover:bg-green-700">
            About Us
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link href="/book-appointment" className="bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition">
            Book Appointment
          </Link>

          {isLoggedIn && (
            <Link href="/dashboard" className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-500 transition">
              My Appointments
            </Link>
          )}

          {!isLoggedIn ? (
            <Link href="/login" className="bg-gray-900 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition">
              Login
            </Link>
          ) : (
            <button onClick={handleLogout} className="bg-gray-900 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition">
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-12 h-12 border border-gray-600 rounded-lg bg-gray-800"
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose size={28} className="text-white" /> : <FiMenu size={28} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 text-white p-6 border-t border-gray-700 rounded-b-lg"
          >
            <button
              onClick={toggleMobileHomeDropdown}
              className="flex justify-between items-center w-full px-4 py-3 text-white font-semibold hover:bg-green-700 rounded-md transition"
            >
              Home
              <span>{mobileHomeDropdown ? "▲" : "▼"}</span>
            </button>
            <AnimatePresence>
              {mobileHomeDropdown && (
                <motion.div className="ml-4 mt-2 space-y-2">
                  {[
                    { name: "Pharmacy", path: "/medicines" },
                    { name: "Vaccination", path: "/vaccination" },
                    { name: "Phisio", path: "/rehabilitationServices" },
                    { name: "Mothercare", path: "/mothercare" },
                    { name: "Lab", path: "/lab" },
                  ].map((service) => (
                    <Link
                      key={service.name}
                      href={service.path}
                      className="block px-4 py-2 hover:bg-green-700 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home {service.name} Service
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <Link href="/doctors" className="block px-4 py-3 hover:bg-green-700 rounded-md" onClick={() => setMenuOpen(false)}>
              Our Doctors
            </Link>
            <Link href="/aboutus" className="block px-4 py-3 hover:bg-green-700 rounded-md" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="w-full bg-green-600 text-white text-center py-3 rounded-md shadow-md hover:bg-green-500 transition" onClick={() => setMenuOpen(false)}>
                Book Appointment
              </Link>
              {!isLoggedIn ? (
                <Link href="/login" className="w-full bg-gray-900 text-white text-center py-3 rounded-md shadow-md hover:bg-green-500 transition" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              ) : (
                <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="w-full bg-gray-900 text-white py-3 rounded-md shadow-md hover:bg-green-500 transition">
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
