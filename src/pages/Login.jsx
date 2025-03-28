import React, { useRef, useState } from 'react'
import Input from '../components/Input'
import { Link, useNavigate } from '@tanstack/react-router'
import axios from 'axios';

const Login = () => {
  const emailRef=useRef();
  const [error,SetError]=useState("");
  const navigate=useNavigate();
  const passwordRef=useRef();
  const handleSubmit=async ()=>{
    const email=emailRef.current?.value;
    const password=passwordRef.current?.value;
    if(!email||!password){
      SetError("All fields are required");
    }
    const response= await axios.post("https://tripsync-backend-yovp.onrender.com/api/user/login",{
      email,password
    })
   const data=await response.data;
   if(data.token){
    localStorage.setItem("token", data.token); // Store JWT token
        localStorage.setItem("username", data.name); // Store username
        SetError("Login Successful")
        navigate({ to: "/generatetrip" });
   }
   else {
    alert(data.message);
  }
  }
  return (
    <>
  
    <div className='w-full h-[100vh] max-lg:h-fit flex max-lg:flex-col gap-10'>
       <img src='https://images.unsplash.com/photo-1611159063981-b8c8c4301869?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
       className='h-full w-[55%] max-lg:w-full max-lg:h-[20vh] object-cover  object-center'/>
       <div className='flex flex-col w-[40%] max-lg:w-full max-lg:p-7 max-lg:pt-3 p-26'>
           
         <h1 className='font-bold mt-2 text-3xl'>Login to your Account</h1>
         <p className='font-semibold text-sm text-neutral-800 mt-2'>You don't have an account <span className='underline text-blue-500'><Link to="/signup">Create here</Link></span></p>
          <div className='mt-8 flex flex-col gap-5'>
            
            <Input type="text" ref={emailRef} name="email" title="Email" placeholder="Enter your email"/>
            <Input type="password" ref={passwordRef} name="password" title="Password" placeholder="Enter your password"/>
            {error&&<p className='font-semibold text-red-600 text-xs'>{error}</p>}
            <button onClick={handleSubmit} className='bg-black cursor-pointer text-white rounded-full font-semibold text-center  py-3'>Login to your account</button>
            </div>

        <div className='flex items-center  mt-5 gap-2'>
            <div className='border-t-2 border-t-neutral-200 w-full'></div>
            <span className='text-neutral-800'>or</span>
            <div className='border-t-2 border-t-neutral-200 w-full'></div>
        </div>
        <button onClick={()=>SetError("Feature is under development stage use above method")}
         className='w-full bg-white rounded-full border-neutral-400 border py-2 font-bold mt-4 flex justify-center items-center gap-3'><span><img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png' className='w-8 h-8 object-cover'/></span>Continue with Google</button>
       </div>

    </div>
    </>
  )
}

export default Login