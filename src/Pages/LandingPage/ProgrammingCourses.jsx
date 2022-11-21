import React from 'react';
import Graphics from "../../Asset/Image/graphics.png";
import Motion from "../../Asset/Image/motion.png";
import Uiux from "../../Asset/Image/uiux.png";

export default function ProgrammingCourses() {
  return (
    <div className="w-full pb-24">
    <div className="text-center font-poppins mx-10 rounded-3xl px-20">
      <div className="text-black text-4xl font-bold pb-5">
        Programming course
      </div>
      <div className="flex text-white pt-13 gap-6">
        <div className="flex-col bg-home-color w-1/3 rounded-3xl">
          <div className="flex">
            <img src={Graphics} alt="" className="w-full" />
          </div>
          <div className="p-5">
            <div className="flex-col">
              <div className="flex justify-between">
                <div className="bg-[#23BDEE] text-[#23BDEE] bg-opacity-50 rounded-2xl py-2 px-4">
                  5.6.22
                </div>
                <div className="text-xl py-2">15000 tk</div>
              </div>
            </div>
            <div className="text-2xl pt-2 left-0">Web Design</div>
            <div className="mx-6">
              Our new seminar in wordpress 26 June Our new wordpress 26 June
            </div>
          </div>
        </div>
        <div className="flex-col bg-home-color w-1/3 rounded-3xl">
          <div className="flex">
            <img src={Motion} alt="" className="w-full" />
          </div>
          <div className="p-5">
            <div className="flex-col">
              <div className="flex justify-between">
                <div className="bg-[#23BDEE] text-[#23BDEE] bg-opacity-50 rounded-2xl py-2 px-4">
                  5.6.22
                </div>
                <div className="text-xl py-2">15000 tk</div>
              </div>
            </div>
            <div className="text-2xl pt-2 left-0">Motion Graphics</div>
            <div className="mx-6">
              Our new seminar in wordpress 26 June Our new wordpress 26 June
            </div>
          </div>
        </div>
        <div className="flex-col bg-home-color w-1/3 rounded-3xl">
          <div className="flex">
            <img src={Uiux} alt="" className="w-full" />
          </div>
          <div className="p-5">
            <div className="flex-col">
              <div className="flex justify-between">
                <div className="bg-[#23BDEE] text-[#23BDEE] bg-opacity-50 rounded-2xl py-2 px-4">
                  5.6.22
                </div>
                <div className="text-xl py-2">15000 tk</div>
              </div>
            </div>
            <div className="text-2xl pt-2 left-0">UI/UX Design</div>
            <div className="mx-6">
              Our new seminar in wordpress 26 June Our new wordpress 26 June
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
