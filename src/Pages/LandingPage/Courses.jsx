import React from "react";
import Course from "../../Asset/Image/image9.png";

export default function Courses() {
  return (
    <div className="w-full pb-24">
      <div className="bg-[#5c5bfd] bg-opacity-10 text-center m-auto mx-10 rounded-3xl py-24 px-20">
        <div className="text-black text-4xl font-bold pb-5">
          Our Paragraph is a series series sentences
        </div>
        <div className="text-lg">
          Skilline is an interesting platform that will teach you in more
        </div>
        <div className="flex text-white text-2xl pt-13 gap-6">
          <div className="flex-col bg-home-color w-1/3 m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Graphics & Design</div>
          </div>
          <div className="flex-col bg-home-color w-1/3 m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Graphics & Design</div>
          </div>
          <div className="flex-col bg-home-color w-1/3 m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Graphics & Design</div>
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex text-white text-2xl pt-6 gap-6">
          <div className="flex-col bg-home-color w-1/3 m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Graphics & Design</div>
          </div>
          <div className="flex-col bg-home-color w-1/3 m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Graphics & Design</div>
          </div>
          <div className="flex-col bg-home-color w-1/3 m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Graphics & Design</div>
          </div>
        </div>
      </div>
    </div>
  );
}
