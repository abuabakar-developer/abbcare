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
    <div className="flex flex-col items-center min-h-screen px-6 py-10 bg-gradient-to-b from-green-100 to-green-50">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-wide text-green-800">Abcare Medicine</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Quick, reliable, and hassle-free online medicine delivery at your doorstep.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row items-center mt-10 gap-16">
        <Image
          src="/pharm.webp"
          alt="Pharmacy"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
        />

        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-3xl font-bold text-green-700">Why Choose Abcare?</h2>
          <ul className="space-y-4 text-gray-800">
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span> Reliable and quick delivery services
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span> Wide range of medicines available
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span> Easy and user-friendly process
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span> Trusted by thousands of happy customers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span> Professional handling of prescriptions
            </li>
          </ul>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-14 w-full max-w-xl bg-white p-10 rounded-2xl shadow-xl space-y-8"
      >
        <div className="flex justify-around mb-4">
          <button
            type="button"
            className={`px-6 py-3 rounded-lg ${
              selectedOption === "medicines" ? "bg-green-700 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleOptionSelect("medicines")}
          >
            Medicines
          </button>
          <button
            type="button"
            className={`px-6 py-3 rounded-lg ${
              selectedOption === "prescription" ? "bg-green-700 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleOptionSelect("prescription")}
          >
            Prescription
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {["patientName", "address", "mobile", "city"].map((name) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block text-lg font-medium text-gray-700 capitalize"
              >
                {name.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                id={name}
                type="text"
                name={name}
                value={formData[name as keyof FormData] as string}
                onChange={handleInputChange}
                placeholder={`Enter ${name.replace(/([A-Z])/g, " $1").toLowerCase()}`}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
          ))}
          {selectedOption === "prescription" && (
            <div>
              <label
                htmlFor="prescription"
                className="block text-lg font-medium text-gray-700"
              >
                Upload Prescription
              </label>
              <input
                type="file"
                id="prescription"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
          )}
          {selectedOption === "medicines" && (
            <div>
              <label
                htmlFor="medicines"
                className="block text-lg font-medium text-gray-700"
              >
                Enter Medicines
              </label>
              <input
                id="medicines"
                type="text"
                name="medicines"
                value={formData.medicines}
                onChange={handleInputChange}
                placeholder="Enter medicines"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 text-lg font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800 focus:outline-none focus:ring focus:ring-green-400"
        >
          Place Order
        </button>
      </form>

      <div className="mt-8">
        <a
          href="tel:03154195240"
          className="py-3 px-8 text-lg font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Call Now
        </a>
      </div>
    </div>
  );
};

export default MedicinePage;

