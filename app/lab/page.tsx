'use client';
import Image from 'next/image';

export default function LabPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Hero Section */}
        <section className="relative text-center space-y-4">
          {/* Heading Above Image */}
          <h1 className="text-5xl font-extrabold text-gray-900">
            Welcome to Abcare Lab
          </h1>

          {/* Image with Overlay */}
          <div className="relative">
            <Image
              src="/lb.webp"
              alt="Abcare Lab"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
            {/* Overlay Heading */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-4xl font-semibold text-white">
                Trusted Diagnostics for Better Health
              </h2>
            </div>
          </div>

          {/* Heading Below Image */}
          <h3 className="text-3xl font-medium text-gray-800">
            Your Trusted Partner for Comprehensive Health Tests
          </h3>
        </section>

        {/* Content Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Choose Abcare Lab for Your Health Tests?
          </h2>
          <p className="text-lg text-gray-600">
            Abcare Lab provides accurate and timely test results, ensuring
            you get the best medical insights.
          </p>

          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li>Quick and Accurate Results</li>
            <li>Certified and Professional Medical Staff</li>
            <li>Affordable Test Packages for Individuals and Families</li>
            <li>Comprehensive Range of Tests to Choose From</li>
            <li>Online Results Access for Your Convenience</li>
          </ul>

          <p className="text-lg text-gray-600">
            Our lab is equipped with state-of-the-art technology, ensuring you
            receive the most accurate diagnostics available.
          </p>
        </section>

        {/* Quality and Accuracy Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Quality and Accuracy
          </h2>
          <p className="text-lg text-gray-600">
            We prioritize quality in every aspect of our testing process. Our
            team ensures the highest standards are met to provide you with the
            most accurate results.
          </p>
        </section>

        {/* Comprehensive Test Menu Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Comprehensive Test Menu
          </h2>
          <p className="text-lg text-gray-600">
            Explore our wide range of health tests designed to meet your needs,
            whether it’s routine checkups or specialized diagnostic tests.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li>Blood Tests</li>
            <li>Urine Tests</li>
            <li>Imaging and X-ray</li>
            <li>Genetic Testing</li>
            <li>Wellness Packages</li>
          </ul>
        </section>

        {/* Latest & Advanced Technology Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Latest & Advanced Technology
          </h2>
          <p className="text-lg text-gray-600">
            Our lab uses the latest diagnostic equipment and technologies,
            ensuring the most advanced tests with the highest reliability.
          </p>
        </section>

        {/* Timely and Reliable Reporting Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Timely and Reliable Reporting
          </h2>
          <p className="text-lg text-gray-600">
            We provide timely and reliable results, with easy access to your
            reports through our online portal. Get your results when you need
            them most.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-4">
          <button 
            onClick={() => alert("Redirecting to Lab Tests!")}
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
          >
            View Lab Tests
          </button>
          <p className="text-lg text-gray-600">For inquiries, call us now:</p>
          <a href="tel:+03154195240" className="text-blue-600 font-semibold text-xl">03154195240</a>
        </section>

        {/* Contact Form Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Contact Us
          </h2>                     
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
              <form className="space-y-6 mt-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Contact Details</h3>
              <p className="text-lg text-gray-600">You can also reach us via the following channels:</p>
              <div className="space-y-2">
                <p className="text-lg text-gray-600">Phone: <a href="tel:+03154195240" className="text-blue-600">03154195240</a></p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:info@abcarelab.com" className="text-blue-600">info@abcarelab.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

