import React from "react";
import SubTitle from "../components/common/SubTitle";
import WhyUsSection from "../components/common/whyUsDiv/WhyUsSection";
import ThickLine from "../components/common/lines/ThickLine";
import Images from "../assets/img";
import Hero from "../components/common/Hero";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: { duration: 1 },
  },
};

function WhyUs() {
  return (
    <div className="bg-neutral-focus">
      <Hero
        homeImage={Images.whyUs2}
        image={Images.whyUs3}
        title={"Why Us"}
        subTitle={"Why Choose Us"}
        description1={
          "When choosing a contractor to help you in building your dream home, constructing your business location, or remodeling your existing home, there are a plethora of different qualities to consider as you weigh the pros and cons."
        }
        description2={
          "To make the process easier for you, we reached out to our previous customers, our tenants, and members of the community and asked them what qualities of our operation lead them to want to do business with us"
        }
      />

      <div className="px-4 py-14 lg:px-28 lg:py-14 ">
        <div className="flex flex-col gap-6">
          <SubTitle text={"Reasons for Choosing Us"} />
          <ThickLine />
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <WhyUsSection />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
