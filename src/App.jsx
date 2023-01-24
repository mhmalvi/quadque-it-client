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
import AdminLayout from "./Pages/AdminLayouts/AdminPanel"

function App() {
  return (
    <div>   
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route exact path="/course" element={<Course/>}></Route>
        <Route exact path="/course/course-detail" element={<CourseDetail/>}></Route>
        <Route exact path="/about-us" element={<AboutUs/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/blog" element={<Blog/>}></Route>
        <Route exact path="/blog/blog-detail" element={<BlogDetail/>}></Route>
        <Route exact path="/gallery" element={<Gallery/>}></Route>   
        <Route exact path="/stories" element={<Stories/>}></Route>  
        <Route exact path="/auth" element={<Login/>}></Route>   
        <Route exact path="/admin-panel" element={<AdminLayout/>}></Route>    
      </Routes>
    </div>
  );
}

export default App;
