import { motion } from "framer-motion";
import Tshirt from "../Images/Tshirt.jpg";
import Watch from "../Images/Watch.jpg";
import Books from "../Images/Books.jpg";
import Clock from "../Images/Clock.jpg";

const categories = [
  {
    id: 1,
    title: "Men's Style",
    subtitle: "Up to 70% Off",
    button: "Shop Now",
    img: Tshirt,
    highlight: "New Arrivals",
    colSpan: "lg:col-span-2",
  },
  {
    id: 2,
    title: "Wall Clock",
    subtitle: "",
    button: "Shop Now",
    img: Clock,
    discount: "25% OFF",
  },
  {
    id: 3,
    title: "Watch",
    subtitle: "",
    button: "Shop Now",
    img: Watch,
    discount: "45% OFF",
  },
  {
    id: 4,
    title: "Books",
    subtitle: "Min. 40-80% Off",
    button: "Shop Now",
    img: Books,
    highlight: "Accessories",
    colSpan: "lg:col-span-2",
  },
];

const CategoryCard = ({ item }) => {
  return (
    <motion.div
      className={`relative p-5 bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between font-[sml] ${item.colSpan || ""}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-full min-h-70 md:h-56 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>
      {item.discount && (
        <span className="absolute top-2 left-2 bg-[#fed500] text-white text-xs px-2 py-1 rounded">
          {item.discount}
        </span>
      )}
      {item.highlight && (
        <p className="text-sm text-blue-500 mt-2">{item.highlight}</p>
      )}
      <h2 className="text-lg md:text-xl font-bold mt-1">{item.title}</h2>
      {item.subtitle && <p className="text-gray-500 text-sm">{item.subtitle}</p>}
      <button className="mt-3 text-blue-600 font-semibold border-b border-blue-600 pb-1">
        {item.button} →
      </button>
    </motion.div>
  );
};

const CategoryGrid = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-lg md:text-xl font-[New] text-gray-500 tracking-widest">
          THE PRODUCTS
        </h3>
        <h2 className="text-3xl md:text-5xl font-[Heading] text-black">
          Our trending Sale
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-2 mb-6"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 max-w-7xl mx-auto">
        {categories.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;