"use client";

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  medicines: string;
  prescription: File | null;
  address: string;
  mobile: string;
  patientName: string;
  city: string;
}

const MedicinePage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    medicines: "",
    prescription: null,
    address: "",
    mobile: "",
    patientName: "",
    city: "",
  });

  const [selectedOption, setSelectedOption] = useState<"medicines" | "prescription" | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, prescription: file });
  };

  const handleOptionSelect = (option: "medicines" | "prescription") => {
    setSelectedOption(option);
    setFormData({ ...formData, medicines: "", prescription: null });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedOption === "medicines" && !formData.medicines.trim()) {
      toast.error("Please enter medicines or upload a prescription.");
      return;
    }
    if (selectedOption === "prescription" && !formData.prescription) {
      toast.error("Please upload a prescription or enter medicines.");
      return;
    }

    const message = `New Order:\nMedicines: ${
      formData.medicines || "Attached prescription"
    }\nPatient: ${formData.patientName}\nAddress: ${formData.address}\nMobile: ${
      formData.mobile
    }\nCity: ${formData.city}`;

    try {
      const res = await fetch("/api/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        toast.success("Order placed successfully!");
        setTimeout(() => router.push("/orderconfirm"), 2000);
      } else {
        toast.error("Failed to place the order.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred.");
    }

    setFormData({
      medicines: "",
      prescription: null,
      address: "",
      mobile: "",
      patientName: "",
      city: "",
    });
    setSelectedOption(null);
  };

  return (
    <div className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      {/* Header */}
      <div className="text-center">
        <h1
          className="font-extrabold tracking-wide leading-tight mb-6 animate-fade-in"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: "1.2",
            textShadow: "2px 2px 10px rgba(0, 255, 255, 0.3)",
            backgroundImage: "linear-gradient(90deg, #34d399, #3b82f6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Abcare Medicine Delivery
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed tracking-wide max-w-3xl mx-auto">
          Get your medicines delivered swiftly and securely at your doorstep with ease.
        </p>
      </div>

      {/* Service Details */}
      <section className="mt-12 lg:flex lg:items-center lg:space-x-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-green-300 mb-6 tracking-wide">Why Choose Abcare?</h2>
          <ul className="space-y-5">
            {[
              "✔ Fast and reliable delivery",
              "✔ Large variety of medicines",
              "✔ Easy, user-friendly process",
              "✔ Trusted by thousands",
            ].map((item, index) => (
              <li key={index} className="text-lg text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <Image
            src="/pharm.webp"
            alt="Medicine Delivery"
            width={700}
            height={400}
            className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 hover:shadow-green-500"
          />
        </div>
      </section>

      {/* Medicine Order Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-16 w-full max-w-2xl mx-auto bg-gray-800 p-10 rounded-2xl shadow-2xl space-y-8"
      >
        {/* Selection Buttons */}
        <div className="flex justify-center space-x-6">
          {["medicines", "prescription"].map((option) => (
            <button
              key={option}
              type="button"
              className={`px-6 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                selectedOption === option
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-700 hover:bg-green-500 hover:text-white"
              }`}
              onClick={() => handleOptionSelect(option as "medicines" | "prescription")}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 gap-6">
          {[
            { name: "patientName", placeholder: "Patient Name" },
            { name: "address", placeholder: "Address" },
            { name: "mobile", placeholder: "Mobile Number" },
            { name: "city", placeholder: "City" },
          ].map(({ name, placeholder }) => (
            <input
              key={name}
              type="text"
              name={name}
              value={formData[name as keyof FormData] as string}
              onChange={handleInputChange}
              placeholder={placeholder}
              required
              className="w-full px-5 py-4 text-lg bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500"
            />
          ))}

          {selectedOption === "medicines" && (
            <input
              type="text"
              name="medicines"
              value={formData.medicines}
              onChange={handleInputChange}
              placeholder="Enter Medicines"
              required
              className="w-full px-5 py-4 text-lg bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500"
            />
          )}

          {selectedOption === "prescription" && (
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-5 py-4 text-lg bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500"
              required
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default MedicinePage;
