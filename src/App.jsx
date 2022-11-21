import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from './Pages/LandingPage';
import CoursePage from './Pages/Course'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<CoursePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
