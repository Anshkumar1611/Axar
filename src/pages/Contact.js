import React from "react";
import Images from "../assets/img";
import SubTitle from "../components/common/SubTitle";
import Title from "../components/common/Title";

function Contact() {
  return (
    <div>
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
        </div>
        <div></div>
        <form></form>
      </div>
    </div>
  );
}

export default Contact;
