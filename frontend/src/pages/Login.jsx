import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


export default function LoginForm() {

  const navigate = useNavigate();
  const[loginData,setloginData] = useState({
    email: "",
    password :""
   
  });


function handleChange(e){
   const {name,value} = e.target;
     setloginData((prev)=>({
      ...prev,
      [name]:value

     }));

     console.log(loginData);
}

async function handleSubmit(e) {
  e.preventDefault();

     
    try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });

    const data = await response.json();

    console.log(data);
   if (response.ok) {
            alert(data.message);
            navigate("/dashboard");

        } else {
            alert(data.message || "Registration failed");
        }
  } catch (error) {
    console.error(error);
  }
  
}

  return <>
       
     <div className="h-screen w-full flex justify-center items-center">
    <form onSubmit={handleSubmit}>
      <div className="w-96 rounded-2xl bg-white p-8 shadow-xl border border-gray-200">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Login
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Login to your account
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            E-mail
          </label>

          <input
            id="email"
            type="email"
            name = "email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="h-11 w-full rounded-lg border border-gray-300 px-4
                       outline-none transition
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="h-11 w-full rounded-lg border border-gray-300 px-4
                       outline-none transition
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="h-11 w-full rounded-lg bg-blue-500
                     font-semibold text-white
                     transition duration-200
                     hover:bg-blue-600
                     active:scale-[0.98]"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?
             <NavLink to = "/register" path="/register">
             Register
             
             
             </NavLink>
          
        </p>

      </div>
    </form>
    </div>
  

</>

  }