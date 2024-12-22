// pages/admin/products/index.js
import { useEffect, useState } from "react";
import AdminNav from "../../../components/AdminNav";
import axios from "axios";
import Link from "next/link";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <AdminNav />
      <h1>Manage Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} -{" "}
            <Link href={`/admin/products/edit/${product._id}`}>Edit</Link>
            <br />
            <button
              onClick={() => axios.delete(`/api/products/${product._id}`)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
