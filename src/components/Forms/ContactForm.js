import React, { useEffect, useState } from "react";
import Normal from "../common/buttons/Normal";
import { motion } from "framer-motion";
import RenderAlert from "./RenderAlert";
import emailjs from '@emailjs/browser';

const buttonVariant = {
  hidden: { x: -100 },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};

const labelVariant = {
  hidden: { x: 100 },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};

function ContactForm() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_3pciq1g', 'template_oaxm8xv',values,'VBBXPf8H8n1FEXT4H')
    .then(response=>{
      console.log('SUCCESS!',response);
    setValues({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
    setStatus("SUCCESS");
    },error=>{
      console.log('FAILED...',error);
    })
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="p-8 bg-white flex flex-col gap-8  border-t-4 border-b-4 border-yellow">
      <form onSubmit={handleSubmit}>
        {status && <RenderAlert />}
        <div className="flex flex-col gap-14 lg:flex-row justify-between">
          <div className="flex flex-col w-full h-full">
            <motion.label
              htmlFor="name"
              className="text-black mb-3 font-semibold"
              variants={labelVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Your Name
            </motion.label>
            <input
              type="text"
              placeholder="Name"
              name="fullName"
              value={values.fullName}
              required
              onChange={handleChange}
              className="input w-full lg:mb-8"
            />
          </div>
          <div className="flex flex-col w-full h-full">
            <motion.label
              htmlFor="name"
              className="text-black mb-3 -mt-3 lg:mt-0 font-semibold"
              variants={labelVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Your Email
            </motion.label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              required
              onChange={handleChange}
              className="input w-full mb-8"
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          <motion.label
            htmlFor="name"
            className="text-black mb-3 font-semibold"
            variants={labelVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Subject
          </motion.label>
          <input
            type="text"
            name="subject"
            value={values.subject}
            required
            placeholder="subject"
            onChange={handleChange}
            className="input w-full mb-8"
          />
        </div>
        <div className="flex flex-col">
          <motion.label
            htmlFor="name"
            className="text-black mb-3 font-semibold"
            variants={labelVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Message
          </motion.label>
          <textarea
            className="textarea min-h-[9rem] mb-8"
            name="message"
            placeholder="Message"
            required
            value={values.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <motion.div
          className="pb-20 flex justify-center"
          variants={buttonVariant}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: [1.1, 1, 1.1, 1, 1.1, 1] }}
          viewport={{ once: true }}
        >
          <Normal text={"Send Message"} type={"submit"} />
        </motion.div>
      </form>
    </div>
  );
}

export default ContactForm;
