import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Star } from "lucide-react";
import Watch from "../Images/Watch.jpg";

const products = [
  { id: 1, name: "Luxury Watch", price: "₹199.99", rating: 4.5, image: Watch },
  { id: 2, name: "Classic Watch", price: "₹149.99", rating: 4.0, image: Watch },
  { id: 3, name: "Sports Watch", price: "₹129.99", rating: 4.2, image: Watch },
  { id: 4, name: "Smart Watch", price: "₹249.99", rating: 4.8, image: Watch },
  { id: 5, name: "Vintage Watch", price: "₹179.99", rating: 4.3, image: Watch },
  { id: 6, name: "Minimalist Watch", price: "₹99.99", rating: 4.1, image: Watch },
  { id: 7, name: "Elegant Watch", price: "₹219.99", rating: 4.6, image: Watch },
  { id: 8, name: "Digital Watch", price: "₹89.99", rating: 4.0, image: Watch },
];

const ProductCarousel = () => {
  return (
    <div className="w-full max-w-8xl mx-auto p-4 font-[sml]">
        <div className="flex flex-col items-start justify-center text-center">
        {/* <h3 className="text-lg md:text-xl font-[New] text-gray-500 tracking-widest">
          THE PRODUCTS
        </h3> */}
        <h2 className="text-3xl md:text-5xl font-[Heading] text-black">
        New Arrivels
        </h2>
        <div className="w-[26%] h-1 bg-red-500  mt-2 mb-6"></div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.price}</p>
              <div className="flex justify-center items-center mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-4 w-4 ${index < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
