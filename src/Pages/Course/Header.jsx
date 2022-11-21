import React from "react";
import Banner from "../../Asset/Image/banner.png";
import Reading from "../../Asset/Image/reading.png";

export default function Header() {
  return (
    <div className="w-full font-poppins">
      <div className="flex bg-black h-[356px] mt-10 pt-44 pb-20">
        <div className="w-full relative">
          <div className="w-1/2 flex m-auto justify-center">
            <div className="">
              <img src={Banner} className="absolute top-4 left-72" alt="" />
            </div>
            <div className="w-1/2 text-white text-center">
              <div className="text-4xl pb-2">Courses</div>
              <div className="pb-10">
                Skilline is an interesting platform that will teach you in more
                Skilline is an interesting platform that will teach
              </div>
              <div className="flex justify-center">
                <div className="bg-white text-black px-6 rounded-2xl m-2">
                  All
                </div>
                <div className="bg-black text-white px-6 rounded-2xl m-2">
                  Offline
                </div>
                <div className="bg-black text-white px-6 rounded-2xl m-2">
                  Online
                </div>
              </div>
            </div>
            <div className="">
              <img src={Reading} className="absolute -top-20" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
