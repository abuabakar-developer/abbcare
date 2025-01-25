import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Subscriber from "@/models/Subscriber";

// Handle POST request for subscribing
export async function POST(req: Request) {
  await dbConnect();

  try {
    const { email } = await req.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
    }

    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      return NextResponse.json({ message: "You are already subscribed!" }, { status: 200 });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return NextResponse.json({ message: "Thank you for subscribing!" }, { status: 201 });
  } catch (error) {
    console.error("Error saving subscriber:", error);
    return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
  }
}

// Handle other HTTP methods (optional)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}




