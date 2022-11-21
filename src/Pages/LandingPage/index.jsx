import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Courses from './Courses'
import UpcomingCourses from './UpcomingCourses'
import JobOpportunities from './JobOpportunities'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Courses/>
      <UpcomingCourses/>
      <JobOpportunities/>
    </div>
  )

  
}

export default Home;