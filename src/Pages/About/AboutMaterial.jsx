import React, { useState } from "react";
import Robot from "../../Asset/Image/Robot.png";

const AboutMaterial = () => {
  return (
    <div className="bg-home-color w-full font-poppins pb-5 lg:pb-36 text-white">
      <div className="lg:w-3/4 m-auto flex-col lg:flex lg:flex-row gap-6 pt-36">
        <div className="m-auto pb-5 px-3">
          <img src={Robot} alt="" className="rounded-3xl" />
        </div>
        <div className="lg:w-1/2 text-center lg:text-start">
          <div className="font-semibold text-4xl pb-10">
            {" "}
            Find Content Writing
            <br /> Services Usa at Shopwebly
          </div>
          <div className="flex py-4 font-poppins px-2">
            Use the Drag and Drop function to sort your products in the most{" "}
            <br />
            intuitive, quickest way. Use the Drag and Drop function to sort{" "}
            <br />
            your products in the most intuitive, quickest way.
          </div>
          <div className="flex py-4 px-2 ">
            Set scores for products by adding number, SKUs with higher <br />
            scores will be displayed on top of the category pages.
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMaterial;
