import React from "react";
import Title from "../../common/Title";
import SubTitle from "../../common/SubTitle";
import Images from "../../../assets/img";
import WhyUs from "../../carousels/WhyUs/WhyUs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};
const carouselVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};
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
          <motion.div
            className=" lg:w-5/12 h-full"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <LazyLoadImage
              alt={Images.hero5}
              src={Images.hero2}
              className="h-full"
            />
          </motion.div>
          <motion.div className="lg:w-7/12 h-full pt-8 bg-base-100"
          variants={carouselVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
            <WhyUs />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
