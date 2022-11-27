import React from 'react'
import Navbar from '../../Components/Shared/Navbar'
import Blog from './Blog'
import BlogDetail from './BlogDetail'
import Gallery from './Gallery'


export default function index() 
{
  return (
    <div>
        <Navbar/>
        <Blog/>
        <BlogDetail/>
        <Gallery/>
    </div>
  )
}
