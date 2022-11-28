import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
  const [toogleSubmenu, setToogleSubmenu] = useState("");
  return (
    <>
      {links?.map((link) => (
        <div>
          <div className="bg-white lg:bg-transparent text-black lg:text-white text-lg lg:text-base text-left cursor-pointer group">
            <Link to={link.link}>
              <div
                onClick={() => {
                  toogleSubmenu !== link.name
                    ? setToogleSubmenu(link.name)
                    : setToogleSubmenu("");
                }}
                className="px-7 py-6"
              >
                {link.name}
              </div>
            </Link>
            {link.submenu !== "" && (
              <div>
                <div className="absolute top-16 mx-6 text-start hidden group-hover:lg:block hover:lg:block">
                  <div className="bg-white text-black px-10">
                    {link.submenu?.map((slink) => (
                      <div>
                        <Link to={slink.sublink}>
                          <div className="py-3">{slink.name}</div>
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
                      <div>
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
    </>
  );
};

export default NavLinks;
