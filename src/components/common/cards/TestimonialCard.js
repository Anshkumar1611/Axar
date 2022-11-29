import React from "react";
import ThickLine from "../lines/ThickLine";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

function TestimonialCard({ item }) {
  return (
    <motion.div
      className="bg-white p-4 lg:p-20 flex flex-col gap-4 mx-4 lg:mx-64"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="">
        <img
          src={item.logo}
          alt="testimonial"
          className="w-20 h-20 float-left mr-4 mb-4"
        />
        <p className="text-black">{item.views}</p>
      </div>

      <ThickLine />
      <div className="flex flex-col gap-2 text-black italic">
        <p>{item.name}</p>
        <p>{item.designation}</p>
        <p>{item.address}</p>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
