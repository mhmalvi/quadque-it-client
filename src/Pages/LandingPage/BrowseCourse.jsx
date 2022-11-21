import React from "react";
import Giphy from "../../Asset/Image/giphy.png";
import Image from "../../Asset/Image/image44.png";

export default function BrowseCourse() {
  return (
    <div className="w-full font-poppins text-white">
      <div className="bg-gradient-to-t from-[#000000] to-[#2F327D] h-[485px] relative">
        <div className="w-full flex justify-end">
          <div className="w-1/2 absolute -top-20 left-56">
            <img src={Image} width={411} alt="" />
          </div>
          <div className="w-1/2 pt-24 pb-24 pr-10">
            <div className="text-4xl font-bold pb-14">Choose your best course your best course Choose Course</div>
            <div className="w-1/3 bg-[#2F327D] rounded-full text-white text-center px-8 py-4">
                Browse Courses
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
