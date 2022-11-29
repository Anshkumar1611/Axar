import React from "react";
import ThinLine from "./lines/ThinLine";
import { motion } from "framer-motion";

const lineVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: {  duration: 0.5 } },
};

function Title({ text }) {
  return (
    <div className="flex flex-row gap-4">
      <p className="uppercase text-title font-poppins tracking-widest font-medium text-sm">
        {text}
      </p>
      <motion.div
        className="flex justify-center items-center"
        variants={lineVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ThinLine />
      </motion.div>
    </div>
  );
}

export default Title;
