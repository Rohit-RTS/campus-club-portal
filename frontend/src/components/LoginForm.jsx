import { useState } from "react";

export default function LoginForm() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handlesubmit(e) {
    e.preventDefault();

    const formdata = {
      email,
      password,
    };

    console.log(formdata);
  }

  return (
    <form onSubmit={handlesubmit}>
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
            value={email}
            onChange={(e) => setemail(e.target.value)}
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
            value={password}
            onChange={(e) => setpassword(e.target.value)}
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

        {/* Bottom text */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?
          <span className="ml-1 cursor-pointer font-medium text-blue-500 hover:underline">
            Register
          </span>
        </p>

      </div>
    </form>
  );
}