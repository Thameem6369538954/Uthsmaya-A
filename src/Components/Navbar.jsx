import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import logo from "../Images/logo.png";

const typingVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.1 }, // Delay for each letter
  }),
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const menuItems = ["Home", "AboutUs", "Shop","Apparels", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="bg-[#fcfbfb] shadow-md fixed w-full top-0 left-0 z-50 font-[sml]"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-500">
          <img src={logo} className="w-32" alt="Logo" />
        </Link>

        {/* Search Box (Desktop) */}
        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 w-64 focus:outline-none focus:border-pink-500"
          />
          <Search size={20} className="absolute right-3 text-gray-500" />
        </div>

        {/* Desktop Menu + Icons */}
        <div className="hidden md:flex items-center space-x-6 text-md">
          {menuItems.map((item, index) => (
            <Link to={`/${item.toLowerCase()}`} key={index} className="text-gray-700 hover:text-pink-500">
              {item.split("").map((letter, i) => (
                <motion.span key={i} variants={typingVariants} initial="hidden" animate="visible" custom={i}>
                  {letter}
                </motion.span>
              ))}
            </Link>
          ))}
          
          {/* User & Cart Icons */}
          <Link to="/profile">
            <User size={24} className="text-gray-700 hover:text-pink-500" />
          </Link>
          <Link to="/cart">
            <ShoppingCart size={24} className="text-gray-700 hover:text-pink-500" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Search Box */}
      <div className="md:hidden px-6 pb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:border-pink-500"
          />
          <Search size={20} className="absolute right-3 top-2 text-gray-500" />
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          {menuItems.map((item, index) => (
            <Link
              to={`/${item.toLowerCase()}`}
              key={index}
              className="text-gray-700 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              {item.split("").map((letter, i) => (
                <motion.span key={i} variants={typingVariants} initial="hidden" animate="visible" custom={i}>
                  {letter}
                </motion.span>
              ))}
            </Link>
          ))}
          
          {/* User & Cart Icons (Mobile) */}
          <div className="flex items-center space-x-6 pt-4">
            <Link to="/profile" onClick={() => setIsOpen(false)}>
              <User size={24} className="text-gray-700 hover:text-pink-500" />
            </Link>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              <ShoppingCart size={24} className="text-gray-700 hover:text-pink-500" />
            </Link>
          </div>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
