import React from 'react'
import {Link} from "@tanstack/react-router"
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  const token=localStorage.getItem("token");
  
  return (
    <>
    
    <div className='h-[50vh] max-lg:h-fit w-full gap-5 max-lg:gap-2 max-lg:py-16  flex justify-center max-lg:px-4 items-center flex-col'>
    <div class="absolute inset-0 -z-10 h-[150vh]  max-lg:h-[100vh] w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <p className='text-2xl font-semibold max-lg:text-lg max-lg:text-center flex gap-2 bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text'>Welcome to TripSync AI Powered Trip Planner </p>
        <h1 className='font-bold text-center max-lg:text-2xl text-5xl'>Plan smarter, travel better.</h1>
        <p className=' text-center w-8/12 max-lg:w-full font-semibold text-neutral-700 max-lg:text-xs'>TripSync uses AI to create personalized trip itineraries just for you.<br/> Enter your preferences, budget, and dates—let us handle the rest. Your perfect adventure starts here!</p>
        <Link to={token?`/generatetrip`:`/signup`} className='font-semibold text-white bg-black text-sm px-4 py-2 max-lg:text-xs max-lg:mt-3 rounded-full items-center flex gap-2'>Get started <FaArrowRight/></Link>
    </div>
    </>
  )
}

export default Hero