import React, { useState } from "react";
import Robot from "../../Asset/Image/Robot.png";

const AboutMaterial = () => {
  return (
    <div className="bg-home-color w-full font-poppins py-13 lg:py-36 text-white">
      <div className="md:w-3/4 m-auto flex-col md:flex lg:flex-row gap-6">
        <div className="flex justify-center m-auto pb-5 px-3">
          <img src={Robot} alt="" className="shrink-0 rounded-3xl" />
        </div>
        <div className="lg:w-1/2 text-center lg:text-start my-auto">
          <div className="font-semibold text-2xl lg:text-4xl pb-3 px-10 lg:px-0">
            {" "}
            Exclusive Training Solutions to Boost Your Career
          </div>
          <div className="flex font-poppins lg:px-0 font-thin px-10 leading-5">
            This is your opportunity to make your mark in the world of digital
            marketing and IT. <br />
            <br />
            Effective training is not only about courses, but it’s also about
            uplifting one another. <br />
            <br />
            We are here to foster your learning and creativity by building a
            supportive community. Let us help you to reach new heights in your
            career and develop the awesome portfolio you’ve always dreamt of
            having.
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMaterial;
