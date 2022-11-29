import React from "react";
import Images from "../../assets/img";
import SubTitle from "../../components/common/SubTitle";
import Title from "../../components/common/Title";
import AxarCard from "../../components/common/cards/AxarCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const imageVariant = {
  hidden: { x: 200 },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};
const textVariant = {
  hidden: { x: -200 },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};

function Journey() {
  return (
    <div className="bg-neutral-focus">
      {/* <div
        style={{
          backgroundImage: `url(${Images.inclusionHome})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-80"
      ></div> */}
      <div className="py-4 lg:py-14">
        <div className="flex flex-col gap-4 px-4 py-8 lg:px-28 lg:py-0">
          <div>
            <Title text={"About us"} />
          </div>
          <div>
            <SubTitle text={"Journey"} />
          </div>
        </div>
        <motion.div
          className="lg:px-28 lg:py-4 flex flex-col items-center lg:flex-row lg:justify-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="bg-journey w-full lg:w-[600px] ">
            <motion.div
              className="flex flex-col gap-4 p-8 text-black lg:p-10"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="uppercase font-Playfair text-lg font-medium leading-tight">
                EST 1997
              </p>
              <p className="font-Playfair text-4xl font-bold leading-tight">
                Our Story
              </p>
              <p className="font-sans tracking-wider text-justify pr-4">
                This passion, perhaps, runs in my genes. My late grandfather
                used to build houses in our ancestral village in India. He
                specialised in Two storey hardwood wooden frame houses.
                <br />
                <br />
                In the year 1997, my elder brother late Bharatsinh Parmar
                established AKSHAR CONSTRUCTIONS in Ahmedabad, India. He was a
                fanatical civil engineer and undertook numerous residential
                projects including multi storey apartment blocks in India. The
                company was doing really well until that unfortunate day when he
                met with a fatal accident and we lost him.
              </p>
            </motion.div>
          </motion.div>
          <div className="lg:-mt-20">
            <LazyLoadImage
              alt="Hero"
              src={Images.home}
              effect="blur"
              className="w-[800px] h-[600px]"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col py-14 lg:px-28 lg:py-20 lg:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ when: "beforeChildren" }}
        >
          <motion.div
            className="flex justify-center "
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AxarCard />
          </motion.div>
          <motion.div
            className="flex justify-center items-center p-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-justify text-white font-Playfair">
              AXAR LUXURY HOMES is an extension of my brother’s dream, it’s my
              tribute to my late brother. He was the one who inspired me to be a
              civil engineer. While he was building the apartment buildings in
              India, I used to accompany him on his site visits as a young
              curious boy. I learnt the fine details of this trade firsthand
              from him. Following his footsteps, I studied Diploma of civil
              engineering from Government Polytechnic, Ahmedabad.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:px-28 lg:py-20 lg:flex-row-reverse"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ when: "beforeChildren" }}
        >
          <motion.div
            className="flex justify-center "
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AxarCard />
          </motion.div>
          <div className="flex justify-center items-center p-4">
            <motion.p
              className="text-justify text-white font-Playfair"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              And then subsequently Bachelor of Civil Engineering from Gujarat’s
              most reputed L D Engineering Institute Ahmedabad. I passed my
              Engineering with flying colours and achieved 7 gold medals. My
              passion for Civil Engineering persisted as I completed my Masters
              from University of South Australia. I continued to grow
              professionally as I gained valuable major infrastructure projects
              experience since last 15 years. Currently I am a registered
              chartered civil engineer. This is my little story. DREAMS DO COME
              TRUE. Building your dream home and helping you bring your dreams
              to reality is my passion.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Journey;
