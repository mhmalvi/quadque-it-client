import React from "react";
import Cone from "../../Asset/Image/cone.png"
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="bg-home-color h-screen flex justify-center items-center text-white">
      <div>
        <img src={Cone} alt="" className="w-[5rem] mx-auto"/>
        <div className="text-center text-3xl pt-4">ERROR 404</div>
        <div className="text-center">The requested URL was not found on this server.</div>
        <div className="flex justify-center pt-12">
          <Link to={"../"}>
            <div className="bg-white rounded-full text-center text-black inline-block px-4 py-2">Go to Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
