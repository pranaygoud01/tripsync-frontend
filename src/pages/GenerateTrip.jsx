import React from 'react'
import NavBar2 from '../components/NavBar2'
import TripForm from '../components/TripForm'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from '@tanstack/react-router';
const GenerateTrip = () => {
  const name=localStorage.getItem("username")
  return (
    <div className='w-full h-fit'>
       <NavBar2/>
       
       <div className='w-full gap-5 max-lg:flex-col flex h-[90vh]'>
           <div className='w-[40%] max-lg:w-full max-lg:p-5 max-lg:gap-2   flex flex-col gap-5 p-14 h-full'>
              <h1 className='text-2xl font-semibold'>Hey,<span className='bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text'>{name}</span></h1>
              <p className='text-5xl max-lg:text-3xl max-lg:leading-10 leading-15'>
                Together,Let's make this Trip unforgettable! with <span className='text-neutral-500'>ultimate Trip Planning </span>Experience!
              </p>
             <p className=' text-md max-lg:text-xs '>Submit Your Request
(Once submitted, our AI-powered system will generate a personalized travel plan for you!)
<br/>

<span className='text-neutral-600'>Thank you for choosing our AI-Powered Trip Planner. We look forward to making your journey unforgettable</span></p>

<Link to="/" className='font-semibold bg-black rounded-full text-white max-lg:text-xs py-3 mt-5 px-8 w-fit flex gap-3 items-center'>Learn more about us <FaArrowRight/></Link>
           </div>
           <div className='w-[60%] max-lg:w-full max-lg:h-fit py-6  h-fit'>
                <TripForm/>
       </div>
       </div>
       
      
    </div>
  )
}

export default GenerateTrip