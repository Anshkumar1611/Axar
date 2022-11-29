import React from "react";
import SubTitle from "../components/common/SubTitle";
import Photo from "../components/common/whyUsDiv/photoDiv/Photo";
import Images from "../assets/img";
import ThickLine from "../components/common/lines/ThickLine";
import Hero from "../components/common/Hero";
import TextSection from "../components/common/services/TextSection";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Services() {
  return (
    <div className="bg-neutral-focus">
      <Hero
        homeImage={Images.service}
        image={Images.serviceMain}
        title={"Services"}
        subTitle={"Our Services"}
        description1={
          "We offer our clients direct access to a team of highly qualified and experienced specialists offering consultancy services in preliminary work, building design, construction management as well as construction supervision and maintenance work. AXAR has served as engineering consultant on almost every type of building project including, domestic housing, schools, hotels, sports centers, offices, factories, hospitals and health centers."
        }
        description2={
          " From preliminary or structural designs for buildings and other structures, to the design of HVAC, electrical and control systems, to developing fire safety plans and designing diverse acoustical solutions, specialists at AXAR have the knowledge to solve project challenges of any size."
        }
      />
      <div className="px-4 py-14 lg:px-28 flex flex-col gap-6">
        <SubTitle text={"Services We Offer"} />
        <ThickLine />
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8">
          <div className="basis-1/2">
            <Photo url={`${Images.service2}`} />
          </div>
          <motion.div
            className="basis-1/2 flex flex-col gap-2 "
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TextSection
              title={"Custom Homes"}
              description={
                "Work with our designer or bring us your plans and we’ll build your dream home. We’ll build on your land or we can help you find that perfect lot."
              }
            />
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse p-4 gap-0 lg:gap-8">
          <div className="basis-1/2 lg:-mt-20">
            <Photo url={`${Images.service1}`} />
          </div>
          <motion.div
            className="basis-1/2 flex flex-col gap-2 "
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TextSection
              title={"Semi-Custom Homes"}
              description={
                "Not quite ready for a completely custom home? Don’t have the time on your hands to invest in a fully custom home? You can start with one of our plans and modify it to your needs. Our lot or yours!"
              }
            />
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row p-4 gap-0 lg:gap-8">
          <div className="basis-1/2 lg:-mt-20">
            <Photo url={`${Images.service3}`} />
          </div>
          <motion.div
            className="basis-1/2 flex flex-col gap-2 "
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TextSection
              title={"Lot Purchase Assistance"}
              description={
                "If you are looking for that perfect lot we may be able to help. We are very knowledgeable about available lots including variables such as water and sewer fees, building permit fees and soils conditions. These are all important factors to consider when buying a lot to build on."
              }
            />
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse p-4 gap-0 lg:gap-8">
          <div className="basis-1/2 lg:-mt-20">
            <Photo url={`${Images.service4}`} />
          </div>
          <motion.div
            className="basis-1/2 flex flex-col gap-2 "
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TextSection
              title={"Financing"}
              description={
                "AXAR Luxury Homes works with several banks and mortgage lenders. There are many financing programs available from these lenders including lot loans, construction loans, and construction to permanent loans. We would be happy to refer you to lenders that would best fit your situation."
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
