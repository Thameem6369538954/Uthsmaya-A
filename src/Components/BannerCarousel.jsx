import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import New from "../Images/New.jpg";
import Newa from "../Images/Newa.jpg";
import Newb from "../Images/Newb.jpg";

const banners = [
  { id: 1, img: New },
  { id: 2, img: Newa },
  { id: 3, img: Newb },
];

const BannerCarousel = () => {
  return (
    <div className="w-full max-w-full mx-auto mt-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={1000} // Smooth transition speed (1 second)
        className="w-full min-h-80 rounded-lg"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="w-full min-h-80 bg-cover bg-center bg-no-repeat rounded-lg transition-all duration-700 ease-in-out"
              style={{ backgroundImage: `url(${banner.img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
