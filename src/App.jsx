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
import AdminLayout from "./Pages/AdminLayouts/AdminPanel";
import AdminDashboard from './Pages/AdminLayouts/Dashboard/AdminDashboard';
import AdminBlogs from './Pages/AdminLayouts/Blogs.jsx/AdminBlogs';
import AdminCourse from './Pages/AdminLayouts/CoursesAdmin';
import AdminStudent from "./Pages/AdminLayouts/Student"
import AdminTeacher from "./Pages/AdminLayouts/Teacher"
import CoursesStudent from './Pages/AdminLayouts/CoursesStudent';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/course" element={<Course />}></Route>
        <Route
          exact
          path="/course/course-detail"
          element={<CourseDetail />}
        ></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/blog/blog-detail" element={<BlogDetail />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route exact path="/stories" element={<Stories />}></Route>
        <Route exact path="/auth" element={<Login />}></Route>
        
        <Route exact path="/admin-panel" element={<AdminLayout />}>
{/*           <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path={"/courses"} element={<AdminCourse />} />
          <Route path={"/student-courses"} element={<CoursesStudent />} />
          <Route path={"/students"} element={<AdminStudent />} />
          <Route path="/teachers" element={<AdminTeacher />} />
          <Route path={"/blogs"} element={<AdminBlogs />} /> */}
        </Route>
        <Route
          exact
          path="/course-detail-panel"
          element={<CourseDetail />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
