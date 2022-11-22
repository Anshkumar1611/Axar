import React from "react";
import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import WhyUsSection from "../components/common/whyUsDiv/WhyUsSection";
import ThickLine from "../components/common/lines/ThickLine";
import Images from "../assets/img";

function WhyUs() {
  return (
    <>
      <div className="w-full lg:h-80">
        <img
          src={Images.whyUs2}
          alt="why us"
          className="w-full h-full"
        />
      </div>
      <div className="pb-14 bg-base-100">
        <div className="flex flex-col gap-4 bg-white px-4 lg:px-28 py-14">
          <div className="flex flex-col gap-4 ">
            <div>
              <Title text={"Why Us"} />
            </div>
            <div>
              <SubTitle text={"Why Choose Us"} />
            </div>
          </div>
          <div className="flex md:gap-10 ">
            <div className="basis-2/3">
              <ThickLine />
              <p className="text-black pt-4">
                "When choosing a contractor to help you in building your dream
                home, constructing your business location, or remodeling your
                existing home, there are a plethora of different qualities to
                consider as you weigh the pros and cons.
                <br />
                <br /> To make the process easier for you, we reached out to our
                previous customers, our tenants, and members of the community
                and asked them what qualities of our operation lead them to want
                to do business with us"
              </p>
            </div>
            <div className="flex-1 ">
              <img src={Images.whyUs3} alt="why us" className="rounded-full" />
            </div>
          </div>
        </div>

        <div className="mx-4 my-14 lg:mx-28 lg:my-14 ">
          <div className="flex flex-col gap-6">
            <SubTitle text={"Reasons for Choosing Us"} />
            <ThickLine />
            <WhyUsSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
