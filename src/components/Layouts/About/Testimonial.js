import React from "react";
import Images from "../../../assets/img";
import TestimonialCard from "../../common/cards/TestimonialCard";
import ThickLine from "../../common/lines/ThickLine";
import SubTitle from "../../common/SubTitle";
import Title from "../../common/Title";

const data = [
  {
    id: 1,
    logo: Images.testimonial1,
    views:
      "“For well over ten years I have had the opportunity to work with Axar Construction on projects from modernizations to complex alteration and new construction involving phasing, difficult site conditions and tight time frames. In all cases Axar Construction exceeded my expectations and did so in ways that ensured the school’s schedule and budget goals were met…Once selected (unanimously) by the selection committee, Axar Construction set out to help us with the constructability review and cost estimating. With concern over the rising cost of steel and energy, and its impact on budget, Axar collaborated with the district and design team on cost savings including multiple subcontractors bidding to ensure the budget was met.”",
    name: "Mark Quattrocchi",
    designation: "Director Operations and Sustainability",
    address: "Larkspur-Corte Madera School District",
  },
  {
    id: 2,
    logo: Images.testimonial2,
    views:
      "“For well over ten years I have had the opportunity to work with Axar Construction on projects from modernizations to complex alteration and new construction involving phasing, difficult site conditions and tight time frames. In all cases Axar Construction exceeded my expectations and did so in ways that ensured the school’s schedule and budget goals were met…Once selected (unanimously) by the selection committee, Axar Construction set out to help us with the constructability review and cost estimating. With concern over the rising cost of steel and energy, and its impact on budget, Axar collaborated with the district and design team on cost savings including multiple subcontractors bidding to ensure the budget was met.”",
    name: "Mark Quattrocchi",
    designation: "Director Operations and Sustainability",
    address: "Larkspur-Corte Madera School District",
  },
  {
    id: 3,
    logo: Images.testimonial3,
    views:
      "“For well over ten years I have had the opportunity to work with Axar Construction on projects from modernizations to complex alteration and new construction involving phasing, difficult site conditions and tight time frames. In all cases Axar Construction exceeded my expectations and did so in ways that ensured the school’s schedule and budget goals were met…Once selected (unanimously) by the selection committee, Axar Construction set out to help us with the constructability review and cost estimating. With concern over the rising cost of steel and energy, and its impact on budget, Axar collaborated with the district and design team on cost savings including multiple subcontractors bidding to ensure the budget was met.”",
    name: "Mark Quattrocchi",
    designation: "Director Operations and Sustainability",
    address: "Larkspur-Corte Madera School District",
  },
  {
    id: 4,
    logo: Images.testimonial4,
    views:
      "“For well over ten years I have had the opportunity to work with Axar Construction on projects from modernizations to complex alteration and new construction involving phasing, difficult site conditions and tight time frames. In all cases Axar Construction exceeded my expectations and did so in ways that ensured the school’s schedule and budget goals were met…Once selected (unanimously) by the selection committee, Axar Construction set out to help us with the constructability review and cost estimating. With concern over the rising cost of steel and energy, and its impact on budget, Axar collaborated with the district and design team on cost savings including multiple subcontractors bidding to ensure the budget was met.”",
    name: "Mark Quattrocchi",
    designation: "Director Operations and Sustainability",
    address: "Larkspur-Corte Madera School District",
  },
  {
    id: 5,
    logo: Images.testimonial5,
    views:
      "“For well over ten years I have had the opportunity to work with Axar Construction on projects from modernizations to complex alteration and new construction involving phasing, difficult site conditions and tight time frames. In all cases Axar Construction exceeded my expectations and did so in ways that ensured the school’s schedule and budget goals were met…Once selected (unanimously) by the selection committee, Axar Construction set out to help us with the constructability review and cost estimating. With concern over the rising cost of steel and energy, and its impact on budget, Axar collaborated with the district and design team on cost savings including multiple subcontractors bidding to ensure the budget was met.”",
    name: "Mark Quattrocchi",
    designation: "Director Operations and Sustainability",
    address: "Larkspur-Corte Madera School District",
  },
];

function Testimonial() {
  return (
    <div className="">
      <div className="w-full h-full">
        <img
          src={Images.testimonialHome}
          alt="testimonial"
          className="w-full h-full"
        />
      </div>
      <div className=" px-4 lg:px-28 bg-white py-14">
        <div className="flex flex-col gap-4 ">
          <div>
            <Title text={"Testimonials"} />
          </div>
          <div>
            <SubTitle text={"Our Clients Testimonials"} />
          </div>
        </div>
        <div className="flex md:gap-10 pt-4">
          <div className="basis-2/3">
            <ThickLine />
            <p className="text-black pt-4 ">
              "Our most important goal is to make our clients happy. To do this,
              we listen to your concerns, challenges, and goals and focus our
              efforts to ensure that we deliver a quality building, on time and
              on budget that takes into consideration your most important
              objectives."
              <br />
              <br /> We are proud of our reputation as an honest, ethical
              general contractor that provides exceptional service and build
              quality. We invite you to review some of the comments from our
              many satisfied clients.
            </p>
          </div>
          <div className="flex-1 lg:-mt-20">
            <img
              src={Images.testimonialMain}
              alt="testimonial"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-yellow p-14 flex flex-col gap-10 items-center justify-center ">
        {data.map((item) => {
          return <TestimonialCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Testimonial;
