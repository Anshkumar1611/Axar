import React from "react";
import SubTitle from "../components/common/SubTitle";
import Title from "../components/common/Title";
import Photo from "../components/common/whyUsDiv/photoDiv/photo";
import Images from "../assets/img";
import Text from "../components/common/services/Text";
import ThickLine from "../components/common/lines/ThickLine";

function Services() {
  return (
    <>
      <div className="w-full lg:h-80">
        <img src={Images.service} alt="Services" className="w-full h-full" />
      </div>
      <div className="">
        <div className="bg-white px-4 lg:px-28 py-14">
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <Title text={"Services"} />
            </div>
            <div>
              <SubTitle text={"Our Services"} />
            </div>
          </div>
          <div className="flex md:gap-10 ">
            <div className="basis-2/3">
              <ThickLine />
              <p className="text-black pt-4">
                "We offer our clients direct access to a team of highly
                qualified and experienced specialists offering consultancy
                services in preliminary work, building design, construction
                management as well as construction supervision and maintenance
                work. AXAR has served as engineering consultant on almost every
                type of building project including, domestic housing, schools,
                hotels, sports centers, offices, factories, hospitals and health
                centers.
                <br />
                <br /> From preliminary or structural designs for buildings and
                other structures, to the design of HVAC, electrical and control
                systems, to developing fire safety plans and designing diverse
                acoustical solutions, specialists at AXAR have the knowledge to
                solve project challenges of any size."
              </p>
            </div>
            <div className="flex-1 -mt-10">
              <img
                src={Images.serviceMain}
                alt="why us"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-14 lg:px-28 flex flex-col gap-6">
          <SubTitle text={"Services We Offer"} />
          <ThickLine/>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-8">
            <div className="basis-1/2">
              <Photo url={`${Images.service2}`} />
            </div>
            <div className="basis-1/2 flex flex-col gap-2 ">
              <Text
                title={"Custom Homes"}
                description={
                  "Work with our designer or bring us your plans and we’ll build your dream home. We’ll build on your land or we can help you find that perfect lot."
                }
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse p-4 gap-0 lg:gap-8">
            <div className="basis-1/2 lg:-mt-20">
              <Photo url={`${Images.service1}`} />
            </div>
            <div className="basis-1/2 flex flex-col gap-2 ">
              <Text
                title={"Semi-Custom Homes"}
                description={
                  "Not quite ready for a completely custom home? Don’t have the time on your hands to invest in a fully custom home? You can start with one of our plans and modify it to your needs. Our lot or yours!"
                }
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row p-4 gap-0 lg:gap-8">
            <div className="basis-1/2 lg:-mt-20">
              <Photo url={`${Images.service3}`} />
            </div>
            <div className="basis-1/2 flex flex-col gap-2 ">
              <Text
                title={"Lot Purchase Assistance"}
                description={
                  "If you are looking for that perfect lot we may be able to help. We are very knowledgeable about available lots including variables such as water and sewer fees, building permit fees and soils conditions. These are all important factors to consider when buying a lot to build on."
                }
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse p-4 gap-0 lg:gap-8">
            <div className="basis-1/2 lg:-mt-20">
              <Photo url={`${Images.service4}`} />
            </div>
            <div className="basis-1/2 flex flex-col gap-2 ">
              <Text
                title={"Financing"}
                description={
                  "AXAR Luxury Homes works with several banks and mortgage lenders. There are many financing programs available from these lenders including lot loans, construction loans, and construction to permanent loans. We would be happy to refer you to lenders that would best fit your situation."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
