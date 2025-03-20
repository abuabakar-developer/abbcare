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
  FaPaperPlane,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <footer className="relative bg-gray-900 text-gray-300 py-12 px-6 lg:px-20">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute inset-0 bg-green-500 blur-[150px]"
        />
      </div>

      {/* Newsletter Subscription */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h3 className="text-lg sm:text-2xl font-semibold text-white">
          Stay Updated!
        </h3>
        <p className="text-sm text-gray-400 mb-5">
          Subscribe for the latest updates & exclusive health tips.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="relative w-full flex-1">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-1/3 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm px-6 py-3 rounded-lg transition-all"
          >
            Subscribe <FaPaperPlane />
          </button>
        </form>
        {message && (
          <p
            className={`mt-3 text-sm ${
              message.startsWith("Thank") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      {/* Footer Sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About ABCare */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide mb-3">
            ABCare
          </h2>
          <p className="text-sm text-gray-400">
            Providing high-standard healthcare services, including Lab, Physio,
            Nursing, and Pharmacy delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              {
                label: "Pharmacy",
                icon: FaPills,
                link: "/medicines",
                color: "text-red-400",
              },
              {
                label: "Lab Services",
                icon: FaHeartbeat,
                link: "/lab",
                color: "text-blue-400",
              },
              {
                label: "Vaccination",
                icon: FaSyringe,
                link: "/vaccination",
                color: "text-yellow-400",
              },
              {
                label: "Mother Care",
                icon: FaHandHoldingHeart,
                link: "/mothercare",
                color: "text-pink-400",
              },
              {
                label: "Physio",
                icon: FaPhoneAlt,
                link: "/rehabilitationServices",
                color: "text-green-400",
              },
              {
                label: "Tele Clinic",
                icon: FaPhoneAlt,
                link: "/tele",
                color: "text-purple-400",
              },
            ].map(({ label, icon: Icon, link, color }) => (
              <li key={label} className="flex items-center gap-3 group">
                <Icon
                  className={`${color} text-lg transition-colors group-hover:text-white`}
                />
                <Link
                  href={link}
                  className="text-sm text-gray-300 hover:text-green-400 transition-all"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm text-gray-400">
            📍 123 Healthcare Street, Jaranwala, Pakistan
          </p>
          <p className="text-sm text-gray-400">📧 info@abcare.com</p>
          <p className="text-sm text-gray-400">📞 +123 456 7890</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-5">
            {[
              { icon: FaFacebookF, link: "#", color: "text-blue-600" },
              { icon: FaGithub, link: "#", color: "text-gray-700" },
              { icon: FaLinkedinIn, link: "#", color: "text-blue-500" },
            ].map(({ icon: Icon, link, color }) => (
              <a
                key={link}
                href={link}
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-300 hover:bg-green-500 hover:text-white transition-all shadow-md"
              >
                <Icon className={`${color} text-lg`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-700 opacity-50"></div>

      {/* Copyright */}
      <div className="mt-5 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} ABCare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
