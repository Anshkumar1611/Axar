import React from "react";
import HeroCarousel from "../components/carousels/Hero/HeroCarousel";
import HeroSection from "../components/Layouts/LandingPage/HeroSection";
import AboutSection from "../components/Layouts/LandingPage/AboutSection";
import WhyUsSection from "../components/Layouts/LandingPage/WhyUsSection";
import WhatWeDo from "../components/Layouts/LandingPage/WhatWeDo";
// import Testimonial from "../components/Layouts/LandingPage/Testimonial";
import OurProjects from "../components/Layouts/LandingPage/OurProjects";

function Home() {
  return (
    <div>
      <div className="relative">
        <div className="h-screen ">
          <HeroCarousel />
        </div>
        <div className="">
          <HeroSection />
        </div>
      </div>
      <AboutSection />
      <WhyUsSection />
      <WhatWeDo />
      <OurProjects />
      {/* <Testimonial /> */}
    </div>
  );
}

export default Home;
