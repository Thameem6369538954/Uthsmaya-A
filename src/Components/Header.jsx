import React from "react";
import { motion } from "framer-motion";
import Hd from "../Images/Hd.jpg";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  const text =
    "Uthsmaya!! The trusted corporate  gifting company in Chennai you have been looking for!!";

  return (
    <div
      style={{
        backgroundImage: `url(${Hd})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen w-full flex items-center justify-center text-white font-[New] px-4 md:px-10"
    >
      <div className="text-center max-w-4xl">
        {/* Animated Text */}
        <motion.h1 className="text-xl sm:text-2xl md:text-3xl lg:text-7xl  leading-snug break-words">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: text.length * 0.02 + 0.2 }}
          className="mt-6 px-6 py-3 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-[sml] text-[#ff0011] bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-200 mx-auto"
        >
          Shop Now
          <HiOutlineShoppingCart className="text-xl" />
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
