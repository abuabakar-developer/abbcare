import mongoose, { Schema, Document, model } from "mongoose";

interface Appointment extends Document {
  fullName: string;
  cnic: string;
  dateOfBirth: string;
  age: number;
  email: string;
  contact: string;
  medicalRecord?: string;
  service: string;
  equationAnswer: string;
  status: "scheduled" | "pending" | "canceled"; // Added status field
  createdAt: Date;
}

const AppointmentSchema = new Schema<Appointment>({
  fullName: { type: String, required: true },
  cnic: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  medicalRecord: { type: String },
  service: { type: String, required: true },
  equationAnswer: { type: String, required: true },
  status: {
    type: String,
    enum: ["scheduled", "pending", "canceled"], // Restrict to allowed values
    default: "scheduled", // Default status when creating an appointment
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Appointment || model<Appointment>("Appointment", AppointmentSchema);




