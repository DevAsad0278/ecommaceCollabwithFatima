import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaHeart,
  FaShoppingCart,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/banner-1.jpg",
      subtitle: "Trending Item",
      title: "Women's Latest Fashion Sale",
      text: "Starting at $20.00",
      button: "Shop Now",
    },
    {
      image: "/banner-2.jpg",
      subtitle: "New Arrival",
      title: "Men's Winter Collection 2025",
      text: "Flat 30% Off",
      button: "Explore Now",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="w-full font-sans overflow-x-hidden">
      {/* 🔹 Top Header */}
      <div className="bg-gray-100 text-gray-700 text-sm border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <p className="hidden md:block">
            FREE SHIPPING THIS WEEK ORDER OVER -{" "}
            <span className="font-semibold">$55</span>
          </p>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-3 text-gray-600">
              <a href="#" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-sky-500">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaWhatsapp />
              </a>
            </div>

            <select className="bg-transparent text-gray-700 px-2 py-1 rounded border border-gray-200">
              <option value="USD">USD $</option>
              <option value="PKR">PKR ₨</option>
              <option value="EUR">EUR €</option>
            </select>
            <select className="bg-transparent text-gray-700 px-2 py-1 rounded border border-gray-200">
              <option value="EN">English</option>
              <option value="UR">Urdu</option>
            </select>
          </div>
        </div>
      </div>

      {/* 🔹 Middle Navbar */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <div className="text-3xl font-extrabold tracking-wide text-gray-900">
            E Store
          </div>

          <div className="hidden md:flex items-center w-1/2 border border-gray-300 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Enter your product name..."
              className="w-full px-4 py-2 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-5 py-2 hover:bg-blue-700">
              Search
            </button>
          </div>

          <div className="flex items-center space-x-6 text-xl relative">
            <a href="#" className="hover:text-blue-600">
              <FaPhoneAlt />
            </a>
            <a href="#" className="hover:text-red-600 relative">
              <FaHeart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                0
              </span>
            </a>
            <a href="#" className="hover:text-green-600 relative">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
                0
              </span>
            </a>
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Navbar */}
      <div className="bg-white border-t border-gray-200 shadow-sm relative z-40">
        <div className="container mx-auto px-4 py-3">
          <ul
            className={`flex-col md:flex md:flex-row md:justify-center md:space-x-8 text-sm font-semibold uppercase tracking-wide text-gray-800 ${
              menuOpen ? "flex" : "hidden md:flex"
            }`}
          >
            {[
              { name: "Home" },
              { name: "Categories", dropdown: true },
              { name: "Men's", dropdown: true },
              { name: "Women's", dropdown: true },
              { name: "Jewelry", dropdown: true },
              { name: "Perfume", dropdown: true },
              { name: "Blog" },
              { name: "Hot Offers" },
            ].map((item) => (
              <li
                key={item.name}
                className="relative group px-3 py-2 cursor-pointer hover:text-pink-600"
              >
                <div
                  onClick={() => toggleDropdown(item.name)}
                  className="flex justify-between items-center"
                >
                  {item.name}
                  {item.dropdown && (
                    <span className="md:hidden ml-2 text-gray-500">
                      {openDropdown === item.name ? "▲" : "▼"}
                    </span>
                  )}
                </div>

                {/* 🔹 Desktop Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 top-full hidden md:group-hover:block bg-white shadow-2xl rounded-md p-6 w-[900px] transition-all duration-300 ease-in-out">
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                      {/* Categories */}
                      {item.name === "Categories" && (
                        <>
                          <div>
                            <h4 className="font-bold mb-3 text-gray-700">
                              Electronics
                            </h4>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>Desktop</li>
                              <li>Laptop</li>
                              <li>Camera</li>
                              <li>Tablet</li>
                              <li>Headphone</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-3 text-gray-700">
                              Smart Devices
                            </h4>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>Smart Watch</li>
                              <li>Smart TV</li>
                              <li>Keyboard</li>
                              <li>Mouse</li>
                              <li>Microphone</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-3 text-gray-700">
                              Accessories
                            </h4>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>Mouse Collection</li>
                              <li>Headphone Collection</li>
                            </ul>
                          </div>

                          {/* 🔹 Responsive Three Images in One Row */}
                          <div className="col-span-4 flex justify-between items-center gap-4 mt-4">
                            <img
                              src="/banner1.jpg"
                              className="w-[28%] h-auto rounded-lg shadow-md hover:scale-105 transition-transform object-cover"
                              alt="Categories 1"
                            />
                            <img
                              src="/banner2.jpg"
                              className="w-[28%] h-auto rounded-lg shadow-md hover:scale-105 transition-transform object-cover"
                              alt="Categories 2"
                            />
                            <img
                              src="/banner3.jpg"
                              className="w-[28%] h-auto rounded-lg shadow-md hover:scale-105 transition-transform object-cover"
                              alt="Categories 3"
                            />
                          </div>
                        </>
                      )}

                      {/* Men */}
                      {item.name === "Men's" && (
                        <>
                          <div>
                            <h4 className="font-bold mb-3 text-gray-700">
                              Men's Wear
                            </h4>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>Shirt</li>
                              <li>Shorts & Jeans</li>
                              <li>Safety Shoes</li>
                              <li>Wallet</li>
                            </ul>
                          </div>
                          <div className="col-span-4 mt-4">
                            <img
                              src="/banner3.jpg"
                              className="w-[28%] h-auto rounded-lg shadow-md hover:scale-105 transition-transform object-cover"
                              alt="man"
                            />
                          </div>
                        </>
                      )}

                      {/* Women */}
                      {item.name === "Women's" && (
                        <>
                          <div>
                            <h4 className="font-bold mb-3 text-gray-700">
                              Women's Fashion
                            </h4>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>Dress & Frock</li>
                              <li>Earrings</li>
                              <li>Necklace</li>
                              <li>Makeup Kit</li>
                            </ul>
                          </div>
                          <div className="col-span-4 mt-4">
                            <img
                              src="/banner2.jpg"
                              className="w-[28%] h-auto rounded-lg shadow-md hover:scale-105 transition-transform object-cover"
                              alt="woman"
                            />
                          </div>
                        </>
                      )}

                      {/* Jewelry */}
                      {item.name === "Jewelry" && (
                        <>
                          <div>
                            <h4 className="font-bold mb-3 text-gray-700">
                              Jewelry Collection
                            </h4>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>Earrings</li>
                              <li>Couple Rings</li>
                              <li>Necklace</li>
                              <li>Bracelets</li>
                            </ul>
                          </div>
                          <div className="col-span-4 mt-4">
                            <img
                              src="/banner5.png"
                              className="w-[28%] h-auto rounded-lg shadow-md hover:scale-105 transition-transform object-cover"
                              alt="Jewelry"
                            />
                          </div>
                        </>
                      )}

                      {/* Perfume */}
                      {item.name === "Perfume" && (
                        <>
                          <div>
                            <h4 className="font-bold mb-3 text-gray-700">
                              Perfume Collection
                            </h4>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>Clothes Perfume</li>
                              <li>Deodorant</li>
                              <li>Flower Fragrance</li>
                              <li>Air Freshener</li>
                            </ul>
                          </div>
                          <div className="col-span-4 mt-4">
                            <img
                              src="/banner4.png"
                              className="w-[28%] h-auto rounded-lg shadow-md hover:scale-105 transition-transform object-cover"
                              alt="Perfume"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* 🔹 Mobile Dropdown (text only) */}
                {openDropdown === item.name && (
                  <div className="md:hidden bg-gray-50 rounded-md px-4 py-2 text-gray-700 text-sm space-y-1">
                    {item.name === "Categories" && (
                      <>
                        <p>Desktop</p>
                        <p>Laptop</p>
                        <p>Camera</p>
                        <p>Tablet</p>
                        <p>Headphone</p>
                        <p>Smart Watch</p>
                        <p>Smart TV</p>
                        <p>Keyboard</p>
                      </>
                    )}
                    {item.name === "Men's" && (
                      <>
                        <p>Shirt</p>
                        <p>Shorts & Jeans</p>
                        <p>Safety Shoes</p>
                        <p>Wallet</p>
                      </>
                    )}
                    {item.name === "Women's" && (
                      <>
                        <p>Dress & Frock</p>
                        <p>Earrings</p>
                        <p>Necklace</p>
                        <p>Makeup Kit</p>
                      </>
                    )}
                    {item.name === "Jewelry" && (
                      <>
                        <p>Earrings</p>
                        <p>Couple Rings</p>
                        <p>Necklace</p>
                        <p>Bracelets</p>
                      </>
                    )}
                    {item.name === "Perfume" && (
                      <>
                        <p>Clothes Perfume</p>
                        <p>Deodorant</p>
                        <p>Flower Fragrance</p>
                        <p>Air Freshener</p>
                      </>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔹 Responsive Banner Carousel */}
      <div className="relative w-[80%] md:w-[80%] mx-auto overflow-hidden mt-4 rounded-xl shadow-lg h-[220px] sm:h-[300px] md:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-20 bg-black/40 text-white">
              <p className="text-pink-400 text-xs sm:text-sm md:text-lg uppercase mb-2 tracking-wide">
                {slide.subtitle}
              </p>
              <h2 className="text-lg sm:text-2xl md:text-5xl font-bold mb-3 leading-tight">
                {slide.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-lg mb-4">{slide.text}</p>
              <a
                href="#"
                className="bg-pink-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full hover:bg-pink-600 transition text-xs sm:text-sm md:text-base"
              >
                {slide.button}
              </a>
            </div>
          </div>
        ))}

        {/* Carousel Dots */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${
                i === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
