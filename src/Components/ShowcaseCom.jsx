import React, { useState } from "react";
import Watch from "../Images/Watch.jpg";
// import WatchAlt from "../Images/Watch-alt.jpg"; // Alternate image for Watch
import Clock from "../Images/Clock.jpg";
import Watchalt from "../Images/Watchalt.jpg";
import TshirtA from "../Images/sky-blue.jpg"
import TshirtB from "../Images/sky.jpg"
// Alternate image for Clock
import hooda from "../Images/hoodie.png"
import Hdb from "../ProImg/Hdb.webp"
import Grn from "../ProImg/GrnT.png"
import GrnA from "../ProImg/GrnTA.jpg"
import Jack from "../ProImg/jacket.png"
import JackA from "../ProImg/river-island-black.webp"

const ShowcaseCom = () => {
  // Product Data Inside Component
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
      title: "Yellow Hoodie",
      image: hooda,
      alternateImage: Hdb,
      discountPrice: 40,
      originalPrice: 45,
      category: "Hoodis",
      onSale: false,
    },
    {
      id: 3,
      title: "Bio Tees Round Neck",
      image: Grn,
      alternateImage: GrnA,
      discountPrice: 40,
      originalPrice: 45,
      category: "T-shirt",
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
      title: "Headphones",
      image: "/images/headphones.jpg",
      alternateImage: "/images/headphones-alt.jpg",
      discountPrice: 90,
      originalPrice: 100,
      category: "Accessories",
      onSale: true,
    },
    {
      id: 7,
      title: "Eco-Friendly Bags",
      image: "/images/eco-bags.jpg",
      alternateImage: "/images/eco-bags-alt.jpg",
      discountPrice: 40,
      originalPrice: 45,
      category: "Reusable Bags",
      onSale: false,
    },
    {
      id: 8,
      title: "Eco-Friendly Bags",
      image: "/images/eco-bags.jpg",
      alternateImage: "/images/eco-bags-alt.jpg",
      discountPrice: 40,
      originalPrice: 45,
      category: "Reusable Bags",
      onSale: false,
    },
    {
      id: 9,
      title: "Eco-Friendly Bags",
      image: "/images/eco-bags.jpg",
      alternateImage: "/images/eco-bags-alt.jpg",
      discountPrice: 40,
      originalPrice: 45,
      category: "Reusable Bags",
      onSale: false,
    },
  ];

  return (
    <div className="bg-[#fcfbfb] py-10 px-6 font-[sml]">
      <div className="max-w-9xl mx-auto">
        <h2 className="text-3xl md:text-7xl font-[Heading] text-gray-500 text-center mb-10 ">
          Featured Products
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => {
            const [hovered, setHovered] = useState(false);

            return (
              <div
                key={product.id}
                className="bg-white p-5 rounded-xl shadow-lg relative flex flex-col items-center hover:scale-105 transition-transform duration-300"
              >
                {/* Sale Badge */}
                {product.onSale && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    SALE
                  </span>
                )}

                {/* Product Image with Hover Effect */}
                <img
                  src={hovered ? product.alternateImage : product.image}
                  alt={product.title}
                  className="w-full h-88 object-cover rounded-lg transition-opacity duration-100"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                />

                {/* Product Details */}
                <h3 className="mt-4 font-semibold text-lg text-center">
                  {product.title}
                </h3>

                {/* Ratings */}
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
                <div className="flex items-center justify-center mt-3">
                  {/* <p className="text-red-500 text-lg font-bold">
                    ₹{product.discountPrice}
                  </p> */}
                  {/* <p className="text-gray-400 line-through ml-2">
                    ₹{product.originalPrice}
                  </p> */}
                </div>

                {/* Category */}
                <p className="text-gray-500 text-sm text-center mt-2">
                  Category: {product.category}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCom;
