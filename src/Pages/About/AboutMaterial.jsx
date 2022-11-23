import React, { useState } from "react";
 import Robot from "../../Asset/Image/Robot.png"; 


const AboutMaterial = () => {
    return (

        <div className="w-full font-poppins pt-40 pb-44 bg-slate-900 text-zinc-50">
        
        <div className="flex px-30 relative">
          <div className="">
            <img src={Robot} alt="" className="w-392 h-461 rounded-3xl" />
            
          </div>
          <div className="mx-auto pb-14 pt-10">
            <div className="font-semibold text-3xl px-50 pb-10">
              {" "}
              Find Content Writing 
              <br/> Services Usa at Shopwebly
            </div>
            <div className="flex py-4 font-poppins font-thin text-sm px-2 py-2">
             
            Use the Drag and Drop function to sort your products in the most <br/>
            intuitive, quickest way. Use the Drag and Drop function to sort <br/>
            your products in the most intuitive, quickest way.
            </div>
            <div className="flex py-4 font-thin px-2 ">
            
            Set scores for products by adding number, SKUs with higher <br/>
            scores will be displayed on top of the category pages.
            </div>
          </div>
        </div>
      </div>
      


           );
};
export default AboutMaterial;