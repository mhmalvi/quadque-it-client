import React from "react";
import Icons from "../../../Components/Shared/Icons";
import { useNavigate } from "react-router-dom";

const StudentEnrolment = () => {
  return (
    <div className="w-full h-auto text-black my-5 mx-5">
      <div className="text-lg py-2 px-5">Enrolled Course</div>
      <div className="grid grid-col-1 lg:grid-cols-3 2xl:grid-cols-5 gap-6 xl:gap-4 my-3">
        <div
          className="relative flex-col group border border-black border-opacity-30 rounded-xl ease-in duration-300 shadow-lg"
        >
          <div className="flex-col justify-end absolute right-4 top-6"></div>
          <div className="p-4">
            <div className="py-2 whitespace-nowrap">
              {/* {details?.price} tk */}Adobe Illustrator 101
            </div>
            <div className="bg-[#1483a4] text-black text-sm bg-opacity-50 rounded-full py-2 px-2 my-1 overflow-hidden">
              {/* {details?.category} */}Graphics Design
            </div>
            <div className="font-semibold text-sm pt-2 left-0">
              {/* {details?.title} */}Medium: Offline
            </div>
            <div className="font-semibold text-sm pt-2 left-0">
              {/* {details?.title} */}Status: Valid
            </div>
            <p className="font-semibold text-sm py-2">
              {/* {details?.para} */}Result:
            </p>
            <div className="flex text-sm">
              <div className="border rounded-md p-2 cursor-pointer">
                {" "}
                materials
              </div>
            </div>
          </div>
        </div>
        <div
          /* onClick={navigateToCourseDetails} */
          className="relative flex-col group border border-black border-opacity-30 rounded-xl ease-in duration-300 shadow-lg"
        >
          <div className="flex-col justify-end absolute right-4 top-6"></div>
          <div className="p-4">
            <div className="py-2 whitespace-nowrap">
              {/* {details?.price} tk */}Django
            </div>
            <div className="bg-[#1483a4] text-black text-sm bg-opacity-50 rounded-full py-2 px-2 my-1 overflow-hidden">
              {/* {details?.category} */}Programming
            </div>
            <div className="font-semibold text-sm pt-2 left-0">
              {/* {details?.title} */}Medium: Online
            </div>
            <div className="font-semibold text-sm pt-2 left-0">
              {/* {details?.title} */}Status: Valid
            </div>
            <p className="font-semibold text-sm py-2">
              {/* {details?.para} */}Result:
            </p>
            <div className="flex text-sm">
              <div className="border rounded-md p-2 cursor-pointer">
                {" "}
                materials
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEnrolment;
