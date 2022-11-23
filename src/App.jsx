import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/LandingPage';
import CoursePage from './Pages/Course'
import CourseDetail from './Pages/CourseDetail'
import AboutUs from './Pages/About'
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/course" element={<CoursePage/>}></Route>
        <Route exact path="/course-detail" element={<CourseDetail/>}></Route>
        <Route exact path="/about-us" element={<AboutUs/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
