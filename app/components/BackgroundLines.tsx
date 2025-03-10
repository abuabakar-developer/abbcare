"use client";

import { motion } from "framer-motion";

const BackgroundLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Glowing Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-black opacity-60" />

      {/* Animated SVG Background */}
      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Enhanced Glowing Gradient Circle */}
        <motion.circle
          cx="400"
          cy="400"
          r="380"
          fill="url(#lineGradient)"
          className="blur-[180px] opacity-50"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Modern Animated Flowing Lines */}
        {[
          ["M50 400 C200 150, 600 650, 750 400", "M60 420 C220 180, 580 620, 740 380"],
          ["M80 300 C280 80, 520 720, 710 310", "M90 330 C260 100, 540 690, 690 290"],
          ["M140 520 C360 230, 480 590, 690 520", "M130 550 C350 260, 500 570, 710 500"],
        ].map(([startPath, endPath], index) => (
          <motion.path
            key={index}
            d={startPath}
            stroke="url(#lineGradient)"
            strokeWidth="3.5"
            opacity={0.8 - index * 0.2}
            animate={{
              d: [startPath, endPath, startPath],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 16 + index * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.svg>

      {/* Enhanced Floating Particle Lights */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[10px] h-[10px] bg-teal-300 rounded-full blur-[8px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0%", "30%", "-30%", "0%"],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundLines;

