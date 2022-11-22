import React from "react";
import Projects from "../../common/cards/Projects";
import SubTitle from "../../common/SubTitle";
import Title from "../../common/Title";

function OurProjects() {
  return (
    <div className="londa" style={{backgroundImage: "url(../../../assets/img/hero-image.jpg)"}}>
      <div className="py-14">
        <div className="flex flex-col gap-4 px-4 lg:px-28 ">
          <div>
            <Title text={"Projects"} />
          </div>
          <div>
            <SubTitle text={"Our Key Projects"} />
          </div>
        </div>
        <div className=" py-14 lg:px-28 ">
          <div className="flex flex-col justify-center items-center  gap-8 md:flex-row md:flex-wrap">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
