// components/ProductCard.js
import Link from "next/link";
import useStore from "../store";

const ProductCard = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="border p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer">
      <img
        src={product.imageUrl}
        alt={product.name}
        width={200} // Specify a width
        height={200} // Specify a height
        className="w-full object-cover mb-2"
      />
      <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-900 font-bold">৳{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link href={`/product/${product._id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
