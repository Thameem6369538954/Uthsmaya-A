import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "../ProImg/Hdb.webp";
import Img2 from "../ProImg/Gft.png";
import Img3 from "../ProImg/Hst.png"; // Add more as needed
import Img4 from "../ProImg/Wtc.png"; // Add more as needed

const images = [Img1, Img2, Img3,Img4]; // Add more image imports to this array

const ProductShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Change image every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-20 md:mt-0 flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-gray-100 to-white px-6 md:px-16 py-7 md:py-24 font-sans overflow-hidden lg:min-h-[100vh]">
      {/* Text Content */}
      <motion.div
        className="w-full lg:w-1/1 text-center lg:text-left space-y-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#ed1b24]">UTHS<span className="text-[#ffdf20]">MAYA...</span></h1>

        <h2 className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-black text-[#e2e2e2] leading-none -mt-4 tracking-tight">
          The Gift World
        </h2>

        <p className="text-gray-400 md:text-6xl font-[Jio] text-center lg:text-left">
          The Trusted Corporate Gifting Company in Chennai You have Been Looking For!!
        </p>

        <motion.button
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm md:text-base font-[sml] transition duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop By Category
        </motion.button>
      </motion.div>

      {/* Animated Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Product"
            className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] object-contain"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
