import React from "react";
import Banner from "../../Asset/Image/banner.png";
import Reading from "../../Asset/Image/reading.png";

export default function Header() {
  return (
    <div className="w-full font-poppins">
      <div className="flex bg-[#040422] lg:mt-10 pt-44 pb-20">
        <div className="w-full ">
          <div className="flex m-auto justify-center">
            <div className="hidden lg:block">
              <img src={Banner} className="absolute bottom-[47%] left-[10%]" alt="" />
            </div>
            <div className="w-1/2 sm:w-1/3 text-white text-center">
              <div className="text-4xl pb-2">Courses</div>
              <div className="m-auto pb-8">
                Skilline is an interesting platform that will teach you in more
                Skilline is an interesting platform that will teach
              </div>
              <div className="flex justify-center">
                <div className="bg-white text-black px-4 rounded-2xl m-2">
                  All
                </div>
                <div className="bg-black text-white px-4 rounded-2xl m-2">
                  Offline
                </div>
                <div className="bg-black text-white px-4 rounded-2xl m-2">
                  Online
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={Reading} className="absolute right-2" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
