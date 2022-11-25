import React from "react";
import ThickLine from "./lines/ThickLine";
import SubTitle from "./SubTitle";
import Title from "./Title";

function Hero({
  homeImage,
  title,
  subTitle,
  description1,
  description2,
  image,
}) {
  return (
    <div>
      <div

        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-80"
      >
      </div>
      <div className=" px-4 lg:px-28 bg-white py-14">
        <div className="flex flex-col gap-4 ">
          <div>
            <Title text={title} />
          </div>
          <div>
            <SubTitle text={subTitle} />
          </div>
        </div>
        <div className="flex md:gap-10 pt-4">
          <div className="basis-2/3">
            <ThickLine />
            <p className="text-black pt-4 ">
              "{description1}"
              <br />
              <br /> {description2}
            </p>
          </div>
          <div className="flex-1 lg:-mt-20">
            <img src={image} alt="testimonial" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
