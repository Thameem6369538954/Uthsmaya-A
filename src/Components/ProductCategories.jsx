import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Watch from "../cateImg/Watch.png";
import Lunch from "../cateImg/Lunch.png";
import Mag from "../cateImg/Mag.png";
import Award from "../cateImg/Award.png";
import Gift from "../cateImg/gift.jpg";
import Book from "../cateImg/Book.jpg";
import kk from "../cateImg/kk.jpg";
import pen from "../cateImg/pen.jpg";
import cap from "../cateImg/cap.png";
import Tmag from "../cateImg/Tmag.png";

const products = [
  { name: "All", image: Watch, bg: "bg-gradient-to-b from-[#4190bb] to-[#eebf77]" },
  { name: "Electronic and gadgets", image: Watch, bg: "bg-gradient-to-b from-[#4190bb] to-[#eebf77]" },
  { name: "T-shirt And Hoodies", image: kk, bg: "bg-gradient-to-b from-[#4190bb] to-[#eebf77]" },
  { name: "Caps", image: cap, bg: "bg-gradient-to-b from-[#4190bb] to-[#eebf77]" },
  { name: "Branded Apparels,Pens and Gadgets ", image: pen, bg: "bg-gradient-to-b from-[#4190bb] to-[#eebf77]" },
  { name: "Drinkware Mug", image: Tmag, bg: "bg-gradient-to-b from-[#4190bb] to-[#eebf77]" },
  { name: "lunchboxes", image: Lunch, bg: "bg-gradient-to-b from-blue-100 to-[#EDE2D5]" },
  { name: "Tea Coasters", image: Mag, bg: "bg-gradient-to-t from-[#E9E1D7] to-yellow-200" },
  { name: "Awards", image: Award, bg: "bg-gradient-to-t from-[#f5f4f1] to-gray-900" },
  { name: "Gift set And Combo", image: Gift, bg: "bg-gradient-to-b from-purple-300 to-indigo-600" },
  { name: "Seo Friendly Products", image: Gift, bg: "bg-gradient-to-b from-purple-300 to-indigo-600" },
  { name: "Book", image: Book, bg: "bg-gradient-to-br from-teal-400 to-green-500" },
  { name: "KeyChains", image: Watch, bg: "bg-gradient-to-r from-indigo-400 to-cyan-400" },
  { name: "Bottle And Flasks", image: Watch, bg: "bg-gradient-to-r from-indigo-200 to-yellow-100" },
  { name: "Pens", image: Watch, bg: "bg-gradient-to-r from-gray-600 to-gray-900" },
  { name: "Pens Stand", image: Watch, bg: "bg-gradient-to-r from-violet-400 to-purple-300" },
  { name: "Pendrives", image: Watch, bg: "bg-gradient-to-r from-violet-400 to-purple-300" },
  { name: "Uniforms", image: Watch, bg: "bg-gradient-to-r from-violet-400 to-purple-300" },
  { name: "Lamps And Torches", image: Watch, bg: "bg-gradient-to-r from-violet-400 to-purple-300" },
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
    <div className="text-center py-2">
      
      {/* Carousel Container */}
      <div className="overflow-hidden relative w-full font-[sml] ">
        <motion.div
          ref={scrollRef}
          className="flex gap-6 py-6 px-4 hide-scrollbar "
          drag="x"
          dragConstraints={{ left: -width, right: 0 }} // 💡 Auto-calculated
        >
          {products.map((product, index) => (

            <motion.div
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl shrink-0 `}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-38 h-38 p-5 object-contain border border-black rounded-full "
              />
              <p className="text-black  font-[sml] text-md mt-2 ">{product.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCategories;
