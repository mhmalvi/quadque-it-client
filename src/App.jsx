import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/About";
import CoursePage from './Pages/Course';
import CourseDetail from './Pages/CourseDetail';
import Home from './Pages/LandingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/course" element={<CoursePage/>}></Route>
        <Route exact path="/course-detail" element={<CourseDetail/>}></Route>
        <Route exact path="/about-us" element={<AboutUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
