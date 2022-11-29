import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation,Pagination } from "swiper";
import { EffectFade } from 'swiper';
import "./Style.css";
import Images from "../../../assets/img";

function HeroCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={false}
        modules={[Autoplay, Navigation,EffectFade,Pagination]}
        effect='fade'
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Images.hero6} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.hero2} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.hero3} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.hero4} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.hero5} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.hero1} alt="hero" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroCarousel;
