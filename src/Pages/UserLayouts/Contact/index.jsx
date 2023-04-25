import React from 'react'
import Contact from './Contact'
import Footer from '../LandingPage/Footer'


const index = ({theme}) =>
{
  return (
    <div>
        <Contact theme={theme}/>
        <Footer/>
    </div>
  )
}
export default index;