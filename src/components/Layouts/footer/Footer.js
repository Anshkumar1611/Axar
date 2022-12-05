import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const imageVariant = {
  visible: {
    transition: { duration: 1 },
  },
};

const data = [
  {
    icon: <BsFacebook />,
    url: "https://www.facebook.com/people/AXAR-Luxury-Homes/100063701645059/",
  },
  {
    icon: <BsYoutube />,
    url: "https://www.youtube.com/channel/UCoDq--yY3AmLAWuQM44aPEg",
  },
  {
    icon: <BsInstagram />,
    url: "https://www.instagram.com/axar.homes/",
  },
];

const usefulLinks = [
  { path: "/", name: "Home" },
  { path: "/whyUs", name: "Why Choose Us" },
  { path: "/services", name: "Services" },
  { path: "/inclusion", name: "Inclusion" },
];

const helpLinks = [
  { path: "/faq", name: "Faq" },
  { path: "/terms&conditions", name: "Terms & Conditions" },
  { path: "/privacy", name: "Privacy" },
];

function Footer() {
  return (
    <div className="border-t-2">
      <footer className="footer p-10 text-neutral-content lg:px-28">
        <div>
          <span className="footer-title text-lg opacity-100">
            AXAR Luxury Homes
          </span>
          <p className="text-primary ">
            AXAR Luxury Homes is a custom home
            <br />
            design and build firm that specializes in
            <br />
            creating unique, customized homes in
            <br />
            South-East Queensland, Australia.
          </p>
        </div>
        <div>
          <span className="footer-title text-lg opacity-100">Useful Links</span>
          {usefulLinks.map((item, index) => {
            return (
              <Link
                to={item.path}
                className="link link-hover text-primary hover:text-base-content"
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div>
          <span className="footer-title text-lg opacity-100">Help</span>
          {helpLinks.map((item, index) => {
            return (
              <Link
                to={item.path}
                className="link link-hover text-primary hover:text-base-content"
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div>
          <span className="footer-title text-lg opacity-100">
            Team Solutions
          </span>
          <div className="flex flex-row gap-4">
            {data.map((item, index) => {
              return (
                <motion.div
                  className="flex justify-center items-center w-12 h-12 text-white border-2 rounded-full hover:bg-yellow hover:text-white text-2xl"
                  key={index}
                  variants={imageVariant}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ rotate: [0, 360, 0] }}
                  viewport={{ once: true }}
                >
                  <a href={item.url} target="blank">
                    {item.icon}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </footer>
      <div className="flex flex-col gap-4 pb-4 lg:pb-8 lg:flex-row lg:justify-between">
        <p className="px-10 lg:px-28 text-bluish hover:text-primary">
          © Copyright AXAR Luxury Homes. All Rights Reserved
        </p>
        <p className="px-10 lg:px-28 text-bluish hover:text-primary">
          Designed by{" "}
          <span className="text-base-content cursor-pointer">
            <a
              href="https://www.seclance.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SecLance
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
