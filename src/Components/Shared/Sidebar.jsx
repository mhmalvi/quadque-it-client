import React from "react";
import { useState } from "react";
import Logo from "../../Asset/Image/Logo.svg";
import Icons from "./Icons";
import { Link } from "react-router-dom";

const Sidebar = ({active, ToogleTab}) => {
/*   const [active, setActive] = useState("dashboard");

  const ToogleTab = (tabname) => {
    setActive(tabname);} */


  return (
    <div className="w-66 h-screen bg-black overflow-x-hidden text-white">
      <div>
        <img src={Logo} alt="" className="m-auto py-10" />
      </div>
      <Link to={"/dashboard"}>
        <div
          className={` ${
            active === "dashboard"
              ? "bg-gradient-to-r from-indigo-800 to-indigo-200"
              : ""
          }`}
        >
          <div
            onClick={() => ToogleTab("dashboard")}
            className="flex items-center text-base cursor-pointer py-3 ml-10"
          >
            <span className="font-thin">Dashboard</span>
          </div>
        </div>
      </Link>

      <div
        className={` ${
          active === "courses"
            ? "bg-gradient-to-r from-indigo-800 to-indigo-200"
            : ""
        }`}
      >
        <div
          onClick={() => ToogleTab("courses")}
          className="flex items-center text-base cursor-pointer py-3 ml-10"
        >
          <span className="font-thin">Courses</span>
        </div>
      </div>

      <div
        className={` ${
          active === "student-courses"
            ? "bg-gradient-to-r from-indigo-800 to-indigo-200"
            : ""
        }`}
      >
        <div
          onClick={() => ToogleTab("student-courses")}
          className="flex items-center text-base cursor-pointer py-3 ml-10"
        >
          <span className="font-thin">My Courses</span>
        </div>
      </div>

      <div
        className={` ${
          active === "students"
            ? "bg-gradient-to-r from-indigo-800 to-indigo-200"
            : ""
        }`}
      >
        <div
          onClick={() => ToogleTab("students")}
          className="flex items-center text-base cursor-pointer py-3 ml-10"
        >
          <span className="font-thin">Students</span>
        </div>
      </div>

      <div
        className={` ${
          active === "teachers"
            ? "bg-gradient-to-r from-indigo-800 to-indigo-200"
            : ""
        }`}
      >
        <div
          onClick={() => ToogleTab("teachers")}
          className="flex items-center text-base cursor-pointer py-3 ml-10"
        >
          <span className="font-thin">Teachers</span>
        </div>
      </div>

      <div
        className={` ${
          active === "blogs"
            ? "bg-gradient-to-r from-indigo-800 to-indigo-200"
            : ""
        }`}
      >
        <div
          onClick={() => ToogleTab("blogs")}
          className="flex items-center text-base cursor-pointer py-3 ml-10"
        >
          <span className="font-thin">Blogs</span>
        </div>
      </div>

      <div
        className={` ${
          active === "gallery"
            ? "bg-gradient-to-r from-indigo-800 to-indigo-200"
            : ""
        }`}
      >
        <div
          onClick={() => ToogleTab("gallery")}
          className="flex items-center text-base cursor-pointer py-3 ml-10"
        >
          <span className="font-thin">Gallery</span>
        </div>
      </div>

      <div
        className={` ${
          active === "stories"
            ? "bg-gradient-to-r from-indigo-800 to-indigo-200"
            : ""
        }`}
      >
        <div
          onClick={() => ToogleTab("stories")}
          className="flex items-center text-base cursor-pointer py-3 ml-10"
        >
          <span className="font-thin">Success Stories</span>
        </div>
      </div>

      <div className="">
        <div className="flex items-center text-base cursor-pointer py-4 ml-10">
          <Icons.Logout />
          <span className="text-red-600 font-thin ml-1">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
