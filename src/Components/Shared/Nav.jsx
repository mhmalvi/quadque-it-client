import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import Logo from "../../Asset/Image/Logo.svg";
import Icons from "../../Components/Shared/Icons";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
    <div className="w-full absolute top-0 bg-transparent"></div>
    <div className="w-2/3 m-auto md:flex items-center justify-between px-4 py-2">
        <div className="font-poppins text-gray-800 font-bold text-2xl coursor-pointer flex items-center">
        </div>
        <ul className="md:flex md:items-center text-lg text-black font-semibold m-0">
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
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
        <img src={Logo} alt="QIT logo" />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div/>
    </>
  );
}

export default Navbar;