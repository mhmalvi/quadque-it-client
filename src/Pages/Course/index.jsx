import React from 'react'
import Navbar from '../../Components/Shared/Navbar'
import Header from './Header'
import CourseGallery from './CourseGallery'

export default function index() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <CourseGallery/>
    </div>
  )
}
