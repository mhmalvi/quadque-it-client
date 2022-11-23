import React from "react";
import Logo from "../../Asset/Image/Logo.svg";
import Icons from "../../Components/Shared/Icons";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 bg-transparent">
      <div className="w-2/3 m-auto md:flex items-center justify-between px-4 py-2">
        <div className="font-poppins text-gray-800 font-bold text-2xl coursor-pointer flex items-center">
        </div>
        <ul className="md:flex md:items-center text-base text-black font-semibold m-0">
          <li className="md:ml-8">
              <div className="flex">
                <Icons.Mail />
                <span className="px-4">info@quadque.tech</span>
              </div>
          </li>
          <li className="md:ml-8">
              <div className="flex">
                <Icons.Phone />
                <span className="px-4">01765276560</span>
              </div>
          </li>
        </ul>
      </div>
      <div className="mx-10 rounded-2xl pt-4">
        <div className="md:flex justify-between py-2 px-14">
          <div className="font-poppins text-gray-800 font-bold text-2xl md:shrink-0 coursor-pointer flex items-center">
            <img src={Logo} alt="QIT logo" />
          </div>
          <ul className="md:flex md:items-center text-base text-white font-semibold m-0">
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="/">
                Home
              </a>
            </li>
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="/course">
                Courses
              </a>
            </li>
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="/about-us">
                About
              </a>
            </li>
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="">
                More
              </a>
            </li>
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="">
                Contact Us
              </a>
            </li>
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="">
                English
              </a>
            </li>
            <li className="md:ml-14">
              <a className="bg-brand-color rounded-lg text-white no-underline py-2 px-4" href="">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
