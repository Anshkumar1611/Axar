import React from "react";
import ThickLine from "../../common/lines/ThickLine";
import Main from "../../common/buttons/Main";
function HeroSection() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col items-center justify-center gap-6 p-6 w-4/6 lg:w-2/6 lg:h-96 backdrop-opacity-20 backdrop-invert">
        <div>
          <p className="text-primary font-Playfair font-bold text-3xl lg:text-5xl text-center">
            Welcome to AXAR Luxury Homes
          </p>
        </div>
        <div>
          <ThickLine />
        </div>
        <div className="text-primary">
          <p className="text-center font-sans">
            AXAR Luxury Homes is a custom home design and build firm that
            specializes in creating unique, customized homes in South-East
            Queensland, Australia.
          </p>
        </div>
        <div>
          <Main text={"Get Started"} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
