import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This company provides excellent service! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Amazing quality products and fast delivery!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Robert Johnson",
    feedback: "Great experience! Will definitely shop again.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-6xl font-bold text-center mb-6 text-gray-800 font-[Heading]">
        What Our Customers Say
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center font-[sml]">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-gray-300"
              />
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
