import React from "react";
import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import WhyUsSection from "../components/common/whyUsDiv/WhyUsSection";

function WhyUs() {
  return (
    <div className="py-14 bg-base-100">
      <div className="flex flex-col gap-4 px-4 lg:px-28">
        <div>
          <Title text={"Why Us"} />
        </div>
        <div>
          <SubTitle text={"Why Choose Us"} />
        </div>
      </div>
      <div className="mx-4 my-14 lg:mx-28 lg:my-14 ">
        <p className="text-white mb-14">
          "When choosing a contractor to help you in building your dream home,
          constructing your business location, or remodeling your existing home,
          there are a plethora of different qualities to consider as you weigh
          the pros and cons. To make the process easier for you, we reached out
          to our previous customers, our tenants, and members of the community
          and asked them what qualities of our operation lead them to want to do
          business with us"
        </p>
        <WhyUsSection />
      </div>
    </div>
  );
}

export default WhyUs;
