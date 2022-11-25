import React from "react";
import Images from "../../../assets/img";
import PhotoDiv from "./photoDiv/Photo";
import TextDiv from "./textDiv/Text";

const data = [
  {
    id: "1",
    url: `${Images.hero1}`,
    heading: "No Middlemen",
    description:
      "Here at AXAR Luxury Homes you will be personally dealing with the builder of your home, who will oversee the entire build personally from the design concept through to completion. And guess what ? We come to you in the convenience of your own home.",
  },
  {
    id: "2",
    url: `${Images.hero2}`,
    heading: "Designing",
    description:
      "After the initial planning meetings the real fun begins! The real benefit of building with us remains in the seamlessness of the process; taking your wants and dreams, creating a fully fleshed out design and then taking you all the way through to the realization of a functional and beautiful space made just for you.",
  },
  {
    id: "3",
    url: `${Images.hero3}`,
    heading: "Exceptional Pricing",
    description:
      "Our well established relationships with subcontractors, vendors and national buying groups allows for exceptional pricing for you as the consumer.",
  },

  {
    id: "4",
    url: `${Images.hero4}`,
    heading: "We are Flexible",
    description:
      "We encourage you to visit the building site regularly so you become familiar with the aesthetics and practicalities while the house is still under construction. If you see something that does not fit your vision, you have the opportunity to modify it before moving to the next stage.",
  },
  {
    id: "5",
    url: `${Images.hero5}`,
    heading: "Our Guarantee",
    description:
      "Limiting the number of houses we build each year ensures we deliver on time and on budget. Our ability to meet your expectations.",
  },
  {
    id: "6",
    url: `${Images.hero1}`,
    heading: "100% Transparency",
    description:
      "It's time for your dream home to become a reality! AXAR Luxury Homes is a 'True' custom home builder, with 100% transparency *no hidden fees*.",
  },
];
function WhyUsSection() {
  return (
    <div className="flex flex-col gap-10 ">
      {data.map((item) => {
        const { heading, url, description, id } = item;
        return (
          <div className="flex flex-col lg:flex-row mb-4 drop-shadow-2xl even:flex-row-reverse" key={id}>
            <PhotoDiv url={url} />
            <TextDiv heading={heading} desc={description} id={id}/>
          </div>
        );
      })}
    </div>
  );
}

export default WhyUsSection;
