import React from 'react'
//import Navbar from '../../../Components/Shared/Navbar/Navbar';
import Header from './Header'
import Courses from './Courses'
import UpcomingCourses from './UpcomingCourses'
import TwoWayCourse from './TwoWayCourse'
import GraphicDesign from './GraphicDesign'
import ProgrammingCourses from './ProgrammingCourses'
import DigitalMarketing from './DigitalMarketing'
import OurStudents from './OurStudents'
import OurStudentsDragable from './OurStudentsDragable'
import OurInstructors from './OurInstructors'
import Partners from './Partners'
import BrowseCourse from './BrowseCourse'
import Footer from './Footer'
import JobOpportunities from './JobOpportunities'

function LandingPageSections({theme}) {
  return (
    <div>
      {/* <Navbar/> */}
      <Header theme={theme}/>
      <Courses theme={theme}/>
      <UpcomingCourses theme={theme}/>
      <TwoWayCourse theme={theme}/>
      <GraphicDesign theme={theme}/>
      <ProgrammingCourses theme={theme}/>
      <DigitalMarketing theme={theme}/>
      <JobOpportunities theme={theme}/>
      <OurStudents theme={theme}/>
      <OurStudentsDragable theme={theme}/>
      <OurInstructors theme={theme}/>
      <Partners theme={theme}/>
      <BrowseCourse theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );

  
}

export default LandingPageSections;
