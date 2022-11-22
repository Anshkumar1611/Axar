import React from "react";
import Images from "../../../assets/img";
import AxarCard from "../../common/cards/AxarCard";
import SubTitle from "../../common/SubTitle";
import Title from "../../common/Title";

function Journey() {
  return (
    <div className="py-4 lg:py-14">
      <div className="flex flex-col gap-4 px-4 py-8 lg:px-28 lg:py-0">
        <div>
          <Title text={"About us"} />
        </div>
        <div>
          <SubTitle text={"Journey"} />
        </div>
      </div>
      <div className="lg:px-28 lg:py-4 flex flex-col items-center lg:flex-row lg:justify-center">
        <div className="bg-journey w-full lg:w-[600px] ">
          <div className="flex flex-col gap-4 p-8 text-black lg:p-10">
            <p className="uppercase font-Playfair text-lg font-medium leading-tight">
              EST 1997
            </p>
            <p className="font-Playfair text-4xl font-bold leading-tight">
              Our Story
            </p>
            <p className="font-sans tracking-wider text-justify pr-4">
              This passion, perhaps, runs in my genes. My late grandfather used
              to build houses in our ancestral village in India. He specialised
              in Two storey hardwood wooden frame houses.
              <br />
              <br />
              In the year 1997, my elder brother late Bharatsinh Parmar
              established AKSHAR CONSTRUCTIONS in Ahmedabad, India. He was a
              fanatical civil engineer and undertook numerous residential
              projects including multi storey apartment blocks in India. The
              company was doing really well until that unfortunate day when he
              met with a fatal accident and we lost him.
            </p>
          </div>
        </div>
        <div className="lg:-mt-20">
          <img src={Images.home} alt="Hero" className="w-[800px] h-[600px]" />
        </div>
      </div>
      <div className="flex flex-col py-14 lg:px-28 lg:py-20 lg:flex-row">
        <div className="flex justify-center ">
          <AxarCard />
        </div>
        <div className="flex justify-center items-center p-4">
          <p className="text-justify text-white font-Playfair">
            AXAR LUXURY HOMES is an extension of my brother’s dream, it’s my
            tribute to my late brother. He was the one who inspired me to be a
            civil engineer. While he was building the apartment buildings in
            India, I used to accompany him on his site visits as a young curious
            boy. I learnt the fine details of this trade firsthand from him.
            Following his footsteps, I studied Diploma of civil engineering from
            Government Polytechnic, Ahmedabad.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:px-28 lg:py-20 lg:flex-row-reverse">
        <div className="flex justify-center ">
          <AxarCard />
        </div>
        <div className="flex justify-center items-center p-4">
          <p className="text-justify text-white font-Playfair">
            And then subsequently Bachelor of Civil Engineering from Gujarat’s
            most reputed L D Engineering Institute Ahmedabad. I passed my
            Engineering with flying colours and achieved 7 gold medals. My
            passion for Civil Engineering persisted as I completed my Masters
            from University of South Australia. I continued to grow
            professionally as I gained valuable major infrastructure projects
            experience since last 15 years. Currently I am a registered
            chartered civil engineer. This is my little story. DREAMS DO COME
            TRUE. Building your dream home and helping you bring your dreams to
            reality is my passion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Journey;
