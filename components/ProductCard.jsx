// components/ProductCard.js
import Link from "next/link";
import useStore from "../store";
import { useRouter } from "next/router";


const ProductCard = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);
  const router = useRouter();

  return (
    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      <img
        src={product.imageUrl}
        alt={product.name}
        width={200} // Specify a width
        height={200} // Specify a height
        className="w-full object-cover mb-4 rounded"
      />
      <h3 className="text-2xl font-semibold">{product.name}</h3>
      <p className="text-gray-900 font-bold">৳{product.price}</p>
      <div className="flex items-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={(e) => {
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
        <button
          className="bg-green-500 ml-4 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
          onClick={(e) => {
            addToCart(product);
            router.push("/cart");
          }}
        >
          Buy Now
        </button>
      </div>
      <Link href={`/product/${product._id}`}>
        <span className="text-blue-600 underline mt-2">View Details</span>
      </Link>
    </div>
  );
};

export default ProductCard;
