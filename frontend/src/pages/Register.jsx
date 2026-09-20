import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
    year: "",
    rollNumber: "",
    phone: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">

        <form onSubmit={handleSubmit}>

          <div className="w-[450px] rounded-2xl bg-white p-8 shadow-xl border border-gray-200">

            {/* Heading */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-800">
                Create Account
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Register for Campus Club Portal
              </p>
            </div>


            {/* Name */}
            <div className="mb-5">

              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="h-11 w-full rounded-lg border border-gray-300 px-4
                           outline-none transition
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="h-11 w-full rounded-lg border border-gray-300 px-4
                           outline-none transition
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

            </div>


            {/* Department + Year */}
            <div className="flex gap-4">

              {/* Department */}
              <div className="mb-5 w-1/2">

                <label
                  htmlFor="department"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Department
                </label>

                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="h-11 w-full rounded-lg border border-gray-300 px-3
                             outline-none transition
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select</option>
                  <option value="IT">IT</option>
                  <option value="CSE">CSE</option>
                  <option value="ENTC">ENTC</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                </select>

              </div>


              {/* Year */}
              <div className="mb-5 w-1/2">

                <label
                  htmlFor="year"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Year
                </label>

                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="h-11 w-full rounded-lg border border-gray-300 px-3
                             outline-none transition
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>

              </div>

            </div>


            {/* Roll Number */}
            <div className="mb-5">

              <label
                htmlFor="rollNumber"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Roll Number
              </label>

              <input
                id="rollNumber"
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                placeholder="Enter your roll number"
                className="h-11 w-full rounded-lg border border-gray-300 px-4
                           outline-none transition
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

            </div>


            {/* Phone */}
            <div className="mb-5">

              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="h-11 w-full rounded-lg border border-gray-300 px-4
                           outline-none transition
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

            </div>


            {/* Password */}
            <div className="mb-5">

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
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="h-11 w-full rounded-lg border border-gray-300 px-4
                           outline-none transition
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

            </div>


            {/* Confirm Password */}
            <div className="mb-6">

              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
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
              Register
            </button>


            {/* Bottom text */}
            <p className="mt-6 text-center text-sm text-gray-500">

              Already have an account?

              <NavLink
                to="/login"
                className="ml-1 font-semibold text-blue-500 hover:text-blue-600"
              >
                Login
              </NavLink>

            </p>

          </div>

        </form>

      </div>
    </>
  );
}