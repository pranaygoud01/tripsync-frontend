import React from 'react';
import { PiGlobeHemisphereWestThin } from "react-icons/pi";
import { Link, useRouter } from '@tanstack/react-router';

const NavBar2 = () => {
  const router = useRouter();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    // Navigate to the home page after logout using TanStack Router
    router.navigate({ to: "/" });
  };

  return (
    <div className='w-full flex justify-between sticky top-0 bg-white items-center max-lg:p-5 px-10 p-5'>
      <Link to="/" className=' text-xl font-bold'>TripSync</Link>
      <div className='flex gap-3'>
        <button className='text-sm rounded-full font-semibold bg-white text-black px-4 py-2 flex gap-1 items-center'>
          <PiGlobeHemisphereWestThin className='text-xl' /> English
        </button>
        <button onClick={handleLogout} className='text-sm cursor-pointer rounded-full font-semibold bg-black text-white px-4 py-2'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar2;
