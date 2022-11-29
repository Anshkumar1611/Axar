import React from "react";
import Images from "../../../assets/img";
import ThinLine from "../lines/ThinLine";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, scale:0.8 },
  visible: {
    opacity: 1,
    scale:1,
    transition: {duration:1.5},
  },
};

function TeamCard() {
  return (
    <motion.div className="card w-96 bg-base-100 shadow-xl rounded-none"
    variants={containerVariant}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    >
      <figure className="h-56">
        <LazyLoadImage
          alt={Images.teamHero}
          src={Images.teamMember}
          effect="blur"
        />
      </figure>
      <div className="card-body bg-primary items-center">
        <h2 className="card-title">Name</h2>
        <div className="flex ">
          <ThinLine />
        </div>
        <p>Position</p>
      </div>
    </motion.div>
  );
}

export default TeamCard;
