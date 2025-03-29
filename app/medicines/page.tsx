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
    setFormData((prev) => ({
      ...prev,
      medicines: option === "medicines" ? "" : prev.medicines,
      prescription: option === "prescription" ? null : prev.prescription,
    }));
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

    toast.info("Placing your order... ⏳", { autoClose: 2000 });

    // Simulate order processing
    setTimeout(() => {
      toast.success("Order placed successfully! 🎉", { autoClose: 1500 });
      setTimeout(() => router.push("/order-success"), 2000);
    }, 2000);

    // Reset form data
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
    <div className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-gray-950 text-gray-200">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-extrabold tracking-wide leading-tight mb-6 animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl sm:text-5xl">
          Abcare Medicine Delivery
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Get your medicines delivered swiftly and securely at your doorstep with ease.
        </p>
      </div>

      {/* Service Details */}
      <section className="mt-12 lg:flex lg:items-center lg:space-x-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-green-300 mb-6">Why Choose Abcare?</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            {[
              "✔ Fast and reliable delivery",
              "✔ Large variety of medicines",
              "✔ Easy, user-friendly process",
              "✔ Trusted by thousands",
            ].map((item, index) => (
              <li key={index}>{item}</li>
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
            className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
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
              className={`px-6 py-3 text-lg font-medium rounded-xl transition-all ${
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
          {["patientName", "address", "mobile", "city"].map((name) => (
            <input
              key={name}
              type="text"
              name={name}
              value={formData[name as keyof FormData] as string}
              onChange={handleInputChange}
              placeholder={name.replace(/([A-Z])/g, " $1")}
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
          className="w-full py-4 text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all shadow-lg"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default MedicinePage;
