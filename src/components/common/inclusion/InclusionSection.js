import React from "react";
import Images from "../../../assets/img";
import SecondaryTitle from "../text/SecondaryTitle";
import Photo from "../whyUsDiv/photoDiv/Photo";
import InclusionText from "./InclusionText";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity:  1,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

const data = [
  {
    id: 1,
    image: Images.inclusion1,
    secondaryTitle: "Pre-Construction",
  },
  {
    id: 2,
    image: Images.inclusion2,
    secondaryTitle: "Structural Features",
  },
  {
    id: 3,
    image: Images.inclusion3,
    secondaryTitle: "Kitchen",
  },
  {
    id: 4,
    image: Images.inclusion4,
    secondaryTitle: "Appliances",
  },
  {
    id: 5,
    image: Images.inclusion5,
    secondaryTitle: "Energy Efficiency Features",
  },
  {
    id: 6,
    image: Images.inclusion6,
    secondaryTitle: "External Features ",
  },
  {
    id: 7,
    image: Images.inclusion7,
    secondaryTitle: "Wall & Floor Covering ",
  },
  {
    id: 8,
    image: Images.inclusion8,
    secondaryTitle: "Electrical",
  },
  {
    id: 9,
    image: Images.inclusion9,
    secondaryTitle: "Laundry",
  },
  {
    id: 10,
    image: Images.inclusion10,
    secondaryTitle: "Internal Features ",
  },
  {
    id: 11,
    image: Images.inclusion11,
    secondaryTitle: "Staircase (Double Storey)  ",
  },
];
const text = [
  "Concept Design",
  "Full set of working drawings.",
  "Soil Investigation and Wind Classification Reports",
  "Structural Engineering Designs and Drawings",
  "Energy report and Certification as per current Building Standards",
  "All insurances are covered including QBCC, Qleave & construction insurances.",
  "Temporary toilets and temporary site fencing.",
  "Skip bin for construction waste.",
  "Council application for the Plumbing approval, inspections, and relevant fees.",
  "Council application for Building Permit including the required fees.",
];
function InclusionSection() {
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row mb-4 drop-shadow-2xl gap-4 lg:odd:flex-row-reverse"
          >
            <div className="flex-1">
              <Photo url={item.image} />
            </div>
            <motion.div
              className="flex-1 flex flex-col justify-center gap-4"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <SecondaryTitle title={item.secondaryTitle} />
              </div>
              <div>
                {text.map((text, index) => {
                  return (
                    <div key={index}>
                      <InclusionText text={text} />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default InclusionSection;
