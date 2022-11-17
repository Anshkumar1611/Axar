import React from "react";
import Title from "../../common/Title";
import SubTitle from "../../common/SubTitle";
import Images from "../../../assets/img";
import WhyUs from "../../carousels/WhyUs/WhyUs";
// import WhyUs from "../carousels/WhyUs/WhyUs";

function WhyUsSection() {
  return (
    <div className="lg:h-screen bg-base-200 ">
      <div className="h-full flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-4 px-4 lg:px-28">
          <div>
            <Title text={"why us"} />
          </div>
          <div>
            <SubTitle text={"Why Choose Us"} />
          </div>
        </div>
        <div className="flex flex-col lg:h-5/6 lg:flex-row ">
          <div className=" lg:w-5/12 h-full">
            <img src={Images.hero2} alt={Images.hero5} className='h-full'/>
          </div>
          <div className="lg:w-7/12 h-full pt-8 bg-base-100">
            <WhyUs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
