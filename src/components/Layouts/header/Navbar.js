import React from "react";
import { Link } from "react-router-dom";
import Rounded from "../../common/buttons/Rounded";
import { FaMobileAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { x: -100 },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};

const buttonVariant = {
  hidden: { x: 100 },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};
const titleVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
};

// bg-opacity-30 backdrop-filter backdrop-blur-lg
function Navbar() {
  return (
    <>
      <motion.div
        className="px-2 lg:px-28 pt-4 flex flex-row gap-4 items-center"
        variants={textVariant}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <a
          href="tel:+61433216461"
          className="flex flex-row justify-center items-center gap-2  cursor-pointer hover:text-info"
        >
          <FaMobileAlt />
          +61 433 216 461
        </a>
        <a
          href='mailto:info@axarhomes.com.au'
          className="flex flex-row justify-center items-center gap-2 cursor-pointer hover:text-info"
        >
          <GoMail />
          info@axarhomes.com.au
        </a>
      </motion.div>

      <div className="px-0 py-1 -mt-1  lg:px-28 sticky top-0 z-50 border-b border-gray bg-base-100 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="lg:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-primary bg-base-100"
              >
                <li>
                  <Link to="/" className="bg-base-100 hover:text-base-content">
                    Home
                  </Link>
                </li>
                <li tabIndex={0}>
                  <Link
                    to="/"
                    className="bg-base-100 justify-between hover:text-base-content"
                  >
                    About Us
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <Link
                        to="/about/journey"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Journey
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about/team"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about/testimonial"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/whyUs"
                    className="bg-base-100 hover:text-base-content"
                  >
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="bg-base-100 hover:text-base-content"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inclusion"
                    className="bg-base-100 hover:text-base-content"
                  >
                    Inclusion
                  </Link>
                </li>
                <li tabIndex={0}>
                  <a
                    href="/"
                    className="bg-base-100 justify-between hover:text-base-content"
                  >
                    Gallery
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <Link
                        to="/gallery/images"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Images
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery/videos"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Videos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery/designs"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Designs
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <motion.a
              variants={titleVariant}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              href="/"
              className="normal-case text-xl text-primary ml-4 lg:ml-0 lg:text-2xl"
            >
              AXAR LUXURY HOMES
            </motion.a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-primary ">
              <li>
                <Link to="/" className="bg-opacity-0 hover:text-base-content">
                  Home
                </Link>
              </li>
              <li tabIndex={0}>
                <Link
                  to="/"
                  className="justify-between hover:text-base-content bg-opacity-0"
                >
                  About Us
                  <svg
                    className="fill-current hover:text-base-content"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link
                      to="/about/journey"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Journey
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/team"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/testimonial"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/whyUs"
                  className="bg-opacity-0 hover:text-base-content "
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="bg-opacity-0 hover:text-base-content"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/inclusion"
                  className="bg-opacity-0 hover:text-base-content"
                >
                  Inclusion
                </Link>
              </li>
              <li tabIndex={0}>
                <Link
                  to="/"
                  className="bg-opacity-0 justify-between hover:text-base-content"
                >
                  Gallery
                  <svg
                    className="fill-current hover:text-base-content"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="p-2  bg-base-100 ">
                  <li>
                    <Link
                      to="/gallery/images"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Images
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery/videos"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Videos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery/designs"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Designs
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <motion.div
            className="navbar-end "
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <Link to="./contact">
              <Rounded text={"contact us"} />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
