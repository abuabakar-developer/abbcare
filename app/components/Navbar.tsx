'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Navbar = () => {   
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/login');
  };
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const section = document.getElementById('about-us');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-100 text-gray-800 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/medical.jpg"
              alt="Medical Logo"
              width={50}
              height={50}
              className="rounded-full shadow-lg w-12 h-12 sm:w-16 sm:h-16 transition-transform transform hover:scale-110"
            />
            <span className="ml-3 text-2xl font-bold text-blue-600 hover:scale-105 transition-transform">
              ABCare
            </span>
          </Link>       
           
          {/* Links for Larger Screens */}
          <div className="hidden lg:flex items-center space-x-6 font-semibold">
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-800 hover:text-blue-600 transition">
                <span className="mr-2">Home</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-blue-100 text-gray-800 shadow-md rounded-md py-2 w-56">
                  <Link
                    href="/medicines"
                    className="block px-4 py-2 hover:bg-blue-200 rounded-md"
                  >
                    Home Pharmacy
                  </Link>
                  <Link
                    href="/vaccination"
                    className="block px-4 py-2 hover:bg-blue-200 rounded-md"
                  >
                    Home Vaccination
                  </Link>
                  <Link
                    href="/lab"
                    className="block px-4 py-2 hover:bg-blue-200 rounded-md"
                  >
                    Home Lab
                  </Link>
                  <Link
                    href="/mothercare"
                    className="block px-4 py-2 hover:bg-blue-200 rounded-md"
                  >
                    Home Mother Care
                  </Link>
                  <Link
                    href="/rehabilitationServices"
                    className="block px-4 py-2 hover:bg-blue-200 rounded-md"
                  >
                    Home Physio
                  </Link>
                  <Link
                    href="/tele"
                    className="block px-4 py-2 hover:bg-blue-200 rounded-md"
                  >
                    Tele Clinics
                  </Link>
                </div>
              )}
            </div>
            <Link href="/#about-us" onClick={handleScroll} className="hover:text-blue-600 transition">
              About Us
            </Link>
            <Link href="/doctors" className="hover:text-blue-600 transition">
              Our Doctors
            </Link>
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-yellow-500 px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {menuOpen ? <IoMdClose size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-blue-600 text-white w-full shadow-lg absolute top-full left-0 z-50">
            <ul className="flex flex-col items-center space-y-6 py-6">
              <li>
                <Link
                  href="/medicines"
                  onClick={toggleMenu}
                  className="hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  Home Pharmacy
                </Link>
              </li>
              <li>
                <Link
                  href="/vaccination"
                  onClick={toggleMenu}
                  className="hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  Home Vaccination
                </Link>
              </li>
              <li>
                <Link
                  href="/lab"
                  onClick={toggleMenu}
                  className="hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  Home Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/mothercare"
                  onClick={toggleMenu}
                  className="hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  Home Mother Care
                </Link>
              </li>
              <li>
                <Link
                  href="/rehabilitationServices"
                  onClick={toggleMenu}
                  className="hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  Home Physio
                </Link>
              </li>
              <li>
                <Link
                  href="/tele"
                  onClick={toggleMenu}
                  className="hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  Tele Clinics
                </Link>
              </li>
              <Link
                  href="/doctors"
                  onClick={toggleMenu}
                  className="hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  Our Doctors
                </Link>
              <li>
                {!isLoggedIn ? (
                  <Link
                    href="/login"
                    onClick={toggleMenu}
                    className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* Fixed "Call Now" Button */}
      <button
        onClick={() => window.location.href = 'tel:+03154195240'}
        className="fixed bottom-4 right-4 bg-blue-600 text-white text-lg font-semibold p-4 rounded-full shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-transform hover:scale-105 lg:hidden z-[1000]"
        aria-label="Call Now"
      >
        <FaPhone size={24} />
      </button>
    </>
  );
};                 

export default Navbar;
