import React from "react";
import DetailOverlay from "./DetailOverlay";
import Rectangle from "../../Asset/Image/rectangle.png";
//import RectangleTwo from "../../Asset/Image/rectangle2.png";

export default function Header() {
  return (
    <div className="w-full font-poppins text-white">
      <div className="bg-home-color h-full mt-10 pb-20">
        <img src={Rectangle} className="w-full z-10" alt="" />
        <div className="z-20"><DetailOverlay/></div>
      </div>
    </div>
  );
}
