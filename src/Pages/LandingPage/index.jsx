import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Courses from './Courses'
import UpcomingCourses from './UpcomingCourses'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Courses/>
      <UpcomingCourses/>
    </div>
  )
}

export default Home