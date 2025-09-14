import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { assets } from "../assets/assets.jsx";

export default function Contactus() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 relative ml-64 w-[calc(100vw-16rem)]">
      <div className="mx-auto mb-4 w-60 h-auto">
        <img
          src= {assets.public_assets.get}
          alt="Get in Touch"
          className="mx-auto mb-4"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Reach Us */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out text-center">
          <FaMapMarkerAlt className="text-teal-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Reach Us</h3>
          <p className="text-black">
            Little Flower School<br />
            Khajrana Road, Pushpa Nagar,<br />
            Indore, Madhya Pradesh – 452018
          </p>
        </div>

        {/* Mail Us */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out text-center">
          <FaEnvelope className="text-teal-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Mail Us</h3>
          <p className="text-black">
            littleflowerindore@rediffmail.com
          </p>
        </div>

        {/* Call Us */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out text-center">
          <FaPhone className="text-teal-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Call Us</h3>
          <p className="text-black">
            0731 – 3103184<br />
            0731 – 4080246
          </p>
        </div>
      </div>
    </div>
  );
}
