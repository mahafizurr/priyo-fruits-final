import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const QuickLinks = () => (
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/">
            <span className="hover:underline block">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="hover:underline block">About</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="hover:underline block">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );

  const ImportantLinks = () => (
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-2">Important Links</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/deliverypolicy">
            <span className="hover:underline block">Delivery Policy</span>
          </Link>
        </li>
        <li>
          <Link href="/returnpolicy">
            <span className="hover:underline block">Return and Refund Policy</span>
          </Link>
        </li>
      </ul>
    </div>
  );

  const ContactUs = () => (
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
      <p>
        Sabek Lavanga, Ranihati, Shibganj, Chapainawabganj-6300.
        <br />
        Phone:{" "}
        <span className="hover:underline">
          01303546501
        </span>
        <br />
        WhatsApp:{" "}
        <span
          className="hover:underline"
          onClick={() =>
            window.open("https://wa.me/8801303546501", "_blank")
          }
        >
          01303546501
        </span>
        <br />
        Email:{" "}
        <span className="hover:underline">
          priyofruits@gmail.com
        </span>
      </p>
    </div>
  );

  const SocialMediaLinks = () => (
    <div className="flex justify-center space-x-6 mt-4">
      <span
        className="text-blue-600 hover:text-blue-800"
        aria-label="Facebook"
        onClick={() =>
          window.open("https://www.facebook.com/Priyofruits", "_blank")
        }
      >
        <i className="fab fa-facebook text-2xl"></i>
      </span>
      <span
        className="text-pink-600 hover:text-pink-800"
        aria-label="Instagram"
        onClick={() =>
          window.open("https://instagram.com/", "_blank")
        }
      >
        <i className="fab fa-instagram text-2xl"></i>
      </span>
      <span
        className="text-blue-400 hover:text-blue-600"
        aria-label="Twitter"
        onClick={() =>
          window.open("https://x.com/Priyofruits", "_blank")
        }
      >
        <i className="fab fa-twitter text-2xl"></i>
      </span>
      <span
        className="text-green-500 hover:text-green-700"
        aria-label="WhatsApp"
        onClick={() =>
          window.open("https://wa.me/8801303546501", "_blank")
        }
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </span>
    </div>
  );

  return (
    <footer className="bg-green-950 text-white">
      <div className="container mx-auto">
        {/* Map */}
        <div className="bg-white grid justify-center mt-12 mb-4 border-t-2 border-orange-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3626.631976049487!2d88.19783062481943!3d24.636366154189094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSabek%20Lavanga%2C%20Ranihati%2C%20Shiganj%2C%20Chapainawabganj-6300.!5e0!3m2!1sen!2sbd!4v1717239038896!5m2!1sen!2sbd"
            className="w-full h-64 md:h-96"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer"
            title="Priyo Fruits Location"
          ></iframe>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-start  md:items-center p-6 rounded-lg">
          <QuickLinks />
          <ImportantLinks />
          <ContactUs />
          <div className="flex-1">
            <Image
              src="/priyo-fruits.png"
              width={200}
              height={200}
              alt="Priyo Fruits Logo"
              className="mx-auto"
            />
          </div>
        </div>

        {/* Social Media Links */}
        <SocialMediaLinks />

        {/* Copyright */}
        <div className="mt-8 text-center border-t-2 border-gray-600 pt-4 pb-4">
          <p>&copy; {currentYear} Priyo Fruits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
