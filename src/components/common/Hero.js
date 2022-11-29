import React from "react";
import ThickLine from "./lines/ThickLine";
import SubTitle from "./SubTitle";
import Title from "./Title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const headerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, when: "beforeChildren" },
  },
};

const lineVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};
const imageVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Hero({
  homeImage,
  title,
  subTitle,
  description1,
  description2,
  image,
}) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-80"
      ></div>
      <div className=" px-4 lg:px-28 bg-white py-14">
        <motion.div
          className="flex flex-col gap-4 "
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <Title text={title} />
          </div>
          <div>
            <SubTitle text={subTitle} />
          </div>
        </motion.div>
        <div className="flex md:gap-10 pt-4">
          <div className="basis-2/3">
            <motion.div
              variants={lineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ThickLine />
            </motion.div>
            <motion.p
              className="text-black pt-4 "
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              "{description1}"
              <br />
              <br /> {description2}
            </motion.p>
          </div>
          <motion.div
            className="flex-1 lg:-mt-20"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            whileHover={{ rotate: [0, 360]}}
            viewport={{ once: true }}
          >
            <LazyLoadImage
              alt="testimonial"
              src={image}
              effect="blur"
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
