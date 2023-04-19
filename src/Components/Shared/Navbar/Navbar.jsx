import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Asset/Image/qit-logo.png";
import Icons from "../Icons";
import NavLinks from "./NavLinks";
import { Modal } from "antd";
import "../../../App.css";
import "./Navbar.css";
import { links } from "./MyLinks";
import Fade from "react-reveal/Fade";
import "../../../Pages/UserLayouts/LandingPage/style.css"
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [toogleSubmenu, setToogleSubmenu] = useState("");
  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-white transition ease transform duration-500 lg:hidden m-4`;

  return (
    <div id="Navbar" className="w-full absolute top-0 bg-transparent">
      {/* TOPBAR */}
      <div className="m-auto lg:flex items-center justify-between px-4 py-2 hidden lg:visible">
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
        <div className="flex items-center font-medium justify-around ">
          <div className="z-50 p-5 lg:w-auto w-full">
            <Link to="/">
              <img
                src={Logo}
                width={83}
                alt="QIT"
                className="w-[10rem] cursor-pointer"
              />
            </Link>
          </div>
          <div onClick={() => setOpen(!open)}>
            {/* Hamburger Animation */}
            <div
              className={`${genericHamburgerLine} ${
                open
                  ? "-translate-y-2 opacity-0"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                open ? "-translate-x-10 opacity-0" : "group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                open
                  ? "translate-y-2 opacity-0"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </div>
          {/* Hamburger Animation end*/}
          <ul className="hidden lg:visible lg:flex items-center gap-8">
            <NavLinks />
          </ul>
          {/* Mobile View */}
          <Modal
            className="NavbarModal cross_btn"
            title={false}
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            footer={false}
            width="100%"
          >
            {/* <div className="w-full h-full flex flex-col justify-between text-center text-xl py-28">
              {links?.map((link, i) => (
                <div key={i}>
                  <Fade top>
                    <div
                      onClick={() => {
                        toogleSubmenu !== link?.name
                          ? setToogleSubmenu(link?.name)
                          : setToogleSubmenu("");
                      }}
                    >
                      <a href={link?.link}>{link.name}</a>
                    </div>
                  </Fade>
                  <Fade right delay={0} spy={toogleSubmenu}>
                    <div>
                      {link?.submenu !== "" && (
                        <div
                          className={`${
                            toogleSubmenu === link.name ? "" : "hidden"
                          }`}
                        >
                          {link.submenu?.map((slink, i) => (
                            <Link
                              key={i}
                              to={slink.sublink}
                              onClick={() => {
                                setOpen(false);
                                setToogleSubmenu("");
                              }}
                            >
                              <div className="py-6 pl-10">{slink.name}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </Fade>
                </div>
              ))}
            </div> */}
            <div className="w-full h-[95vh] flex flex-col text-white text-xl py-10 pl-10">
              {links?.map((link, i) => (
                <div key={i}>
                  <div
                    key={i}
                    className="flex justify-between items-center py-6"
                    onClick={() => {
                      toogleSubmenu !== link?.name
                        ? setToogleSubmenu(link?.name)
                        : setToogleSubmenu("");
                    }}
                  >
                    <a
                      className="text-white hover:text-zinc-500"
                      href={link?.link}
                    >
                      {link.name}
                    </a>
                    <div className={`${link?.submenu ? "block" : "hidden"}`}>
                      <Icons.Down
                        className={`text-white text-lg w-3 h-3 duration-200 ${
                          toogleSubmenu === "" && "-rotate-90"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    {link?.submenu !== "" && (
                      <div
                        className={`${
                          toogleSubmenu === link.name ? "" : "hidden"
                        }`}
                      >
                        {link.submenu?.map((slink, i) => (
                          <Link
                            key={i}
                            to={slink.sublink}
                            onClick={() => {
                              setOpen(false);
                              setToogleSubmenu("");
                            }}
                          >
                            <div className="py-6 pl-10">{slink.name}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Modal>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
