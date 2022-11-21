import React, { useState } from "react";
import shourav from "../../Asset/Image/shourav.png";
import Icons from "../../Components/Shared/Icons";

const JobOpportunities = () => {
  return (
    <div>
      <div>
        <div className="font-poppins font-bold text-3xl px-30">
          {" "}
          We Bring The Good Education To Life{" "}
        </div>
        ;
      </div>
      <div className="flex px-20 relative">
        <div className="mx-auto"><img src={shourav} alt="" className="w-392 h-461 rounded-3xl" /></div>
        <div className="mx-auto absolute top-56 left-96">  <Icons.JobOpportunities /></div>
        
        <div className="font-poppins font-bold text-4xl px-50 mx-auto">
          Let Your Education <br /> Do The Walking
          <br />
          <br />
          <div className="flex">
            <Icons.EBook />
            <span className="font-poppins font-semibold text-xl px-5 py-2">
              Free E-book, videos and kits{" "}
            </span>
          </div>
          
          <div className="flex py-5">
            <Icons.Learning />
            <span className="font-poppins font-semibold text-xl px-5 py-2">
              Learn at your own pace{" "}
            </span>
          </div>

          <div className="flex py-5">
            <Icons.Colab />
            <span className="font-poppins font-semibold text-xl px-5 py-2">
              Collaborate with different learners around the globe{" "}
            </span>
          </div>

          <div className="flex">
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
