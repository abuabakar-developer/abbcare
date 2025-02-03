import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Appointment from "@/models/Appointment";
import mongoose from "mongoose";

// Handle GET request (Fetch all appointments)
export async function GET() {
  try {
    await dbConnect();
    const appointments = await Appointment.find({});
    
    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

// Handle POST request (Create a new appointment)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();

    if (!body.fullName || !body.cnic || !body.dateOfBirth || !body.age || !body.email || !body.contact || !body.service) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const newAppointment = await Appointment.create(body);

    return NextResponse.json({ success: true, data: newAppointment, id: newAppointment._id }, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

// Handle PATCH request (Update appointment status)
export async function PATCH(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const { status } = await req.json();

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: "Invalid or missing appointment ID" }, { status: 400 });
    }

    if (!status || !["scheduled", "pending", "canceled"].includes(status)) {
      return NextResponse.json({ success: false, error: "Invalid status value" }, { status: 400 });
    }

    await dbConnect();
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedAppointment) {
      return NextResponse.json({ success: false, error: "Appointment not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedAppointment }, { status: 200 });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}


