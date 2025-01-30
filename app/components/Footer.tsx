'use client';

import React, { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPills,
  FaHeartbeat,
  FaSyringe,
  FaHandHoldingHeart,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link"; // Import Link component from Next.js

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.status === 201) {
        setEmail("");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Subscription error:", error.message);
        setMessage("An error occurred. Please try again later.");
      } else {
        console.error("Unexpected error:", error);
        setMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <footer className="relative py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 leading-tight opacity-70">
            ABCare
          </h2>
          <p className="text-gray-300 text-md leading-relaxed">
            At{" "}
            <span className="text-lg text-white font-extrabold">ABCare</span>,
            we are committed to providing you with high-standard healthcare
            services at the convenience of your home, with services like Lab,
            Physio, Nursing, and Pharmacy delivery. Trusted for online
            appointments, we connect you to certified medical professionals
            with ease and reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 opacity-70">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { label: "Home Pharmacy Services", icon: FaPills, link: "/medicines" },
              { label: "Home Lab Services", icon: FaHeartbeat, link: "/lab" },
              { label: "Home Vaccination Services", icon: FaSyringe, link: "/vaccination" },
              { label: "Home Mother Care", icon: FaHandHoldingHeart, link: "/mothercare" },
              { label: "Home Physio", icon: FaPhoneAlt, link: "/rehabilitationServices" },
              { label: "Home Tele Clinic", icon: FaPhoneAlt, link: "/tele" },
            ].map(({ label, icon: Icon, link }) => (
              <li key={label} className="flex items-center group">
                <Icon className="mr-2 text-blue-400 text-lg" />
                <Link
                  href={link}
                  className="relative text-base pb-1 block border-b border-white hover:text-blue-400 transition-colors"
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 opacity-70">Subscribe</h3>
          <p className="text-gray-300 text-md leading-relaxed mb-4">
            Get the latest updates and tips delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
          {message && (
            <p
              className={`mt-3 text-sm ${
                message.startsWith("Thank")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </div>

{/* Social Media Section */}
<div>
  <h3 className="text-xl font-semibold mb-4 opacity-70">Follow Us</h3>
  <p className="text-gray-300 text-md leading-relaxed mb-4">
    Stay connected through our social platforms.
  </p>
  <div className="flex space-x-3">
    {[
      { icon: FaFacebookF, label: "Facebook" },
      { icon: FaGithub, label: "github" },
      { icon: FaLinkedinIn, label: "LinkedIn" },
    ].map(({ icon: Icon, label }) => (
      <a
        key={label}
        href="#"
        className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-md text-white transition duration-300 hover:bg-blue-500 hover:text-white"
        aria-label={label}
      >
        <Icon className="text-xl" />
      </a>
    ))}
  </div>
</div>


      </div>

      {/* Copyright Section */}
      <div className="bg-blue-700 py-4 text-center text-sm text-gray-300 mt-16">
        &copy; {new Date().getFullYear()} ABCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;





