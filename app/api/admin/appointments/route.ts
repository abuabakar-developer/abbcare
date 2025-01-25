import dbConnect from "@/utils/dbConnect";
import Appointment from "@/models/Appointment";
import mongoose from "mongoose";

export async function GET(req: Request) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract status filter from query parameters
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    // Validate status filter
    if (!status || !["scheduled", "pending", "canceled"].includes(status)) {
      return new Response(JSON.stringify({ error: "Invalid or missing status filter" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch appointments based on the status filter
    const appointments = await Appointment.find({ status });

    return new Response(JSON.stringify(appointments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error fetching appointments:", error);
    return new Response(JSON.stringify({ error: "Internal server error while fetching appointments" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PATCH(req: Request) {
  try {
    // Parse request body
    const { status } = await req.json();
    
    // Extract appointment ID from query parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Validate ID and status
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: "Invalid or missing appointment ID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    if (!status || !["scheduled", "pending", "canceled"].includes(status)) {
      return new Response(JSON.stringify({ error: "Invalid or missing status value" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Connect to the database
    await dbConnect();

    // Update the appointment's status
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedAppointment) {
      return new Response(JSON.stringify({ error: "Appointment not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(updatedAppointment), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error updating appointment:", error);
    return new Response(JSON.stringify({ error: "Internal server error while updating appointment" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
