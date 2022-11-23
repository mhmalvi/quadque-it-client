import React from "react";
import Graphics from "../../Asset/Image/image4.png";
import Motion from "../../Asset/Image/image5.png";

export default function TwoWayCourse() {
  return (
    <div className="w-full pb-40">
      <div className="bg-home-color text-white text-center font-poppins mx-10 rounded-3xl pb-16 px-4 lg:px-20">
        <div className="text-4xl font-semibold pt-8 pb-5">Two-way courses</div>
        <div className="w-full text-sm lg:text-lg lg:w-1/2 m-auto">
          Across the nation, students are leaving their home school districts to
          attend online schools. These schools have something that public school
          districts simply don't and won't have: ad campaigns.
        </div>
        <div className="flex-col lg:flex lg:flex-row justify-center text-white pt-13 gap-6">
          <div className="flex-col bg-home-color rounded-3xl">
            <div className="flex">
              <img src={Graphics} alt="" className="w-full md:shrink-0" />
            </div>
            <div className="p-5">
              <div className="text-sm lg:text-2xl left-0">
                You are anywhare best courses now on time go your choice
              </div>
              <div className="w-1/2 border border-white rounded-full mx-auto text-sm lg:text-xl py-2 lg:py-4 my-4">
                Online Courses
              </div>
            </div>
          </div>
          <div className="flex-col bg-home-color rounded-3xl">
            <div className="flex">
              <img src={Motion} alt="" className="w-full" />
            </div>
            <div className="p-5">
              <div className="text-2xl left-0">
                You are anywhare best courses now on time go your choice
              </div>
              <div className="w-1/2 border border-white rounded-full mx-auto text-sm lg:text-xl py-2 lg:py-4 my-4">
                Offline Courses
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
