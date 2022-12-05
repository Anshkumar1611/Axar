import React from "react";
import { TfiEmail,TfiLocationPin } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 1 },
  },
};
const data = [
  {
    icon: <TfiLocationPin />,
    title: "Location:",
    subTitle: "11 PLUM PL, ROCHEDALE,QLD 4123",
  },
  {
    icon: <TfiEmail />,
    title: "Email:",
    subTitle: "info@axarhomes.com.au",
  },
  {
    icon: <BsPhone />,
    title: "Call",
    subTitle: "+61433216461",
  },
];
function ContactUs() {
  return (
    <div className="p-8 bg-white flex flex-col gap-14  border-t-4 border-b-4 border-yellow">
      <div className="flex flex-col gap-10 justify-center">
        {data.map((item, index) => {
          return (
            <div className="flex flex-row gap-6 " key={index}>
              <motion.div
                className="flex justify-center items-center w-12 h-12 bg-[#e7f5fb] rounded-full hover:bg-yellow hover:text-white text-2xl"
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                whileHover={{rotate:[0,360,0],scale:[1,1.2,1]}}
                viewport={{ once: true }}
              >
                {item.icon}
              </motion.div>
              <div className="flex flex-col gap2">
                <p className="font-semibold text-xl text-[#37517e] font-poppins">
                  {item.title}
                </p>
                <p className="font-sans text-[#6182ba] text-sm">
                  {item.subTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="md:w-full lg:w-96 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56588.551388946755!2d153.119612!3d-27.569199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915cad43bb2973%3A0xc48452a87add2221!2s11%20Plum%20Pl%2C%20Rochedale%20QLD%204123%2C%20Australia!5e0!3m2!1sen!2sus!4v1669366442461!5m2!1sen!2sus"
            width="100%"
            height="290px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
