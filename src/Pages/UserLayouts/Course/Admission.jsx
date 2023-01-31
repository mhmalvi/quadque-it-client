import React from 'react'
import unsplash from '../../../Asset/Image/unsplash.png';


const Admission = () => {
    return (
        <div className='bg-slate-900'>
        <div className="flex w-2/3 m-auto py-40">
        <div>
          <img src={unsplash} alt="" className="w-392" />
        </div>
        
        <div className="mx-auto pb-14">
          <div className="px-50 pb-14 border rounded-3xl text-zinc-50">
            {" "}
           <div className='font-semibold text-3xl mx-30 pt-7 '>15000 TK </div> 
          <div className='text-xl mx-32 pt-3'> Web Design </div>
          <div className='mx-12 my3 pt-3'> Our new seminar in wordpress 26th june </div>
          <div className='mx-20 '> Our new wordpress 26th june </div><br/><br/>
          <div className='px-20 font-semibold text-3xl'> Payment methode </div>
          
          <div className='mx-7'>
          <div className='py-4 px-21'>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                   Bkash
             </button>
             <button class="bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3">
                    Bank
             </button>
          </div>
          <div class="py-5 px-20 mx-5">
          <button class="bg-indigo-800 hover:bg-blue-700 text-white py-2 px-8 rounded-3xl ">
                   Buy Course
             </button>
          </div>
          </div>


          </div>
            </div>
        
        </div>
        </div>
    )
  }
 export default Admission;