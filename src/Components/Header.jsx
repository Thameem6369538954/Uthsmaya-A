import React from "react";
import { motion } from "framer-motion";
import Hd from "../Images/Hd.jpg";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  const text = "Welcome to uthsmaya Giftworks";

  return (
    <div
      style={{
        backgroundImage: `url(${Hd})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
      className="flex flex-col items-center justify-center font-[Cur] text-white text-6xl sticky"

    >
          <div className="absolute right-10">
          <div className="flex items-center justify-center flex-col">
          <motion.h1 className="text-center flex ">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

    {/* Button */}
    <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: text.length * 0.1 }}
        className="mt-6 px-6 py-3 flex items-center justify-center gap-2 text-xl font-[sml] text-[#ff0011] bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-200"
      >
        Shop Now
        <HiOutlineShoppingCart />
      </motion.button>
          </div>
          </div>
    </div>
  );
};

export default Header;
