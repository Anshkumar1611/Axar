import React from "react";
import Images from "../assets/img";
import SubTitle from "../components/common/SubTitle";
import Title from "../components/common/Title";
import ContactUs from "../components/common/cards/ContactUs";
import ContactForm from "../components/Forms/ContactForm";
import ThickLine from "../components/common/lines/ThickLine";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: { duration: 1 },
  },
};

function Contact() {
  return (
    <div className="bg-neutral-focus">
      <div
        style={{
          backgroundImage: `url(${Images.contactUs})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-80"
      ></div>
      <div className="py-4 lg:py-14">
        <div className="flex flex-col gap-4 px-4 py-8 lg:px-28 lg:py-0">
          <div>
            <Title text={"Contact"} />
          </div>
          <div>
            <SubTitle text={"Contact Us"} />
          </div>
          <ThickLine />
        </div>

        <motion.div
          className="flex flex-col gap-8 p-4 pt-4 lg:py-10 pb-10 lg:px-28  lg:flex-row"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <ContactUs />
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
