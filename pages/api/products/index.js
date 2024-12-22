// pages/api/products/index.js
import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const products = await Product.find({});
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const { name, description, price, imageUrl } = req.body;

    try {
      const newProduct = new Product({
        name,
        description,
        price,
        imageUrl,
      });

      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: "Error creating product" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
