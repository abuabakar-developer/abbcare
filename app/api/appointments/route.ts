import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Appointment from "@/models/Appointment";

// ✅ Fetch all appointments
export async function GET() {
  try {
    await dbConnect();
    const appointments = await Appointment.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

// ✅ Create a new appointment
export async function POST(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();

    // Required fields check
    const requiredFields = ["fullName", "cnic", "dateOfBirth", "age", "email", "contact", "service", "equationAnswer"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ success: false, error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Create appointment
    const newAppointment = await Appointment.create(body);
    return NextResponse.json({ success: true, data: newAppointment, appointmentId: newAppointment._id }, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
