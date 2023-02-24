import React from 'react'
import "../style/Clients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import logo1 from "../assests/logo1.png";
import logo2 from "../assests/logo2.png";
import logo3 from "../assests/logo3.png";
import logo4 from "../assests/logo4.png";
import logo5 from "../assests/logo5.png";
import logo6 from "../assests/logo6.png";
import logo7 from "../assests/logo7.png";

const Clients = () => {
  return (
    <div className="clients">
        <div className="main">
            <div className="top">
                <div className="heading">SOME OF OUR CLIENTS</div>
                <div className="bar"></div>
            </div>
            <div className="bottom">
                {/* <div className="logo1"><img src={logo1} alt="" /></div> */}
                {/* <div className="logo2"><img src={logo2} alt="" /></div> */}
                {/* <div className="logo3"><img src={logo3} alt="" /></div> */}
                {/* <div className="logo4"><img src={logo4} alt="" /></div> */}
                <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><div className="logo5"><img src={logo5} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo6"><img src={logo6} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo7"><img src={logo7} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo1"><img src={logo1} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo2"><img src={logo2} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo3"><img src={logo3} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo4"><img src={logo4} alt="" /></div></SwiperSlide>
            </Swiper>

            <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper-mobile"
          >
            <SwiperSlide><div className="logo5"><img src={logo5} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo6"><img src={logo6} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo7"><img src={logo7} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo1"><img src={logo1} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo2"><img src={logo2} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo3"><img src={logo3} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="logo4"><img src={logo4} alt="" /></div></SwiperSlide>
            </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Clients