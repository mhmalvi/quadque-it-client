import React from "react";
import unsplash from "../../../Asset/Image/unsplash.png";
import Footer from "../LandingPage/Footer";

const Admission = () => {
  return (
    <div className="bg-home-color text-white lg:mt-10 h-auto lg:h-screen">
      <div className="md:w-7/12 lg:w-11/12 xl:7/12 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 py-20 lg:py-40">
        <img src={unsplash} alt="" className="w-98 px-5 lg:px-0 mx-auto" />

        <div className="w-11/12 lg:w-1/3 border rounded-3xl p-10 mx-auto text-center">
          <div className="font-semibold text-xl lg:text-3xl leading-10">15000 TK </div>
          <div className="text-sm lg:text-xl lg:leading-12"> Web Design </div>
          <div className="font-semibold text-xl lg:text-3xl py-5">
            Select A Payment Method
          </div>
          <div className="py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Bkash
            </button>
            <button class="bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3">
              Bank
            </button>
          </div>
          <div class="py-5">
            <button class="bg-indigo-800 hover:bg-blue-700 text-white py-2 px-8 rounded-3xl ">
              Buy Course
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Admission;
