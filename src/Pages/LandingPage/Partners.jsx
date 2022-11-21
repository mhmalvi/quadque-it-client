import React from 'react'
import Businesses from "../../Asset/Image/partners.png";

export default function Partners() {
  return (
    <div className="w-full pb-56">
      <div className="text-center font-poppins rounded-3xl">
        <div className="text-black text-4xl font-bold pb-5">
        Associated Partners / News
        </div>
        <div className="w-1/3 text-lg m-auto pb-18">
          Skilline is an interesting platform that will teach you in more
          Skilline is an interesting platform that will teach you
        </div>
        <div className="w-full text-white gap-6">
            <div className="">
              <img src={Businesses} alt="" className="w-full" />
            </div>
        </div>
      </div>
    </div>
  )
}
