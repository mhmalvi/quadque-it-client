import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Courses from './Courses'
import UpcomingCourses from './UpcomingCourses'
import TwoWayCourse from './TwoWayCourse'
import GraphicDesign from './GraphicDesign'
import ProgrammingCourses from './ProgrammingCourses'
import DigitalMarketing from './DigitalMarketing'
import OurStudents from './OurStudents'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Courses/>
      <UpcomingCourses/>
      <TwoWayCourse/>
      <GraphicDesign/>
      <ProgrammingCourses/>
      <DigitalMarketing/>
      <OurStudents/>
    </div>
  )
}

export default Home