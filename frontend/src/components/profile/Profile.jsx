// import React from 'react'

// const Profile = () => {
//   return (
//     <div>
//       Profile
//     </div>
//   )
// }

// export default Profile

// src/components/profile/Profile.jsx
import React, { useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({
    name: "Jamelia",
    email: "jamelia@gmail.com",
    mobile: "************",
    dob: "2002-05-31",
    country: "India",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile saved!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 via-pink-50 to-purple-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl">
        {/* Header/Profile Picture */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="relative">
            <img
              src="https://placehold.co/166x170"
              alt="Profile"
              className="w-40 h-44 rounded-full border-4 border-blue-700 shadow"
            />
            <button
              className="absolute bottom-4 right-4 bg-blue-700 hover:bg-blue-500 text-white rounded-full p-2 shadow transition"
              title="Edit photo"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5l-4 1 1-4L16.5 3.5z" />
              </svg>
            </button>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-2">Personal Information</h2>
            <p className="text-gray-500">Manage your profile details</p>
          </div>
        </div>

        {/* Profile Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-base font-bold text-gray-800 mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-base font-bold text-gray-800 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-base font-bold text-gray-800 mb-1">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={form.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-base font-bold text-gray-800 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-base font-bold text-gray-800 mb-1">Country/Region</label>
            <input
              type="text"
              name="country"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              value={form.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="w-48 py-3 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-blue-500 text-white rounded-lg font-semibold text-lg shadow hover:from-pink-500 hover:to-blue-600 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
