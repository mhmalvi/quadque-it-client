import React, { useState } from "react";
import Sidebar from "../../Components/Shared/Sidebar";
import AdminDashboard from "./Dashboard/AdminDashboard";
import AdminBlogs from "./BlogsAdmin/index.jsx";
import AdminCourse from "./CoursesAdmin";
import AdminStudent from "./Student";
import AdminTeacher from "./Teacher";
import StudentEnrollment from "./StudentEnrollment";
import { Route, Routes } from "react-router-dom";

const AdminPanel = () => {
  const [active, setActive] = useState("dashboard");

  const ToogleTab = (tabname) => {
    setActive(tabname);
  };

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
        <Route path={"enrollment"} element={<StudentEnrollment />} />
        <Route path={"students"} element={<AdminStudent />} />
        <Route path="teachers" element={<AdminTeacher />} />
        <Route path={"blogs"} element={<AdminBlogs />} />
      </Routes>
    </div>
  );
};

export default AdminPanel;