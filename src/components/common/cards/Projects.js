import React from "react";
import Images from "../../../assets/img";
import { BiBuildingHouse } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const textVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const data = [
  {
    name: "Metro",
    location: "Gurgaon",
    cost: "50 cr",
    photo: `${Images.hero1}`,
  },
  {
    name: "High Tower",
    location: "Delhi",
    cost: "120 cr",
    photo: `${Images.hero4}`,
  },
  {
    name: "Radhe-Krishna Dham",
    location: "Mathura",
    cost: "50 lakhs",
    photo: `${Images.hero5}`,
  },
  {
    name: "Govardhan",
    location: "Govardhan",
    cost: "not scalable",
    photo: `${Images.hero4}`,
  },
  {
    name: "Kailash Parvat",
    location: "Mount Kailash",
    cost: "infinity",
    photo: `${Images.hero3}`,
  },
  {
    name: "Colony  of Gokul",
    location: "Gokul",
    cost: "1 cr",
    photo: `${Images.hero2}`,
  },
];

function Projects() {
  return data.map((item) => {
    return (
      <div className="">
        <div className="relative h-80 w-96">
          <motion.div
            className="opacity-100 h-full w-full"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <LazyLoadImage
              alt="Images"
              src={item.photo}
              effect="blur"
              className="bg-cover bg-center h-full w-full "
            />
          </motion.div>
          <motion.div
            className="opacity-100 absolute inset-x-0 bottom-0  backdrop-opacity-40 hover:backdrop-opacity-50 backdrop-invert cursor-pointer"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-between px-5 py-5">
              <div className="font-semibold text-white  flex flex-col">
                <p>{item.name}</p>
                <p>Location : {item.location}</p>
                <p>Cost : {item.cost}</p>
              </div>
              <div className="text-5xl py-5 text-white">
                <BiBuildingHouse />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  });
}

export default Projects;
