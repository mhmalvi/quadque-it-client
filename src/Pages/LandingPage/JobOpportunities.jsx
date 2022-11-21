import React, { useState } from "react";
import shourav from "../../Asset/Image/shourav.png";
import Icons from "../../Components/Shared/Icons";

const JobOpportunities = () => {
  return (
    <div className="w-full font-poppins  pb-44">
      <div className="">
        <div className="font-poppins font-bold text-3xl px-30 pb-16">
          {" "}
          We Bring The Good Education To Life{" "}
        </div>
        ;
      </div>
      <div className="flex px-30 relative">
        <div className="">
          <img src={shourav} alt="" className="w-392 h-461 rounded-3xl" />
          <div className="mx-auto absolute top-48 left-96">
            {" "}
            <Icons.JobOpportunities />
          </div>
        </div>
        <div className="mx-auto pb-14">
          <div className="font-bold text-4xl px-50 pb-14">
            {" "}
            Let Your Education <br /> Do The Walking
          </div>
          <div className="flex py-4">
            <Icons.EBook />
            <span className="font-poppins font-semibold text-xl px-5 py-2">
              Free E-book, videos and kits{" "}
            </span>
          </div>
          <div className="flex py-4">
            <Icons.Learning />
            <span className="font-poppins font-semibold text-xl px-5 py-2">
              Learn at your own pace{" "}
            </span>
          </div>
          <div className="flex py-4">
            <Icons.Colab />
            <span className="font-poppins font-semibold text-xl px-5 py-2">
              Collaborate with different learners around the globe{" "}
            </span>
          </div>
          <div className="flex py-4">
            <Icons.instructors />
            <span className="font-poppins font-semibold text-xl px-5 py-2">
              Top Instructors around the globe{" "}
            </span>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default JobOpportunities;
