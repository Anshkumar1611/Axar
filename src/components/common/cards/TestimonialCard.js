import React from "react";
import ThickLine from "../lines/ThickLine";

function TestimonialCard({item}) {
  return (
    <div className="bg-white p-4 lg:p-20 flex flex-col gap-4 mx-4 lg:mx-64">
      <div className="">
        <img
          src={item.logo}
          alt="testimonial"
          className="w-20 h-20 float-left mr-4 mb-4"
        />
        <p className="text-black">
          {item.views}
        </p>
      </div>

      <ThickLine />
      <div className="flex flex-col gap-2 text-black italic">
        <p>{item.name}</p>
        <p>{item.designation}</p>
        <p>{item.address}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
