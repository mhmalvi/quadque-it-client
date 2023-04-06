import './index.css';
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import LandingPage from "./Pages/UserLayouts/LandingPage";
import AboutUs from "./Pages/UserLayouts/About";
import Course from './Pages/UserLayouts/Course';
import CourseDetail from './Pages/UserLayouts/CourseDetail';
import Contact from "./Pages/UserLayouts/Contact";
import Blog from './Pages/UserLayouts/More';
import BlogDetail from './Pages/UserLayouts/More/BlogDetail';
import Gallery from "./Pages/UserLayouts/More/Gallery";
import Stories from "./Pages/UserLayouts/More/Stories";
import StoriesDetail from './Pages/UserLayouts/More/StoriesDetails';
import Login from "./Pages/UserLayouts/Authentication/Login/Login";
import AdminPanel from "./Pages/AdminLayouts/AdminPanel";
import AdminDashboard from './Pages/AdminLayouts/Dashboard/AdminDashboard';
import AdminBlogs from './Pages/AdminLayouts/BlogsAdmin';
import AdminCourse from './Pages/AdminLayouts/CoursesAdmin';
import AdminStudent from "./Pages/AdminLayouts/Student"
import AdminTeacher from "./Pages/AdminLayouts/Teacher"
import StudentEnrollment from './Pages/AdminLayouts/StudentEnrollment';
import Admission from './Pages/UserLayouts/Course/Admission';
import PrivacyPolicy from './Pages/UserLayouts/PrivacyPolicy';
import TermsOfUse from './Pages/UserLayouts/TermsOfUse';
import CopywritePolicy from './Pages/UserLayouts/CopywritePolicy';
import Error404 from './Pages/UserLayouts/Error404';
import Footer from './Pages/UserLayouts/LandingPage/Footer';
import "./App.css";

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
        <Route exact path="gallery" element={<><Navbar /><Gallery /><Footer/></>}></Route>
        <Route exact path="stories" element={<><Navbar /><Stories /><Footer/></>}></Route>
        <Route exact path="stories-detail" element={<><Navbar /><StoriesDetail /></>}></Route>
        <Route exact path="admission" element={<><Navbar /><Admission /></>}></Route>
        <Route exact path="privacy-policy" element={<><Navbar /><PrivacyPolicy /><Footer /></>}></Route>
        <Route exact path="terms-of-use" element={<><Navbar /><TermsOfUse /><Footer /></>}></Route>
        <Route exact path="copywrite-policy" element={<><Navbar /><CopywritePolicy /><Footer /></>}></Route>
        <Route exact path="404" element={<><Error404 /></>}></Route>
        <Route exact path="auth" element={<Login />}></Route>

        <Route exact path="user" element={<AdminPanel />}>
          <Route path={"dashboard"} element={<AdminDashboard />} />
          <Route path={"courses"} element={<AdminCourse />} />
          <Route path={"enrollment"} element={<StudentEnrollment />} />
          <Route path={"students"} element={<AdminStudent />} />
          <Route path="teachers" element={<AdminTeacher />} />
          <Route path={"blogs"} element={<AdminBlogs />} />
        </Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
