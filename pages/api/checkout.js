import dbConnect from "../../utils/dbConnect";
import Checkout from "../../models/Checkout";

export default async function handler(req, res) {
  try {
    await dbConnect();

    if (req.method === "GET") {
      try {
        const checkouts = await Checkout.find({});
        res.status(200).json(checkouts);
      } catch (error) {
        console.error("Error fetching checkouts:", error);
        res.status(500).json({ message: "Error fetching checkouts" });
      }
    } else if (req.method === "POST") {
      const {
        fullName,
        mobileNumber,
        district,
        fullAddress,
        transactionNumber,
        cartItems, // Add cartItems to the destructured object
      } = req.body;

      try {
        const newCheckout = new Checkout({
          fullName,
          mobileNumber,
          district,
          fullAddress,
          transactionNumber,
          cartItems, // Save cartItems in the new checkout document
        });

        await newCheckout.save();
        res.status(201).json({ message: "Order submitted successfully" });
      } catch (error) {
        console.error("Error submitting order:", error);
        res.status(500).json({ message: "Error submitting order" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Database connection error" });
  }
}
