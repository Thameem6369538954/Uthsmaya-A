import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Watch from "../cateImg/Watch.png";
import Lunch from "../cateImg/Lunch.png";
import Mag from "../cateImg/Mag.png";
import Award from "../cateImg/Award.png";

const products = [
  { name: "All", image: Watch, bg: "bg-gradient-to-b from-[#4190bb] to-[#eebf77]" },
  { name: "Watch", image: Watch, bg: "bg-gradient-to-b from-[#4190bb] to-[#eebf77]" },
  { name: "lunchboxes", image: Lunch, bg: "bg-gradient-to-b from-blue-100 to-[#EDE2D5]" },
  { name: "Tea Coasters", image: Mag, bg: "bg-gradient-to-t from-[#E9E1D7] to-yellow-200" },
  { name: "Awards", image: Award, bg: "bg-gradient-to-t from-[#f5f4f1] to-gray-900" },
  { name: "Changer", image: Watch, bg: "bg-gradient-to-b from-purple-300 to-indigo-600" },
  { name: "Lemon Blast", image: Watch, bg: "bg-gradient-to-br from-teal-400 to-green-500" },
  { name: "Tropical Mix", image: Watch, bg: "bg-gradient-to-r from-indigo-400 to-cyan-400" },
  { name: "Berry Punch", image: Watch, bg: "bg-gradient-to-r from-indigo-200 to-yellow-100" },
  { name: "Vanilla Dream", image: Watch, bg: "bg-gradient-to-r from-gray-600 to-gray-900" },
  { name: "Coconut Rush", image: Watch, bg: "bg-gradient-to-r from-violet-400 to-purple-300" }
];

const ProductCategories = () => {
  const scrollRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
    }
  }, []);
  

  return (
    <div className="text-center py-10">
      
      {/* Carousel Container */}
      <div className="overflow-hidden relative w-full font-[sml]">
        <motion.div
          ref={scrollRef}
          className="flex gap-6 py-6 px-4 hide-scrollbar"
          drag="x"
          dragConstraints={{ left: -width, right: 0 }} // 💡 Auto-calculated
        >
          {products.map((product, index) => (

            <motion.div
              key={index}
              className={`flex flex-col items-center ${product.bg} p-6 rounded-xl shrink-0`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-contain"
              />
              <p className="text-black font-[sml] text-xl mt-2 ">{product.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCategories;
