import React from 'react'
import Navbar from '../../Components/Shared/Navbar'
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
      <TwoWayCourse/>
      <GraphicDesign/>
      <ProgrammingCourses/>
      <DigitalMarketing/>
      <JobOpportunities/>
      <OurStudents/>
      <OurInstructors/>
      <Partners/>
      <BrowseCourse/>
      <Footer/>
    </div>
  )

  
}

export default Home;