import React from "react";
import { Link } from "react-router-dom";
import Rounded from "../../common/buttons/Rounded";
import { FaMobileAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

// bg-opacity-30 backdrop-filter backdrop-blur-lg
function Navbar() {
  return (
    <>
      <div className="px-2 lg:px-28 pt-4 flex flex-row gap-4 items-center">
        <p className="flex flex-row justify-center items-center gap-2  cursor-pointer hover:text-info">
          <FaMobileAlt />
          +61 433 216 461
        </p>
        <p className="flex flex-row justify-center items-center gap-2 cursor-pointer hover:text-info">
          <GoMail />
          info@axarhomes.com.au
        </p>
      </div>

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
                  <a href="/" className="bg-base-100 hover:text-base-content">
                    Home
                  </a>
                </li>
                <li tabIndex={0}>
                  <a
                    href="/"
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
                  </a>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a
                        href="/"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Journey
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/" className="bg-base-100 hover:text-base-content">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="/" className="bg-base-100 hover:text-base-content">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/" className="bg-base-100 hover:text-base-content">
                    Inclusion
                  </a>
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
                      <a
                        href="/"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Images
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Videos
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="bg-base-100 hover:text-base-content"
                      >
                        Designs
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <a
              href="/"
              className="normal-case text-xl text-primary ml-4 lg:ml-0 lg:text-2xl"
            >
              AXAR LUXURY HOMES
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-primary ">
              <li>
                <a href="/" className="bg-opacity-0 hover:text-base-content">
                  Home
                </a>
              </li>
              <li tabIndex={0}>
                <a
                  href="/"
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
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a
                      href="/"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Journey
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/" className="bg-opacity-0 hover:text-base-content ">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="/" className="bg-opacity-0 hover:text-base-content">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="bg-opacity-0 hover:text-base-content">
                  Inclusion
                </a>
              </li>
              <li tabIndex={0}>
                <a
                  href="/"
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
                </a>
                <ul className="p-2  bg-base-100 ">
                  <li>
                    <a
                      href="/"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Images
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="bg-opacity-0 hover:text-base-content"
                    >
                      Designs
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-end ">
            <Link to="./contact">
              <Rounded text={"contact us"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
