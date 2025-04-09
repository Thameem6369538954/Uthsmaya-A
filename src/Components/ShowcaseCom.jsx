import React, { useState } from "react";
import { motion } from "framer-motion";

import Watch from "../Images/Watch.jpg";
import Clock from "../Images/Clock.jpg";
import Watchalt from "../Images/Watchalt.jpg";
import TshirtA from "../Images/sky-blue.jpg";
import TshirtB from "../Images/sky.jpg";
import hooda from "../Images/hoodie.png";
import Hdb from "../ProImg/Hdb.webp";
import Grn from "../ProImg/GrnT.png";
import GrnA from "../ProImg/GrnTA.jpg";
import Jack from "../ProImg/jacket.png";
import JackA from "../ProImg/river-island-black.webp";
import OO from "../cateImg/OO.png";

import HR from "../ProImg/HR.jpg"
import HRA from "../ProImg/HRA.jpg"
import Bx from "../ProImg/Bx.jpg"
import Bxa from "../ProImg/Bxa.jpg"
import Btl from "../ProImg/Btl.webp"
import BtlA from "../ProImg/BtlA.webp"
import pn from "../ProImg/pn.webp"
import pna from "../ProImg/pna.webp"

const ShowcaseCom = () => {
  const products = [
    {
      id: 1,
      title: "Fling Polo T-Shirt",
      image: TshirtA,
      alternateImage: TshirtB,
      discountPrice: 40,
      originalPrice: 45,
      category: "T-Shirt",
      onSale: true,
    },
    {
      id: 2,
      title: "Headphones",
      image: HR,
      alternateImage: HRA,
      discountPrice: 90,
      originalPrice: 100,
      category: "Accessories",
      onSale: true,
    },
    {
      id: 3,

      title: "Bottle",
      image: Btl,
      alternateImage: BtlA,
      discountPrice: 40,
      originalPrice: 45,
      category: "Reusable Bags",
      onSale: false,
    },
    {
      id: 4,
      title: "Jacket",
      image: Jack,
      alternateImage: JackA,
      discountPrice: 50,
      originalPrice: 60,
      category: "Jackets",
      onSale: true,
    },
    {
      id: 5,
      title: "Yellow Hoodie",
      image: hooda,
      alternateImage: Hdb,
      discountPrice: 40,
      originalPrice: 45,
      category: "Hoodis",
      onSale: false,



    },
    {
      id: 7,
      title: "Pendrive",
      image: pn,
      alternateImage: pna,
      discountPrice: 40,
      originalPrice: 45,
      category: "Accessories",
      onSale: false,
    },
    {
      id: 8,
      title: "Bio Tees Round Neck",
      image: Grn,
      alternateImage: GrnA,
      discountPrice: 40,
      originalPrice: 45,
      category: "T-shirt",
      onSale: false,
    },
    {
      id: 9,
      title: "Gift Box",
      image: Bx,
      alternateImage: Bxa,
      discountPrice: 40,
      originalPrice: 45,
      category: "Reusable Bags",
      onSale: false,
    },
  ];

  return (
    <div className="bg-[#fcfbfb] py-10 px-6 font-[sml]">
      <div className="max-w-9xl mx-auto">
        {/* Title */}
        <div className="flex flex-col justify-center items-center min-h-10">
        <h3 className="text-lg md:text-xl font-[New] text-gray-500 tracking-widest"> OUR NEW TRENDING</h3>

          <h2 className="relative text-3xl md:text-7xl font-[Heading] text-black text-center">
            Featured Products
          </h2>
          <img
            src={OO}
            alt="Featured Product"
            className="w-full max-w-[300px] h-auto object-cover -mt-4"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product, index) => {
            const [hovered, setHovered] = useState(false);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white p-5 rounded-xl shadow-lg relative flex flex-col items-center"
              >
                {product.onSale && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    SALE
                  </span>
                )}

                {/* Product Image with Hover Switch */}
                <img
                  src={hovered ? product.alternateImage : product.image}
                  alt={product.title}
                  className="w-full h-90 object-cover rounded-lg transition-all duration-200"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                />

                {/* Product Title */}
                <h3 className="mt-4 font-semibold text-lg text-center">
                  {product.title}
                </h3>

                {/* Static Rating */}
                <div className="flex justify-center mt-1">
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <span key={index} className="text-yellow-500 text-sm">
                        ⭐
                      </span>
                    ))}
                </div>

                {/* Pricing */}
                {/* <div className="flex items-center justify-center mt-3">
                  <p className="text-red-500 text-lg font-bold">
                    ₹{product.discountPrice}
                  </p>
                  <p className="text-gray-400 line-through ml-2">
                    ₹{product.originalPrice}
                  </p>
                </div> */}

                {/* Category */}
                <p className="text-gray-500 text-sm text-center mt-2">
                  Category: {product.category}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCom;
