import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Asset/Image/Logo.svg";
import Icons from "../Icons";
import NavLinks from "./NavLinks";
import { Button, Modal } from "antd";
import "../../../App.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-white transition ease transform duration-500 lg:hidden m-4`;

  return (
    <div id="Navbar" className="w-full absolute top-0 bg-transparent">
      {/* TOPBAR */}
      <div className="w-2/3 m-auto md:flex items-center justify-between px-4 py-2 hidden lg:visible">
        <div className="text-gray-800 font-bold text-2xl coursor-pointer flex items-center"></div>
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
            <Link to="/">
              <img src={Logo} width={83} alt="QIT" className="cursor-pointer" />
            </Link>
          </div>
          <div onClick={() => setOpen(!open)}>
            {/* Hamburger Animation */}
            <div
              className={`${genericHamburgerLine} ${
                open
                  ? "rotate-45 translate-y-2 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                open ? "translate-x-10 opacity-0" : "group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                open
                  ? "-rotate-45 -translate-y-2  group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </div>
          {/* Hamburger Animation end*/}
          <ul className="hidden lg:visible lg:flex items-center gap-8">
            <NavLinks />
          </ul>
          {/* Mobile View */}
          {/* <ul
            className={`lg:hidden absolute w-full h-full top-20 duration-500 ${
              open
                ? "top-0 scale-100 opacity-100"
                : "-top-[100%] opacity-0 scale-0"
            }`}
          >
            <li>
              <NavLinks />
            </li>
          </ul> */}
          <Modal
            className="cross_btn"
            title={false}
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            footer={false}
            width="100%"
          >
            <div className="w-full h-full flex flex-col justify-between text-center text-xl pt-20">
              <div onClick={() => setOpen(false)}>
                <Link to="/">Home</Link>
              </div>

              <div onClick={() => setOpen(false)}>
                <a href="/course">Courses</a>
              </div>

              <div onClick={() => setOpen(false)}>
                <a href="/about-us">About </a>
              </div>

              <div onClick={() => setOpen(false)}>
                <Link to="/blog">Blogs</Link>
              </div>

              <div onClick={() => setOpen(false)}>
                <Link to="/stories">Stories</Link>
              </div>

              <div onClick={() => setOpen(false)}>
                <Link to="/gallery">Gallery</Link>
              </div>

              <div onClick={() => setOpen(false)}>
                <Link to="/contact">Contact</Link>
              </div>

              <div onClick={() => setOpen(false)}>
                <Link to="/auth">Login</Link>
              </div>
            </div>
          </Modal>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
