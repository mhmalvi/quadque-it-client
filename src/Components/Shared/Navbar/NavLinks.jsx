import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";
import { motion } from "framer-motion";
import Icons from "../Icons"


const NavLinks = ({theme, setTheme}) => {
  const pathname = window.location.pathname;
  const [toogleSubmenu, setToogleSubmenu] = useState("");
  const [isChecked, setIsChecked] = useState(`${theme==="dark"? true:false}`)

  const toggleSwitch = () => {
    setIsChecked(!isChecked)
    if (!isChecked) {     
      setTheme("dark")
    } else{
      setTheme("light")
    }
  }
  // console.log("pathname", pathname);

  // console.log("rherherhh",links[3]?.submenu?.map(sub=> sub.sublink));
  return (
    <>
      <div className={`lg:flex z-[999] bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg lg:backdrop-filter-none lg:bg-transparent border border-white border-opacity-30 lg:border-none shadow-2xl shadow-[#ffffff20] lg:shadow-none ${theme==="light" && pathname!=="/" ? "text-black":"text-white"} text-center text-xl lg:text-base rounded-md cursor-pointer mx-2`}>
        {links?.map((link,i) => (
          <div key={i} className="lg:rounded-3xl">
            <div className="group">
              <Link to={link?.link}>
                <div
                  onClick={() => {
                    toogleSubmenu !== link?.name
                      ? setToogleSubmenu(link?.name)
                      : setToogleSubmenu("");
                  }}
                  className="hover:-translate-y-2 duration-300 px-7 py-10"
                >
                  {link.name}
                  <div className={`${(link?.link===pathname || link?.submenu?.find(sub=> sub?.sublink===pathname)) ? "w-full":"w-0"} duration-500 h-1 ${theme==="light" && pathname!=="/" ? "bg-black":"bg-white"} rounded-full`}></div>
                </div>
              </Link>
              {link?.submenu !== "" && (
                <div className="opacity-0 lg:absolute lg:top-4 group-hover:opacity-100 group-hover:top-0 duration-1000">
                  <div className="absolute top-20 mx-6 text-center hidden group-hover:lg:block hover:lg:block w-50">
                    <div className="backdrop-filter backdrop-blur-sm bg-white  text-black rounded-sm px-10">
                      {link.submenu?.map((slink,i) => (
                        <div key={i}>
                          <Link to={slink.sublink}>
                            <div className="w-4 h-4 absolute -top-1 left-1 bg-white rotate-45"></div>
                            <div className="w-full hover:text-brand-color py-3 text-start">
                              {slink.name}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Mobile Submenu */}
                  <div
                    className={`${
                      toogleSubmenu === link.name ? "lg:hidden" : "hidden"
                    }`}
                  >
                    {link.submenu?.map((slink,i) => (
                      <div key={i}>
                        <div className="">
                          <Link to={slink.sublink}>
                            <div className="py-6 pl-14">{slink.name}</div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {/* <div className="flex">
        {theme==="dark" && <Icons.Moon className="w-[1rem] mb-2 mr-2 duration-700"/>}
        <Switch checkedChildren="Dark" unCheckedChildren="Light" onChange={onChange} checked={isChecked} className="mt-10"/>
        {theme==="light" && <Icons.Sun className="w-[1.5rem] mb-1 ml-2 duration-700"/>}
      </div> */}
      <div className="flex">
        {theme==="dark" && <Icons.Moon title="Dark" className="w-[1.2rem] mb-3 mr-2 duration-700"/>}
        {theme==="light" && <Icons.Sun title="Light" className="w-[1.5rem] mb-3 mr-2 duration-700"/>}
          <div className="switch mt-10" title={`${theme==="dark"? "Go light":"Go dark"}`} data-isOn={isChecked} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
      </div>
      </div>
    </>
  );
};

export default NavLinks;
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};