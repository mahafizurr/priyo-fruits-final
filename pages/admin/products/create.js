import dynamic from "next/dynamic";

const AdminNav = dynamic(() => import("../../../components/AdminNav"), {
  ssr: false,
});
const ProductForm = dynamic(() => import("../../../components/ProductForm"), {
  ssr: false,
});

const CreateProduct = () => {
  return (
    <div>
      <AdminNav />
      <h1>Create Product</h1>
      <ProductForm />
    </div>
  );
};

export default CreateProduct;
