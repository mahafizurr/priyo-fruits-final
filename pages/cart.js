import useStore from "../store";
import { useRouter } from "next/router";

const Cart = () => {
  const cart = useStore((state) => state.cart || []);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const router = useRouter();

  // Dynamically calculate total amount
  const totalAmount = cart.reduce(
    (acc, product) => acc + (product.price || 0) * (product.quantity || 1),
    0
  );

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      // Remove product if quantity becomes 0
      removeFromCart(productId);
    } else {
      updateQuantity(productId, Math.floor(newQuantity)); // Ensure integer
    }
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product) => (
            <div
              key={product._id}
              className="border p-6 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-lg mb-4"
            >
              {/* Product Image */}
              <img
                src={product.imageUrl || "/fallback-image.jpg"}
                alt={product.name || "Product Image"}
                width={150}
                height={150}
                className="w-40 h-40 rounded object-cover"
              />

              {/* Product Info */}
              <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold mb-2">
                  {product.name || "Unnamed Product"}
                </h3>
                <p className="text-green-600 text-2xl font-bold mb-2">
                  ৳{product.price?.toFixed(2) || "0.00"}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    onClick={() =>
                      handleQuantityChange(product._id, product.quantity - 1)
                    }
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                    aria-label={`Decrease quantity of ${product.name}`}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border rounded">
                    {product.quantity || 1}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantityChange(product._id, product.quantity + 1)
                    }
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                    aria-label={`Increase quantity of ${product.name}`}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  aria-label={`Remove ${product.name} from cart`}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Amount */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Total:{" "}
              <span className="text-green-600">৳{totalAmount.toFixed(2)}</span>
            </h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out transform hover:-translate-y-1"
              onClick={handleCheckout}
            >
              Buy Now
            </button>
          </div>

          {/* Checkout Button */}
          {""}

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              আমাদের প্রতিশ্রুতি
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-2">✅</span>
                আমাদের কাছে পাবেন বাছাইকৃত সেরা মানের খেজুরের গুড়, যা আমরা
                নিজেদের তত্ত্বাবধানে গাছিদের থেকে সংগ্রহ করে থাকি।
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-2">✅</span>
                শতভাগ হাইড্রোজেন বা অন্যান্য রাসায়নিক মুক্ত গুড়ের নিশ্চয়তা।
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-2">✅</span>
                প্রোডাক্ট হাতে পেয়ে, দেখে, কোয়ালিটি চেক করে পেমেন্ট করার সুবিধা।
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-2">✅</span>
                ক্যাশ অন ডেলিভারি, অর্ডার করতে অগ্রীম কোন পেমেন্ট করা লাগবে না।
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
