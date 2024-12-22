import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import useStore from "../store";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const cart = useStore((state) => state.cart);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-2 border-b border-gray-300">
        <div className="flex items-center mb-2 md:mb-0">
          <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-green-500" />
          <span
            href="tel:+8801303546501"
            className="hover:underline text-gray-700"
          >
            +8801303546501
          </span>
        </div>
        <div className="flex space-x-4">
          <span
            href="https://x.com/Priyofruits"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 text-gray-600"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span
            href="https://www.facebook.com/Priyofruits"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 text-gray-600"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span
            href="https://wa.me/message/F2NWRN5I52AUP1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 text-gray-600"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
          <span
            href="https://www.instagram.com/priyofruits"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 text-gray-600"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </div>
      </div>

      <header className="bg-green-950 shadow-md text-white w-full px-8 py-4 sticky top-0 z-75">
        <nav className="flex justify-between items-center flex-wrap md:flex-nowrap">
          <div className="flex justify-between items-center w-full md:w-auto">
            <button
              id="menu-toggle"
              className="text-white focus:outline-none block md:hidden"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <div className="text-2xl font-bold flex-grow text-center md:text-left">
              <Link href="/">Priyo Fruits</Link>
            </div>
            <div className="md:hidden">
              <Link href="/cart">
                <span className="hover:underline">
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-2xl"
                    />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
                      {cart.length}
                    </span>
                  </div>
                </span>
              </Link>
            </div>
          </div>

          <ul
            id="menu"
            className={`w-full md:flex md:items-center md:w-auto md:space-x-8 text-lg ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <li className="my-2 md:my-0">
              <Link href="/">
                <span
                  className="hover:underline block"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/about">
                <span
                  className="hover:underline block"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </span>
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/contact">
                <span
                  className="hover:underline block"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>

          <div className="hidden md:block mt-2 md:mt-0">
            <Link href="/cart" className="hover:underline">
              <div className="relative">
                <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
                  {cart.length}
                </span>
              </div>
            </Link>
          </div>
        </nav>
      </header>
      {router.pathname === "/" && (
        <div className="w-full shadow-md">
          <img
            src="/banner.jpg"
            alt="Delicious fruits banner"
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
