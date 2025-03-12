import { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter } from "react-icons/fi";
import { FaStar, FaTag } from "react-icons/fa";
import productData from "../Data/productData";
import { Link } from "react-router-dom";

const categories = ["All", "Watches", "Water Bottles", "Cups", "Books", "Bags"];

const ProductGrid = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle filtering
  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(productData);
    } else {
      setFilteredProducts(productData.filter((product) => product.category === category));
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Filter */}
      <motion.div
        className={`bg-white p-4 shadow-md md:w-1/4 fixed md:relative top-0 left-0 h-full transition-transform transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <h3 className="text-lg font-bold mb-4">Filters</h3>
        <button onClick={() => setIsFilterOpen(false)} className="md:hidden mb-4 bg-gray-300 px-3 py-1 rounded">
          Close
        </button>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-2 rounded ${
                selectedCategory === category ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Main Product Section */}
      <div className="md:w-3/4 w-full p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Products</h2>
          <button
            className="md:hidden bg-gray-200 p-2 rounded"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FiFilter size={20} />
          </button>
        </div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition relative"
                whileHover={{ scale: 1.05 }}
              >
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                  <h3 className="mt-3 text-sm font-semibold">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-yellow-400 ${i < product.rating ? "" : "opacity-30"}`} />
                    ))}
                  </div>
                  <div className="flex items-center mt-2">
                    <p className="text-red-500 font-bold text-lg">${product.discountedPrice}</p>
                    <p className="text-gray-400 text-sm line-through ml-2">${product.price}</p>
                  </div>
                  {product.tags?.includes("SALE") && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center">
                      <FaTag className="mr-1" /> SALE
                    </span>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Category: {product.category}</p>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductGrid;
