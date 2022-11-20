import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-home-color px-4 py-2">
        <div className="font-poppins text-gray-800 font-bold text-2xl coursor-pointer flex items-center">
         {/*  <span className="text-2xl text-brand-color mr-1 pt-2">SmartCRM</span> */}
        </div>
        <ul className="md:flex md:items-center m-0">
          <li className="md:ml-8 text-md text-white">
            <a className="" href="">Home</a>
          </li>
          <li className="md:ml-8 text-md">
            <a className="" href="">Product</a>
          </li>
          <li className="md:ml-8 text-md">
            <a className="" href="">Pricing</a>
          </li>
          <li className="md:ml-8 text-md">
            <a className="" href="">About Us</a>
          </li>
          <li className="md:ml-8 text-md">
            <a className="" href="">Blog</a>
          </li>
          <li className="md:ml-8 text-md">
            <a className="" href="">Contact</a>
          </li>
          <li className="md:ml-8 text-md">
            <div className="bg-black rounded-xl py-2 px-4">
                <a className="text-md text-white hover:text-gray-200 duration-600" href="">Free Trial</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
