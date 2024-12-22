// pages/api/products/[id].js
import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } else if (req.method === "PUT") {
    const { name, description, price, imageUrl } = req.body;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, description, price, imageUrl },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: "Error updating product" });
    }
  } else if (req.method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ message: "Product deleted" });
    } catch (error) {
      res.status(400).json({ message: "Error deleting product" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
