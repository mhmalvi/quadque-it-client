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
import OurInstructors from './OurInstructors'
import Partners from './Partners'
import BrowseCourse from './BrowseCourse'
import Footer from './Footer'
import JobOpportunities from './JobOpportunities'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Courses/>
      <UpcomingCourses/>
      <JobOpportunities/>
      <TwoWayCourse/>
      <GraphicDesign/>
      <ProgrammingCourses/>
      <DigitalMarketing/>
      <OurStudents/>
      <OurInstructors/>
      <Partners/>
      <BrowseCourse/>
      <Footer/>
    </div>
  )

  
}

export default Home;