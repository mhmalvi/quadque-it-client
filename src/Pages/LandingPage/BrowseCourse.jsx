import React from "react";
import Giphy from "../../Asset/Image/giphy.png";
import Image from "../../Asset/Image/image44.png";

export default function BrowseCourse() {
  return (
    <div className="w-full font-poppins">
      <div className=" lg:bg-gradient-to-t from-[#000000] to-[#2F327D] h-[485px] relative">
        <div className="lg:flex justify-evenly m-auto gap-24">
          <div className="relative -top-20 p-4">
            <img src={Image} width={411} alt="" />
          </div>
          <div className="w-full lg:w-1/3 text-black lg:text-white text-center lg:text-start lg:py-24">
            <div className="text-xl md:text-2xl lg:text-4xl font-bold pb-5 lg:pb-14">Choose your best course your best course Choose Course</div>
            <div className="w-1/2 bg-[#2F327D] rounded-full text-sm lg:text-xl text-white text-center m-auto px-8 py-4">
                Browse Courses
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
