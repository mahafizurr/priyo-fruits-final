// pages/thank-you.js
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h1>
      <p>Your order has been placed successfully.</p>
      <Link href="/">
        <span className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
          Go Back to Home
        </span>
      </Link>
    </div>
  );
};

export default ThankYou;
