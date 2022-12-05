import React from "react";
import Images from "../../../assets/img";
import SubTitle from "../../common/SubTitle";
import Title from "../../common/Title";
import Rectangular from "../../common/buttons/Rectangular";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: { delay: 0.5, duration: 0.5 },
  },
};

const textVariant = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: { delay: 0.5, duration: 0.5 },
  },
};

function WhatWeDo() {
  return (
    <div className="py-14">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 px-4 lg:px-28">
          <div>
            <Title text={"Services"} />
          </div>
          <div>
            <SubTitle text={"What We Do"} />
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4 lg:gap-10 lg:flex-row lg:px-28">
          <motion.div
            className="w-full h-full lg:w-1/2"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <LazyLoadImage
              alt={Images.hero5}
              src={Images.hero4}
              effect="blur"
              className="border-8 border-white"
            />
          </motion.div>
          <motion.div
            className="w-full h-full lg:w-1/2 flex flex-col gap-4 "
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-white px-10">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute
              <br />
              irure dolor in reprehenderit in voluptate velit Ullamco laboris
              <br />
              nisi ut aliquip ex ea commodo consequat
              <br />
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <Rectangular text={"Learn More"} path={"/services"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
