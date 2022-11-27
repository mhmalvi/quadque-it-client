import React from "react";
import Graphics from "../../Asset/Image/graphics.png";
import Motion from "../../Asset/Image/motion.png";
import Uiux from "../../Asset/Image/uiux.png";

export default function UpcomingCourses() {
  return (
    <div className="w-full pb-24">
      <div className="text-center font-poppins mx-10 rounded-3xl px-20">
        <div className="text-black text-4xl font-bold pb-5">
          Our Upcoming course
        </div>
        <div className="text-lg">
          Skilline is an interesting platform that will teach you in more
          Skilline is an interesting platform that will teach you
        </div>
        <div className="flex text-white pt-13 gap-6">
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Graphics}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Motion}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Uiux}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
