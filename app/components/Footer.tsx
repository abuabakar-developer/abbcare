"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPaperPlane,
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
      if (response.status === 201) setEmail("");
    } catch (error) {
      console.error("Subscription Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-900 text-gray-300 px-6 lg:px-20 font-sans">
      {/* Subscription Section */}
      <div className="max-w-7xl mx-auto border-b border-gray-700 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">Stay Updated!</h3>
            <p className="text-base text-gray-400">
              Subscribe for the latest updates & exclusive health tips.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex items-center gap-3 w-full sm:w-auto"
          >
            <div className="relative w-full max-w-md">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white focus:ring-4 focus:ring-green-500 placeholder-gray-400 text-base"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-base bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center gap-2 transition-all focus:ring-4 focus:ring-green-400"
            >
              Subscribe <FaPaperPlane />
            </button>
          </form>
        </div>

        {message && (
          <p
            className={`mt-3 text-sm text-center ${
              message.startsWith("Thank") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      {/* Footer Section */}
      <footer className="relative py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About ABCare */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide mb-4">
              ABCare
            </h2>
            <p className="text-base text-gray-400">
              Providing high-standard healthcare services, including Lab,
              Physio, Nursing, and Pharmacy delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Pharmacy", link: "/medicines" },
                { label: "Lab Services", link: "/lab" },
                { label: "Vaccination", link: "/vaccination" },
                { label: "Mother Care", link: "/mothercare" },
                { label: "Physio", link: "/rehabilitationServices" },
                { label: "Tele Clinic", link: "/tele" },
              ].map(({ label, link }) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="text-base text-gray-300 hover:text-green-400 transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-base text-gray-400">
              📍 123 Healthcare Street, Jaranwala, Pakistan
            </p>
            <p className="text-base text-gray-400">📧 info@abcare.com</p>
            <p className="text-base text-gray-400">📞 +123 456 7890</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-5">
              {[
                { icon: FaFacebookF, link: "#" },
                { icon: FaGithub, link: "#" },
                { icon: FaLinkedinIn, link: "#" },
              ].map(({ icon: Icon, link }) => (
                <a
                  key={link}
                  href={link}
                  className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full text-gray-300 hover:bg-green-500 hover:text-white transition-all shadow-md"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700 opacity-50"></div>

        {/* Copyright */}
        <div className="mt-5 text-center text-base text-gray-500">
          <p>© {new Date().getFullYear()} ABCare. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
