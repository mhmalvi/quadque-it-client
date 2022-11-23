import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/LandingPage';
import CoursePage from './Pages/Course'
import CourseDetail from './Pages/CourseDetail'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/course" element={<CoursePage/>}></Route>
        <Route exact path="/course-detail" element={<CourseDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
