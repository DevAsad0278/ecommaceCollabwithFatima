import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaHeart,
  FaShoppingCart,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="w-full">
      {/* 🔹 Top black bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          {/* Left side: Currency & Language */}
          <div className="flex items-center space-x-4">
            <select className="bg-gray-800 text-white px-2 py-1 rounded">
              <option value="USD">USD</option>
              <option value="PKR">PKR</option>
              <option value="EUR">EUR</option>
            </select>

            <select className="bg-gray-800 text-white px-2 py-1 rounded">
              <option value="EN">English</option>
              <option value="UR">Urdu</option>
            </select>
          </div>

          {/* Right side: Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Second white bar */}
      <div className="bg-white text-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* LEFT: Shop Name */}
          <div className="text-2xl font-bold tracking-wide text-blue-700">
            ANOX
          </div>

          {/* CENTER: Search Bar */}
          <div className="flex items-center w-1/2">
            <input
              type="text"
              placeholder="Enter your products..."
              className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700">
              Search
            </button>
          </div>

          {/* RIGHT: Icons */}
          <div className="flex space-x-6 text-xl">
            <button className="hover:text-blue-600" title="Contact">
              <FaPhoneAlt />
            </button>
            <button className="hover:text-red-600" title="Favorites">
              <FaHeart />
            </button>
            <button className="hover:text-green-600" title="Cart">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
