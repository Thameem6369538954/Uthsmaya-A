import { motion } from "framer-motion";
import { useRef } from "react";
import Watch from "../cateImg/Watch.png";

const products = [
  { name: "Blueberry", image: Watch, bg: "bg-gray-300" },
  { name: "Cranberry", image: Watch, bg: "bg-red-200" },
  { name: "Rose White", image: Watch, bg: "bg-blue-300" },
  { name: "Spice Mango", image: Watch, bg: "bg-yellow-300" },
  { name: "Changer", image: Watch, bg: "bg-red-200" },
  { name: "Lemon Blast", image: Watch, bg: "bg-green-300" },
  { name: "Tropical Mix", image: Watch, bg: "bg-orange-300" },
  { name: "Berry Punch", image: Watch, bg: "bg-purple-300" },
  { name: "Vanilla Dream", image: Watch, bg: "bg-pink-300" },
  { name: "Coconut Rush", image: Watch, bg: "bg-teal-300" }
];

const ProductCategories = () => {
  const scrollRef = useRef(null);

  return (
    <div className="text-center py-10">
      <h3 className="text-sm text-gray-500 tracking-widest">THE PRODUCTS</h3>
      <h2 className="text-3xl font-bold text-black">Watch Product</h2>
      <div className="w-16 h-1 bg-red-500 mx-auto mt-2 mb-6"></div>

      <div className="overflow-hidden relative w-full">
        <motion.div
          ref={scrollRef}
          className="flex gap-6 py-6 px-4"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {[...products, ...products].map((product, index) => ( // Duplicated for infinite loop effect
            <motion.div
              key={index}
              className={`flex flex-col items-center ${product.bg} p-6 rounded-full shrink-0`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-44 h-44 object-contain"
              />
              <p className="text-gray-700 mt-2">{product.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCategories;
