import React, { useRef, useState } from "react";
import Input from "../components/Input";
import { Link } from "@tanstack/react-router";
import axios from "axios";

const SignUp = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Prevents multiple submissions

  const handleSubmit = async () => {
    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://tripsync-backend-yovp.onrender.com/api/user/signup", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        // ✅ Save token & Navigate using window.location.href
        localStorage.setItem("token", response.data.token);
            nameRef.current.value="";
            emailRef.current.value="";
            passwordRef.current.value="";
            setError("Account is Created now you can login")// ✅ Redirect to login page
      } else {
        setError(response.data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false); // ✅ Reset loading state
    }
  };

  return (
    <div className="w-full max-lg:h-fit h-[100vh] max-lg:flex-col flex gap-10">
      <img
        src="https://images.unsplash.com/photo-1699811250901-36eadb90f547?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-full max-lg:h-[20vh] w-[55%] max-lg:w-full object-cover object-center"
        alt="Sign Up"
      />
      <div className="flex flex-col w-[40%] max-lg:w-full max-lg:p-7 max-lg:pb-15 max-lg:py-3 p-26">
        <h1 className="font-bold text-3xl mt-2">Create your Account</h1>
        <p className="font-semibold text-sm text-neutral-800 mt-2">
          Already have an account?{" "}
          <span className="underline text-blue-500">
            <Link to="/login">Login here</Link>
          </span>
        </p>

        <div className="mt-8 flex flex-col gap-5">
          <Input type="text" ref={nameRef} title="Name" name="name" placeholder="Enter your name" />
          <Input type="text" ref={emailRef} title="Email" name="email" placeholder="Enter your email" />
          <Input type="password" ref={passwordRef} title="Password" name="password" placeholder="Enter your password" />
          
          {error && <p className="font-semibold text-red-600 text-xs">{error}</p>}
          
          <button 
            onClick={handleSubmit} 
            className="bg-black cursor-pointer text-white rounded-full font-semibold text-center py-3"
            disabled={loading} 
          >
            {loading ? "Please wait..." : "Create an account"}
          </button>
        </div>

        <div className="flex items-center mt-5 gap-2">
          <div className="border-t-2 border-t-neutral-200 w-full"></div>
          <span className="text-neutral-800">or</span>
          <div className="border-t-2 border-t-neutral-200 w-full"></div>
        </div>

        <button onClick={()=>setError("Feature is under development stage use above method")} className="w-full bg-white rounded-full border-neutral-400 border py-2 font-bold mt-4 flex justify-center items-center gap-3">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
            className="w-8 h-8 object-cover"
            alt="Google Logo"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
