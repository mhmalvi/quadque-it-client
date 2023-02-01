import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../Components/Shared/Sidebar";
import AdminDashboard from "./Dashboard/AdminDashboard";
import AdminBlogs from "./Blogs.jsx/AdminBlogs";
import AdminCourse from "./CoursesAdmin";
import AdminStudent from "./Student";
import AdminTeacher from "./Teacher";
import StudentEnrolment from "./StudentEnrolment";
import { Route, Routes, useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const location = useLocation();
  const [active, setActive] = useState("dashboard");

  const ToogleTab = (tabname) => {
    setActive(tabname);
  };

/*   useEffect(() => {
    console.log(location);
    if (location.pathname === "/admin-panel") {
      document.getElementById("Navbar").style.display = "none";
    }
  }, []); */

  return (
    <div className="flex flex-row">
      <div>
        <Sidebar active={active} ToogleTab={ToogleTab} />
      </div>

      {/* {active === "dashboard" ? <AdminDashboard /> : null}
      {active === "courses" ? <AdminCourse /> : null}
      {active === "enrolment" ? <StudentEnrolment /> : null}
      {active === "students" ? <AdminStudent /> : null}
      {active === "teachers" ? <AdminTeacher /> : null}
      {active === "blogs" ? <AdminBlogs /> : null} */}
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path={"courses"} element={<AdminCourse />} />
        <Route path={"enrolment"} element={<StudentEnrolment />} />
        <Route path={"students"} element={<AdminStudent />} />
        <Route path="teachers" element={<AdminTeacher />} />
        <Route path={"blogs"} element={<AdminBlogs />} />
      </Routes>
    </div>
  );
};

export default AdminPanel;