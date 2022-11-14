import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import "./Style.css";
import TestimonialCard from "../../common/cards/TestimonialCard";

function TestimonialCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1080: {
            width: 1080,
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        slidesPerGroup={1}
        loop={true}
        grabCursor={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}

        className="mySwiper swiperTestimonial"
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TestimonialCarousel;
