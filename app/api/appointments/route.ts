import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Appointment from "@/models/Appointment";
import mongoose from "mongoose";

// Handle GET request (Fetch all appointments)
export async function GET() {
  try {
    await dbConnect();
    const appointments = await Appointment.find({});
    
    return NextResponse.json(appointments, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Handle POST request (Create a new appointment)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();

    const newAppointment = await Appointment.create(body);
    
    return NextResponse.json(newAppointment, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Handle PATCH request (Update appointment status)
export async function PATCH(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const { status } = await req.json();

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid or missing appointment ID" }, { status: 400 });
    }

    if (!status || !["scheduled", "pending", "canceled"].includes(status)) {
      return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
    }

    await dbConnect();
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedAppointment) {
      return NextResponse.json({ error: "Appointment not found" }, { status: 404 });
    }

    return NextResponse.json(updatedAppointment, { status: 200 });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}



