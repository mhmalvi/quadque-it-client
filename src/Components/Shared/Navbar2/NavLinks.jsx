import React from "react";
import { Link } from "react-router-dom";
//import { links } from "./MyLinks";

const NavLinks = () => {
  const links = [
    { name: "Course" },
    { name: "About" },
    { name: "More", submenu: [
    {
        name: "Blog",
    },
    {
        name: "Gallery",
    },
    {
        name: "Stories",
    }
    ] },
    { name: "Contact" },
  ];
  return (
    <>
      {links.map((link) => (
        <div>
            <div className="text-left cursor-pointer">
                <div className="px-7 py-6">{link.name}</div>
            </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
