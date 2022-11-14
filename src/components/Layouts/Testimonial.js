import React from "react";
import TestimonialCarousel from "../carousels/Testimonial/TestimonialCarousel";

function Testimonial() {
  return (
    <div className="h-screen">
      <div className="lg:h-2/6"></div>
      <div className=" lg:h-4/6">
        <TestimonialCarousel />
      </div>
    </div>
  );
}

export default Testimonial;
