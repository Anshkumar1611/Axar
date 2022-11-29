import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },

};
function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <motion.div
      className="p-4 fixed right-0 bottom-[20px] z-10 h-20 text-4xl cursor-pointer text-yellow  rounded-full "
      //   style={ballStyle}
      transition={bounceTransition}
      whileInView={{
        y: ["5%", "-5%"],
      }}
    >
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{
          display: visible ? "flex" : "none",
        }}
      />
    </motion.div>
  );
}

export default ScrollButton;
