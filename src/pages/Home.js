import React from "react";
import HeroCarousel from "../components/carousels/HeroCarousel";
import HeroSection from "../components/Layouts/HeroSection";
import AboutSection from "../components/Layouts/AboutSection";
import WhyUsSection from "../components/Layouts/WhyUsSection";
import WhatWeDo from "../components/Layouts/WhatWeDo";

function Home() {
  return (
    <div>
      <div className="bg-fixed h-screen">
        <HeroCarousel className="h-screen" />
      </div>
      <HeroSection className="" />
      <AboutSection className="" />
      <WhyUsSection className="" />
      <WhatWeDo className="" />
    </div>
  );
}

export default Home;
