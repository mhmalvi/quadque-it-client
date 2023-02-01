import './index.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import LandingPage from "./Pages/UserLayouts/LandingPage";
import AboutUs from "./Pages/UserLayouts/About";
import Course from './Pages/UserLayouts/Course';
import CourseDetail from './Pages/UserLayouts/CourseDetail';
import Contact from "./Pages/UserLayouts/Contact";
import Blog from './Pages/UserLayouts/Blog';
import BlogDetail from './Pages/UserLayouts/Blog/BlogDetail';
import Gallery from "./Pages/UserLayouts/Blog/Gallery";
import Stories from "./Pages/UserLayouts/Blog/Stories";
import Login from "./Pages/UserLayouts/Authentication/Login/Login";
import AdminPanel from "./Pages/AdminLayouts/AdminPanel";
import AdminDashboard from './Pages/AdminLayouts/Dashboard/AdminDashboard';
import AdminBlogs from './Pages/AdminLayouts/Blogs.jsx/AdminBlogs';
import AdminCourse from './Pages/AdminLayouts/CoursesAdmin';
import AdminStudent from "./Pages/AdminLayouts/Student"
import AdminTeacher from "./Pages/AdminLayouts/Teacher"
import StudentEnrollment from './Pages/AdminLayouts/StudentEnrollment';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<><Navbar /><LandingPage /></>}/>
        <Route exact path="course" element={<><Navbar /><Course /></>}></Route>
        <Route exact path="/course/course-detail" element={<><Navbar /><CourseDetail /></>}></Route>
        <Route exact path="about-us" element={<><Navbar /><AboutUs /></>}></Route>
        <Route exact path="contact" element={<><Navbar /><Contact /></>}></Route>
        <Route exact path="blog" element={<><Navbar /><Blog /></>}></Route>
        <Route exact path="blog/blog-detail" element={<><Navbar /><BlogDetail /></>}></Route>
        <Route exact path="gallery" element={<><Navbar /><Gallery /></>}></Route>
        <Route exact path="stories" element={<><Navbar /><Stories /></>}></Route>
        <Route exact path="auth" element={<Login />}></Route>

        <Route exact path="user" element={<AdminPanel />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path={"courses"} element={<AdminCourse />} />
          <Route path={"enrollment"} element={<StudentEnrollment />} />
          <Route path={"students"} element={<AdminStudent />} />
          <Route path="teachers" element={<AdminTeacher />} />
          <Route path={"blogs"} element={<AdminBlogs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
