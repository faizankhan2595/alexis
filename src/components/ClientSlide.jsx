import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo1 from "../assests/logo1.png";
import logo2 from "../assests/logo2.png";
import logo3 from "../assests/logo3.png";
import logo4 from "../assests/logo4.png";
import logo5 from "../assests/logo5.png";
import logo6 from "../assests/logo6.png";
import logo7 from "../assests/logo7.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ClientSlide() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="logo5 swiperlogoBox"><img src={logo5} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo6 swiperlogoBox"><img src={logo6} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo7 swiperlogoBox"><img src={logo7} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo1 swiperlogoBox"><img src={logo1} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo2 swiperlogoBox"><img src={logo2} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo3 swiperlogoBox"><img src={logo3} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo4 swiperlogoBox"><img src={logo4} alt="" /></div></SwiperSlide>
      </Swiper>
    </>
  );
}
