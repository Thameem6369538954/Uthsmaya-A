import React from "react";
import { FaRocket, FaChartBar, FaSearch } from "react-icons/fa";

const features = [
  {
    id: "01",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FaRocket className="text-4xl text-blue-500" />,
    bgColor: "bg-blue-500",
  },
  {
    id: "02",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FaChartBar className="text-4xl text-purple-500" />,
    bgColor: "bg-purple-500",
  },
  {
    id: "03",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FaSearch className="text-4xl text-pink-500" />,
    bgColor: "bg-pink-500",
  },
];

const FeatureCards = () => {
  return (
    <div className="px-4 py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-6 bg-white rounded-xl shadow-md text-center transition transform hover:scale-105"
          >
            <div
              className={`absolute -top-3 -left-3 w-10 h-10 ${feature.bgColor} rounded-tr-2xl`}
            ></div>
            <div
              className={`absolute -bottom-3 -right-3 w-10 h-10 ${feature.bgColor} rounded-bl-2xl`}
            ></div>
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
            <div
              className={`mt-4 inline-block px-5 py-2 text-white font-bold rounded-full ${feature.bgColor}`}
            >
              {feature.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
