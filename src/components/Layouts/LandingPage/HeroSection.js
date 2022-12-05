import React from "react";
import ThickLine from "../../common/lines/ThickLine";
import Normal from "../../common/buttons/Normal";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1, when: "beforeChildren" },
  },
};
const textVariant = {
  visible: {
    y: 0,
    transition: {
      delay: 1,
      duration: 1.5,
      type: "spring",
    },
  },
};

const scrollBottom = () => {
  const element = document.getElementById("about");
  const offset = 230;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;
  window.scrollTo({
    behavior: "smooth",
    top: offsetPosition,
    duration: 5000,
  });
};

function HeroSection({ scrollRef }) {
  return (
    <div className="flex justify-center items-center ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-6 p-6 w-4/6 lg:w-2/6 lg:h-96 backdrop-opacity-20 backdrop-invert"
      >
        <div>
          <motion.p
            className="text-primary font-Playfair font-bold text-3xl lg:text-5xl text-center"
            variants={textVariant}
            initial={{ y: -450 }}
            animate="visible"
          >
            Welcome to AXAR Luxury Homes
          </motion.p>
        </div>
        <div>
          <ThickLine />
        </div>
        <motion.div
          className="text-primary"
          variants={textVariant}
          initial={{ y: 750 }}
          animate="visible"
        >
          <p className="text-center font-sans font-semibold text-lg">
            AXAR Luxury Homes is a custom home design and build firm that
            specializes in creating unique, customized homes in South-East
            Queensland, Australia.
          </p>
        </motion.div>
        <div>
          <Normal
            text={"Get Started"}
            scrollBottom={scrollBottom}
            scrollRef={scrollRef}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
