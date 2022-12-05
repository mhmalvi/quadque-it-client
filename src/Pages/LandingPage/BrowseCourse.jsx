import React from "react";
import Giphy from "../../Asset/Image/giphy.png";
import Image from "../../Asset/Image/image44.png";

export default function BrowseCourse() {
  return (
    <div className="w-full font-poppins mb-18 lg:mb-0 sm:pb-0">
      <div className=" sm:bg-gradient-to-t from-[#000000] to-[#2F327D]">
        <div className="sm:flex sm:justify-center sm:px-6">
          <div className="w-full flex justify-center items-center shrink-0 sm:w-1/2 sm:relative sm:-top-20 p-4">
            <img src={Image} width={411} alt="" />
          </div>
          <div className="w-full lg:w-1/3 text-black sm:text-white text-center sm:text-start sm:py-16">
            <div className="text-base sm:text-xl md:text-2xl font-bold pb-5 px-4">Choose your best course your best course Choose Course</div>
            <button className="bg-[#2F327D] rounded-full text-sm sm:text-base lg:text-xl text-white text-center m-auto leading-tight sm:m-0 px-8 py-3">
                Browse Courses
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
