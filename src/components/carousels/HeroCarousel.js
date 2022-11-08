import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { EffectFade } from 'swiper';
import "../../App.css";
import Images from "../../assets/img";

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
        navigation={true}
        modules={[Autoplay, Navigation,EffectFade]}
        effect='fade'
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Images.hero6} alt="hero" className=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.hero2} alt="hero" className=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.hero3} alt="hero" className=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.hero4} alt="hero" className=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.hero5} alt="hero" className=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.hero1} alt="hero" className=""/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroCarousel;
