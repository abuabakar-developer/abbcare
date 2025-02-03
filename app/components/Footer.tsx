"use client";

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
import Link from "next/link";

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
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 opacity-80">ABCare</h2>
          <p className="text-gray-300 text-md">
            At <span className="font-extrabold text-white">ABCare</span>, we provide high-standard healthcare services
            at your convenience, including Lab, Physio, Nursing, and Pharmacy
            delivery. Book online appointments and connect with certified
            medical professionals effortlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 opacity-80">Quick Links</h3>
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
                  className="relative text-base block border-b border-transparent hover:border-blue-400 hover:text-blue-400 transition duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 opacity-80">Subscribe</h3>
          <p className="text-gray-300 mb-4">Get the latest updates and health tips.</p>
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
            <p className={`mt-3 text-sm ${message.startsWith("Thank") ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 opacity-80">Follow Us</h3>
          <p className="text-gray-300 mb-4">Stay connected with us on social media.</p>
          <div className="flex space-x-3">
            {[
              { icon: FaFacebookF, label: "Facebook", link: "#" },
              { icon: FaGithub, label: "Github", link: "#" },
              { icon: FaLinkedinIn, label: "LinkedIn", link: "#" },
            ].map(({ icon: Icon, label, link }) => (
              <a
                key={label}
                href={link}
                className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-md text-white transition hover:bg-blue-500 hover:text-white"
                aria-label={label}
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-700 text-center text-sm text-gray-300 py-4 mt-16">
        &copy; {new Date().getFullYear()} ABCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;




