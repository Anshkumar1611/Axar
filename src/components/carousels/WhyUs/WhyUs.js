import React from "react";
import Rectangular from "../../common/buttons/Rectangular";
import ThinLine from "../../common/lines/ThinLine";

//================================================= Import Swiper React components=============================================//
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Style.css";

// import required modules
import {  Navigation, EffectFade, Autoplay } from "swiper";

// ==============================================================================================================================//


const data = [
  {
    id: "01",
    Reason: "No Middleman",
    description:
      " If you want to have more control over the products you sell, and the contracts your small business is bound to, you need to lead your own negotiations. Eliminate the middleman and negotiate product contracts for seasonal products and regular orders.",
  },
  {
    id: "02",
    Reason: "Designing",
    description:
      "Design is a process of creating the description of a new facility, usually represented by detailed plans and specifications; construction planning is a process of identifying activities and resources required to make the design a physical reality.",
  },
  {
    id: "03",
    Reason: "Exceptional Pricing",
    description:
      "For a cost to be exceptional, it must be both substantial and unusual — meaning that it normally derives from major change within a business.",
  },
  {
    id: "04",
    Reason: "Flexibility",
    description:
      "Flexibility property in buildings means they can evolve as per the required performance when any change in already set condition takes place. Structural flexibility of buildings has a role in influencing the service life of existing buildings and the possible life of the building newly constructed.",
  },
  {
    id: "05",
    Reason: "Our Guarantee",
    description:
      " A builder,s warranty is insurance provided by the builder on a new construction where they are liable to address the structural defects for a period of five years from the date of handover.",
  },
  {
    id: "06",
    Reason: "100% Transparency",
    description:
      "Transparency is one of the foundations of excellence in manufacturing and a fundamental step to construction companies searching for excellence in their production systems. It can be simply defined as the ability of a production process (or its parts) to communicate with people.",
  },
];
function WhyUs() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: false,
        // }}
        navigation={false}
        modules={[Autoplay, Navigation, EffectFade]}
        className="mySwiper swiperWhy"
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <div className="flex flex-col items-center  gap-4 justify-center w-full h-full px-12  lg:px-24 bg-base-100 ">
                <p className="font-bold text-4xl text-white">{item.id}</p>
                <ThinLine />
                <p className="text-5xl text-yellow">{item.Reason}</p>
                <p className="text-lg font-semibold">{item.description}</p>
                <div className="pb-10">
                  <Rectangular text={"Know More"} path={"/whyUS"} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default WhyUs;
