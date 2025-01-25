import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
  },
}, { timestamps: true });

export default mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);


