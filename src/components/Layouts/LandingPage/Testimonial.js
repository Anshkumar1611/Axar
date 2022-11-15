import React from "react";
import TestimonialCarousel from "../../carousels/Testimonial/TestimonialCarousel";
import SubTitle from "../../common/SubTitle";
import Title from "../../common/Title";

function Testimonial() {
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col gap-4 px-4 lg:px-28">
          <div>
            <Title text={"Testimonials"} />
          </div>
          <div>
            <SubTitle text={"What People Have to Say"} />
          </div>
        </div>
      </div>  
      <div className="py-14">
        <TestimonialCarousel />
      </div>
    </div>
  );
}

export default Testimonial;
