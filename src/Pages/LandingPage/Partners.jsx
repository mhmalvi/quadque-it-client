import React from "react";
import Businesses from "../../Asset/Image/partners.png";

export default function Partners() {
  return (
    <div className="w-full pb-18 lg:pb-56">
      <div className="text-center rounded-3xl">
        <div className="text-black text-2xl md:text-4xl font-bold pb-5 text-shadow">
          Our Partners
        </div>
        <div className="lg:w-1/3 text-black text-lg m-auto pb-14">
          Take a look at some of our reputed industry partners.
        </div>
        <div className="w-full text-white gap-6">
          <div className="">
            <img src={Businesses} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
