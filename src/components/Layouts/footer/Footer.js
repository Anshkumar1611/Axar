import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer p-10 text-neutral-content lg:px-28">
        <div>
          <span className="footer-title text-lg opacity-100">AXAR Luxury Homes</span>
          <p className="text-primary hover:scale-110">
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
          <a
            href="/"
            className="link link-hover text-primary hover:text-base-content"
          >
            Home
          </a>
          <a
            href="/"
            className="link link-hover text-primary hover:text-base-content"
          >
            Why Choose Us
          </a>
          <a
            href="/"
            className="link link-hover text-primary hover:text-base-content"
          >
            Services
          </a>
          <a
            href="/"
            className="link link-hover text-primary hover:text-base-content"
          >
            Inclusion
          </a>
        </div>
        <div>
          <span className="footer-title text-lg opacity-100">Help</span>
          <a
            href="/"
            className="link link-hover text-primary hover:text-base-content"
          >
            FAQ
          </a>
          <a
            href="/"
            className="link link-hover text-primary hover:text-base-content"
          >
            Terms & Conditions
          </a>
          <a
            href="/"
            className="link link-hover text-primary hover:text-base-content"
          >
            Privacy
          </a>
        </div>
        <div>
          <span className="footer-title text-lg opacity-100">Team Solutions</span>
          <a
            href="/"
            className="link link-hover text-primary hover:text-base-content"
          >
            Terms of use
          </a>
          <a
            href="/"
            className="link link-hover text-primary hover:text-base-content"
          >
            Privacy policy
          </a>
          <a
            href="/"
            className="link link-hover text-primary hover:text-base-content"
          >
            Cookie policy
          </a>
        </div>
      </footer>
      <div className="flex flex-col gap-4 pb-4 lg:pb-8 lg:flex-row lg:justify-between">

      <p className="px-10 lg:px-28 text-bluish hover:text-primary">© Copyright AXAR Luxury Homes. All Rights Reserved</p>
      <p className="px-10 lg:px-28 text-bluish hover:text-primary">Designed by <span className="text-base-content cursor-pointer"><a href="https://www.seclance.com/" target="_blank"  rel="noopener noreferrer">SecLance</a></span></p>
      </div>
    </div>
  );
}

export default Footer;
