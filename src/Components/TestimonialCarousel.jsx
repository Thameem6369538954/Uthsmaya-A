import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "This website has amazing products! Super fast delivery and great customer support.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    review:
      "The quality of the products is excellent! I’ve ordered multiple times and never been disappointed.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    review:
      "Highly recommend! The shopping experience is seamless and the checkout process is smooth.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Wilson",
    review:
      "I love the variety of products available. Customer service is friendly and responsive.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className=" py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-[Heading] text-gray-800 mb-6">
          What Our Customers Say
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition hover:scale-105">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
