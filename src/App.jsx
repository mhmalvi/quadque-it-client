import React from "react";
import Navbar from "./Components/Shared/Navbar";
import Nav from "./Components/Shared/Nav"
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/LandingPage';
import AboutUs from "./Pages/About";
import Course from './Pages/Course';
import CourseDetail from './Pages/CourseDetail';
import Contact from "./Pages/Contact";
import Blog from './Pages/Blog';
import BlogDetail from './Pages/Blog/BlogDetail'

function App() {
  return (
    <div>   
{/*       <Navbar/>  */}  
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/course" element={<Course/>}></Route>
        <Route exact path="/course-detail" element={<CourseDetail/>}></Route>
        <Route exact path="/about-us" element={<AboutUs/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/blog" element={<Blog/>}></Route>
        <Route exact path="/blog-detail" element={<BlogDetail/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
