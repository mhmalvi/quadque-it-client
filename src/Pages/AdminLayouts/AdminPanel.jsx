import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../Components/Shared/Sidebar";
import { useLocation } from "react-router-dom";
import AdminCourse from "./Courses/AdminCourse";
import AdminBlogs from "./Blogs.jsx/AdminBlogs";

const AdminPanel = () => {
  const location = useLocation();
  const [active, setActive] = useState("courses");

  const ToogleTab = (tabname) => {
    setActive(tabname);
  };

  useEffect(() => {
    console.log(location);
    if (location.pathname === "/admin-panel") {
      document.getElementById("Navbar").style.display = "none";
    }
  }, []);

  return (
    <div className="flex flex-row">
      <div>
        <Sidebar active={active} ToogleTab={ToogleTab} />
      </div>

      {active === "courses" ? <AdminCourse /> : null}
      {active === "blogs" ? <AdminBlogs /> : null}
    </div>
  );
};

export default AdminPanel;
