import { NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const client = twilio(accountSid, authToken);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: "+923154195240",
    });

    return NextResponse.json({ success: true, message: "SMS sent to owner successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Twilio Error:", error);
    return NextResponse.json({ success: false, error: "Failed to send SMS to the owner." }, { status: 500 });
  }
}
