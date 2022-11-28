import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import Logo from "../../../Asset/Image/Logo.svg"
import Icons from "../Icons";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className="w-full absolute top-0 bg-transparent">
      <div className="w-2/3 m-auto md:flex items-center justify-between px-4 py-2">
        <div className="font-poppins text-gray-800 font-bold text-2xl coursor-pointer flex items-center"></div>
        <ul className="flex items-center text-xs text-black font-semibold m-0">
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

      <div className="text-center text-white mx-10 rounded-2xl pt-4 relative">
        <div className="flex justify-between py-2 px-10 lg:mx-30 lg:px-0 m-auto">
          <div className="md:shrink-0 coursor-pointer m-0 lg:m-auto">
            <img src={Logo} className="" alt="QIT logo" />
          </div>
          <div
            onClick={() => setMenuStatus(!menuStatus)}
            className="relative float-right top-0 cursor-pointer lg:hidden"
          >
            {menuStatus ? (
              <Icons.MenuBar className="rotate-90 transition duration-500" />
            ) : (
              <Icons.MenuBar className="transition duration-500" />
            )}
          </div>
          <ul
            className={`w-full bg-black/90 lg:bg-transparent lg:flex justify-end font-semibold text-white lg:my-2 ${
              menuStatus ? "absolute top-[100px]" : "hidden"
            } `}
          >
            {navItems.map((item) => {
              if (item.title === "More") {
                return (
                  <li
                    key={item.id}
                    className="py-4 px-6"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <NavLink to={item.path}>{item.title}</NavLink>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className="py-4 px-6">
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
