    import { Swiper, SwiperSlide } from "swiper/react";
    import { Navigation, Pagination, Autoplay } from "swiper/modules";
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";
    import New from "../Images/New.jpg"
    import Newa from "../Images/Newa.jpg"
    import Newb from "../Images/Newb.jpg"
    const banners = [
    { id: 1, img: New },
    { id: 2, img: Newa },
    { id: 3, img: Newb },
    ];

    const BannerCarousel = () => {
    return (
        <div className="w-full max-w-full mx-auto mt-4">
       <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation={{ 
    prevEl: ".custom-prev", 
    nextEl: ".custom-next" 
  }}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop
  className="w-full min-h-80 rounded-lg"
>
  {banners.map((banner) => (
    <SwiperSlide key={banner.id}>
      <img
        src={banner.img}
        alt={`Banner ${banner.id}`}
        className="w-full h-80 object-cover rounded-lg"
      />
      {/* <h1>neww</h1> */}
    </SwiperSlide>
  ))}
  {/* Custom Navigation Buttons */}
  <div className="swiper-button-prev custom-prev text-black"></div>
  <div className="swiper-button-next custom-next text-black"></div>
</Swiper>

        </div>
    );
    };

    export default BannerCarousel;
