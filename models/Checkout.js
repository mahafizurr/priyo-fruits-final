import mongoose from "mongoose";

const CheckoutSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    mobileNumber: { type: Number, required: true },
    district: { type: String, required: true },
    fullAddress: { type: String, required: true },
    transactionNumber: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Checkout ||
  mongoose.model("Checkout", CheckoutSchema);
