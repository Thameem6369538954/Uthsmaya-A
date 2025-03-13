import React from "react";

const ShowcaseCom = () => {
  // Product Data Inside Component
  const products = [
    {
      id: 1,
      title: "Elegant Watch",
      image: "/images/watch.jpg",
      discountPrice: 40,
      originalPrice: 45,
      category: "Watches",
      onSale: true,
    },
    {
      id: 2,
      title: "Eco-Friendly Products",
      image: "/images/eco-product.jpg",
      discountPrice: 40,
      originalPrice: 45,
      category: "Cups",
      onSale: false,
    },
    {
      id: 3,
      title: "The Power of Subconscious Mind",
      image: "/images/book.jpg",
      discountPrice: 40,
      originalPrice: 45,
      category: "Books",
      onSale: false,
    },
    {
      id: 4,
      title: "Yoga Mat",
      image: "/images/yoga-mat.jpg",
      discountPrice: 50,
      originalPrice: 60,
      category: "Yoga Mats",
      onSale: false,
    },
    {
      id: 5,
      title: "Headphones",
      image: "/images/headphones.jpg",
      discountPrice: 90,
      originalPrice: 100,
      category: "Accessories",
      onSale: true,
    },
    {
      id: 6,
      title: "Eco-Friendly Bags",
      image: "/images/eco-bags.jpg",
      discountPrice: 40,
      originalPrice: 45,
      category: "Reusable Bags",
      onSale: false,
    },
  ];

  return (
    <div className="bg-[#f7f1e3] py-10 px-4">
      <div className="max-w-9xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-semibold text-center mb-8 font-[Heading]">
          Featured Products
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-[sml]">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md relative flex flex-col items-center"
            >
              {/* Sale Badge */}
              {product.onSale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  SALE
                </span>
              )}

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
              />

              {/* Product Details */}
              <h3 className="mt-3 font-semibold text-lg text-center">
                {product.title}
              </h3>

              {/* Ratings */}
              <div className="flex justify-center mt-1">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="text-yellow-500 text-sm">⭐</span>
                  ))}
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-center mt-2">
                <p className="text-red-500 text-lg font-bold">${product.discountPrice}</p>
                <p className="text-gray-400 line-through ml-2">${product.originalPrice}</p>
              </div>

              {/* Category */}
              <p className="text-gray-500 text-sm text-center">
                Category: {product.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCom;
