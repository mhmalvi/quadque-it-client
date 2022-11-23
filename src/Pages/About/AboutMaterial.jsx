import React, { useState } from "react";
import Robot from "../../Asset/Image/Robot.png";

const AboutMaterial = () => {
  return (
    <div className="bg-home-color w-full font-poppins pb-44 text-white">
      <div className="w-2/3 flex m-auto">
        <div className="m-auto">
          <img src={Robot} alt="" className="rounded-3xl" />
        </div>
        <div className="mx-auto">
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
