import React from 'react'
import Navbar from '../../Components/Shared/Navbar'
import Blog from './Blog'
import BlogDetail from './BlogDetail'


export default function index() 
{
  return (
    <div>
        <Navbar/>
        <Blog/>
        <BlogDetail/>
    </div>
  )
}
