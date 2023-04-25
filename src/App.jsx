import './index.css';
import React, { useEffect, useState } from "react";
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
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme"): "light"
    )
  const element = document.documentElement;

  const options = [
    {text: "light"},
    {text: "dark"},
  ]

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem("theme", "dark")
        break;

      case 'light':
        element.classList.remove('dark')
        localStorage.setItem("theme", "light")
        break;

      default:
        localStorage.removeItem("theme")
      break
    }
  }, [theme])
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><LandingPage theme={theme}/></>}/>
        <Route exact path="course" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><Course theme={theme}/></>}></Route>
        <Route exact path="/course/course-detail/:id" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><CourseDetail theme={theme}/></>}></Route>
        <Route exact path="about-us" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><AboutUs theme={theme}/></>}></Route>
        <Route exact path="contact" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><Contact theme={theme}/></>}></Route>
        <Route exact path="blog" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><Blog theme={theme}/></>}></Route>
        <Route exact path="blog/blog-detail" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><BlogDetail theme={theme}/></>}></Route>
        <Route exact path="gallery" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><Gallery theme={theme}/><Footer/></>}></Route>
        <Route exact path="stories" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><Stories theme={theme}/><Footer/></>}></Route>
        <Route exact path="stories-detail" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><StoriesDetail theme={theme}/></>}></Route>
        <Route exact path="admission" element={<><Navbar theme={theme} setTheme={setTheme} options={options}/><Admission theme={theme}/></>}></Route>
        <Route exact path="privacy-policy" element={<><Navbar /><PrivacyPolicy /><Footer /></>}></Route>
        <Route exact path="terms-of-use" element={<><Navbar /><TermsOfUse /><Footer /></>}></Route>
        <Route exact path="copywrite-policy" element={<><Navbar /><CopywritePolicy /><Footer /></>}></Route>
        <Route exact path="404" element={<><Error404 /></>}></Route>
        <Route exact path="auth" element={<Login theme={theme}/>}></Route>

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
