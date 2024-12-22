import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="w-full px-6 py-8 bg-gradient-to-r from-gray-100 to-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
        Contact Us
      </h1>
      <div className="max-w-3xl mx-auto grid gap-6">
        {/* Address */}
        <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-green-600 mr-6 text-2xl"
          />
          <div>
            <h2 className="font-bold text-lg text-gray-800">Address</h2>
            <p className="text-gray-600">
              Sabek Lavanga, Ranihati, Shibganj, Chapainawabganj-6300
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="text-blue-500 mr-6 text-2xl"
          />
          <div>
            <h2 className="font-bold text-lg text-gray-800">Phone</h2>
            <a
              href="tel:+8801303546501"
              className="text-blue-500 hover:underline"
            >
              01303546501
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-green-500 mr-6 text-2xl"
          />
          <div>
            <h2 className="font-bold text-lg text-gray-800">WhatsApp</h2>
            <a
              href="https://wa.me/message/F2NWRN5I52AUP1"
              className="text-blue-500 hover:underline"
            >
              01303546501
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-red-500 mr-6 text-2xl"
          />
          <div>
            <h2 className="font-bold text-lg text-gray-800">Email</h2>
            <a
              href="mailto:priyofruits@gmail.com"
              className="text-blue-500 hover:underline"
            >
              priyofruits@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
