// components/ProductForm.js
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import axios from "axios";

const ProductForm = ({ product }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(product ? product.imageUrl : "");

  const formik = useFormik({
    initialValues: {
      name: product ? product.name : "",
      description: product ? product.description : "",
      price: product ? product.price : "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.number()
        .required("Required")
        .positive("Must be a positive number"),
    }),
    onSubmit: async (values) => {
      let imageUrl = product ? product.imageUrl : "";

      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        const uploadRes = await axios.post("/api/upload", formData);
        imageUrl = uploadRes.data.filePath;
      }

      const newProduct = {
        ...values,
        imageUrl,
      };

      if (product) {
        await axios.put(`/api/products/${product._id}`, newProduct);
      } else {
        await axios.post("/api/products", newProduct);
      }

      alert("Product saved!");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-6 p-8 max-w-lg mx-auto bg-white rounded-lg shadow-md"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-lg font-semibold text-gray-700"
        >
          Product Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter product name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-lg font-semibold text-gray-700"
        >
          Description
        </label>
        <ReactQuill
          value={formik.values.description}
          onChange={(value) => formik.setFieldValue("description", value)}
          className="mt-2 w-full border border-gray-300 rounded-md"
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.description}
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-lg font-semibold text-gray-700"
        >
          Price
        </label>
        <input
          id="price"
          type="number"
          name="price"
          placeholder="Enter price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.price && formik.errors.price ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.price}</div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-lg font-semibold text-gray-700"
        >
          Upload Product Image
        </label>
        <input
          id="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mt-2 block w-full text-sm text-gray-700 border border-gray-300 rounded-md"
        />
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Product"
            className="mt-4 w-40 h-auto rounded-md"
          />
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
        >
          Save Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
