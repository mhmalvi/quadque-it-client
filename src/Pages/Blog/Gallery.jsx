import React from 'react'
import video from "../../Asset/Image/video.png";
import Icons from "../../Components/Shared/Icons";
import classroom2 from "../../Asset/Image/classroom2.png";
import library from "../../Asset/Image/library.png";
import collegeroom from "../../Asset/Image/collegeroom.png";
import projection from "../../Asset/Image/projection.png";
import meeting from "../../Asset/Image/meeting.png";
import hallway from "../../Asset/Image/hallway.png";
import librarytop from "../../Asset/Image/librarytop.png";
import confarence from "../../Asset/Image/confarence.png";


const Gallery = () => {
    return (

        <div className='bg-home-color text-white pt-8 px-20  '>



            <div className='flex'>

          <div className=' '>
            <img src={video} alt="" className="rounded-xl md:shrink-0 pl-20" />
            </div>



            <div className="mx-auto pb-14 pl-30">

                
          <div className="font-semibold text-xl px-50 pb-5">
            {" "}
            Our inustute
          </div>

            <div className='font-thin text-l pb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>


          <div className="flex py-4">
          <Icons.Tick/>
            
            <span className="font-poppins font-thin text-l px-5 ">
                
            Flexible Time {" "}
            </span>
          </div>
          <div className="flex py-4">
            <Icons.Tick/>
            <span className="font-poppins font-thin text-l px-5">
            Perfect Work{" "}
            </span>
          </div>
          <div className="flex py-4">
            <Icons.Tick />
            <span className="font-poppins font-thin text-l px-5">
            Client Priority{" "}
            </span>
          </div>
          </div>
          
           </div>

           <div className='px-30'>
           <ul className="md:flex md:items-center text-base text-white font-thin m-0">
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="">
                Home
              </a>
            </li>
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="">
                Courses
              </a>
            </li>
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="">
                About
              </a>
            </li>
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="">
                Blog
              </a>
            </li>
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="">
                Contact Us
              </a>
            </li>
            <li className="md:ml-14">
              <a className=" text-white no-underline" href="">
                English
              </a>
            </li>
           
          </ul>
           </div>

          
           <div className='flex pt-10'>
           <div className=' '>
            <img src={classroom2} alt="" className="rounded-xl md:shrink-0 pl-20" />
            </div>

            <div className=' '>
            <img src={library} alt="" className="rounded-xl md:shrink-0 pl-30" />
            </div>
            </div>

            
            
            <div className='flex pt-10'>
           <div className=' '>
            <img src={collegeroom} alt="" className="rounded-xl md:shrink-0 pl-20" />
            </div>

            <div className=' '>
            <img src={projection} alt="" className="rounded-xl md:shrink-0 pl-20" />
            </div>
            

            
            <div className=' '>
            <img src={meeting} alt="" className="rounded-xl md:shrink-0 pl-20" />
            </div>
            </div>



              
            <div className='flex pt-10'>
           <div className=' '>
            <img src={hallway} alt="" className="rounded-xl md:shrink-0 pl-20" />
            </div>

            <div className=' '>
            <img src={librarytop} alt="" className="rounded-xl md:shrink-0 pl-20" />
            </div>
            

            
            <div className=' '>
            <img src={confarence} alt="" className="rounded-xl md:shrink-0 pl-20" />
            </div>
            </div>



           
           </div>
           


    )
}


export default Gallery