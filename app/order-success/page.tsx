"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const OrderSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white px-6 sm:px-12 lg:px-20">
      <div className="text-center max-w-xl mx-auto">
        {/* Image with responsive sizes and animation */}
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto animate-bounce">
          <Image
            src="/pharm.webp"
            alt="Order Successful"
            width={200}
            height={200}
            className="absolute inset-0 object-cover rounded-full shadow-xl"
          />
        </div>

        {/* Main title with responsive font size */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-6 sm:mt-8 text-green-400">
          Order Placed Successfully! 🎉
        </h1>

        {/* Subtext with increased padding and responsive font size */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Your medicines are on the way! Expect a fast, reliable delivery to your doorstep. Stay healthy! 💊
        </p>

        {/* Back to Home button with responsive styling */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Floating thank you message for added UX, responsive size */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center animate-pulse text-gray-400">
        <p className="text-sm sm:text-base md:text-lg">Thank you for choosing Abcare!</p>
      </div>
    </div>
  );
};

export default OrderSuccess;
