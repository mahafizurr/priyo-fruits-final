import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const AdminNav = dynamic(() => import("../../../../components/AdminNav"), {
  ssr: false,
});
const ProductForm = dynamic(
  () => import("../../../../components/ProductForm"),
  { ssr: false }
);

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && id) {
      axios.get(`/api/products/${id}`).then((res) => setProduct(res.data));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <AdminNav />
      <h1>Edit Product</h1>
      <ProductForm product={product} />
    </div>
  );
};

export default EditProduct;
