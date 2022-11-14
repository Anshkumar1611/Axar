import React from "react";
import HeroCarousel from "../components/carousels/Hero/HeroCarousel";
import HeroSection from "../components/Layouts/HeroSection";
import AboutSection from "../components/Layouts/AboutSection";
import WhyUsSection from "../components/Layouts/WhyUsSection";
import WhatWeDo from "../components/Layouts/WhatWeDo";
import Testimonial from "../components/Layouts/Testimonial";

function Home() {
  return (
    <div>
      <div className="relative">
        <div className="h-screen ">
          <HeroCarousel />
        </div>
        <div className=" w-full h-full">
          <HeroSection />
        </div>
      </div>
      <AboutSection />
      <WhyUsSection />
      <WhatWeDo />
      <Testimonial />
    </div>
  );
}

export default Home;
