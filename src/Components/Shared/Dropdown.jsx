import React, { useState } from "react";
import { moreDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {moreDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className="w-full block text-black p-4"
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;