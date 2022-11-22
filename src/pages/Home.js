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
      <div className="">
        <div className="h-screen relative">
          <HeroCarousel />
          <div className="absolute inset-y-0 top-24 w-full text-center z-10">
            <HeroSection />
          </div>
        </div>
      </div>
      <AboutSection />
      <WhyUsSection />
      <WhatWeDo />
      <OurProjects />
    </div>
  );
}

export default Home;
