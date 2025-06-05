// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//       Login
//     </div>
//   )
// }

// export default Login


// src/components/auth/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: Replace with your actual login logic
    if (!form.username || !form.password) {
      setError("Please fill all fields");
      return;
    }
    setError("");
    // Simulate login success
    alert("Logged in!");
    navigate("/"); // Go to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 via-pink-50 to-purple-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        {/* Status Bar (optional for web, can remove) */}
        {/* <div className="flex justify-end mb-2">
          <div className="flex gap-2">
            <div className="w-5 h-2 bg-gray-300 rounded"></div>
            <div className="w-4 h-2 bg-gray-300 rounded"></div>
            <div className="w-6 h-2 bg-gray-400 rounded"></div>
          </div>
        </div> */}

        <h2 className="text-3xl font-bold text-neutral-700 mb-2 text-center">LOGIN</h2>
        <p className="text-sm text-gray-500 mb-8 text-center">Sign in to your account</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">Username, Email or Phone</label>
            <input
              type="text"
              name="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition"
              placeholder="Enter your username, email or phone"
              value={form.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-fuchsia-500 font-medium hover:underline"
              onClick={() => navigate("/reset-password")}
            >
              Forgot Password?
            </button>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-blue-500 text-white rounded-2xl font-bold text-lg shadow hover:from-fuchsia-500 hover:to-blue-600 transition"
          >
            Sign in
          </button>
        </form>

        <div className="mt-8 text-center">
          <span className="text-base text-black font-medium">Don’t have an account? </span>
          <button
            className="text-fuchsia-500 font-medium hover:underline ml-1"
            onClick={() => navigate("/register")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
