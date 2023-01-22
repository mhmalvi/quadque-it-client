import './index.css';
import React from "react";
import Navbar from "./Components/Shared/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/About";
import Course from './Pages/Course';
import CourseDetail from './Pages/CourseDetail';
import Contact from "./Pages/Contact";
import Blog from './Pages/Blog';
import BlogDetail from './Pages/Blog/BlogDetail';
import Gallery from "./Pages/Blog/Gallery";
import Stories from "./Pages/Blog/Stories";
import Login from "./Pages/Authentication/Login/Login";

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
      </Routes>
    </div>
  );
}

export default App;
