import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
  const [toogleSubmenu, setToogleSubmenu] = useState("");
  return (
    <>
      <div className="lg:flex z-[999] bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg lg:backdrop-filter-none lg:bg-transparent border border-white border-opacity-30 lg:border-none shadow-2xl shadow-[#ffffff20] lg:shadow-none lg:text-white text-center text-xl lg:text-base rounded-md cursor-pointer mx-2">
        {links?.map((link) => (
          <div className="lg:rounded-3xl">
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
                </div>
              </Link>
              {link?.submenu !== "" && (
                <div className="opacity-0 lg:absolute lg:top-4 group-hover:opacity-100 group-hover:top-0 duration-1000">
                  <div className="absolute top-20 mx-6 text-center hidden group-hover:lg:block hover:lg:block w-50">
                    <div className="backdrop-filter backdrop-blur-sm bg-white  text-black rounded-sm px-10">
                      {link.submenu?.map((slink) => (
                        <div>
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
                    {link.submenu?.map((slink) => (
                      <div>
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
      </div>
    </>
  );
};

export default NavLinks;
