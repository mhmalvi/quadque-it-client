import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Asset/Image/Logo.svg";
import Icons from "../Icons";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showElement, setShowElement] = useState("");
  useEffect(() => {
    setTimeout(function () {
      if(open === true){
      setShowElement("block");
      console.log("hiddeeen", showElement);
      }else{
      setShowElement("hidden");
      console.log("hiddeeen", showElement);
      }
    },1000);
  }, [open]);


  return (
    <div className="w-full absolute top-0 bg-transparent">
      {/* TOPBAR */}
      <div className="w-2/3 m-auto md:flex items-center justify-between px-4 py-2 hidden lg:visible">
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

      <nav className="bg-transparent text-white relative">
        <div className="flex items-center font-medium justify-around sm:mx-10">
          <div className="z-50 p-5 lg:w-auto w-full">
            <img src={Logo} width={83} alt="QIT" className="cursor-pointer" />
          </div>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <Icons.Cancel
                width={20}
                className="cursor-pointer mx-8 lg:hidden"
              />
            ) : (
              <Icons.MenuBar width={40} className="mx-5 lg:hidden" />
            )}
          </div>
          <ul className="hidden lg:visible lg:flex items-center gap-8">
            <li>
              <Link to="/" className="px-7 py-2 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link to="/" className="px-7 py-2 bg-brand-color rounded-lg inline-block">
                Login
              </Link>
            </li>
          </ul>
          {/* Mobile View */}
          <ul
            className={`lg:hidden absolute w-full h-full top-20 duration-1000 ${
              open ? "left-0 opacity-100" : "left-[100%] opacity-0"
            }  ${showElement}`}
          >
            <li>
              <Link
                to="/"
                className="bg-white text-black text-lg px-7 py-6 w-full inline-block"
              >
                Home
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link to="/" className="bg-white text-lg text-black w-full inline-block px-7 py-6">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
