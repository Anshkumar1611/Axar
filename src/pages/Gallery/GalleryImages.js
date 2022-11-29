import React from "react";
import Images from "../../assets/img";
import Hero from "../../components/common/Hero";
import ThickLine from "../../components/common/lines/ThickLine";
import SubTitle from "../../components/common/SubTitle";
import HouseImages from "./galleryComponents/HouseImages";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: { duration: 1 },
  },
};

function GalleryImages() {
  return (
    <div className="bg-neutral-focus">
      <Hero
        homeImage={Images.galleryImage}
        image={Images.galleryImageMain}
        title={"Images"}
        subTitle={"Images"}
        description1={
          "There are four key features of inclusion which can be used to set expectations and evaluate inclusive practice in schools and early learning and childcare settings. These are present, participating, achieving and supported."
        }
        description2={
          "Contractors often need to make quick decisions or come up with creative solutions. Having a diverse group of individuals can bring up different perspectives that may lead to faster resolutions. This innovation can help employers outperform other companies."
        }
      />
      <div>
        <div className="px-4 py-14 lg:px-28 lg:py-14 ">
          <div className="flex flex-col gap-6">
            <SubTitle text={"Gallery Images"} />
            <ThickLine />
            <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
              <HouseImages />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryImages;
