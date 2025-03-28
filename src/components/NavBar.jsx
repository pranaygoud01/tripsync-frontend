import { Link } from '@tanstack/react-router'
import React from 'react'

const NavBar = () => {
  const token=localStorage.getItem("token");
  
  return (
    <div className='w-full flex sticky top-0 z-30 justify-between items-center py-5 max-lg:p-5 max-lg:px-5 px-10 bg-white '>
        <h1 className='font-bold text-xl'>Trip<span className=''>Sync</span></h1>
        <ul className='flex gap-4 items-center max-lg:hidden font-semibold  text-sm '>
            <li>About</li>
            <li>Services</li>
            <li><a href='#testimonials'>Testimonials</a></li>
            
        </ul>
        <Link to={token?`/generatetrip`:`/signup`} className='font-semibold text-white max-lg:text-xs bg-black text-sm px-4 py-2 rounded-full'>Get started</Link>
    </div>
  )
}

export default NavBar