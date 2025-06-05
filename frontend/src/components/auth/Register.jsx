// src/components/auth/Register.jsx
import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here
    alert("Registered!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 via-pink-50 to-purple-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl">
        {/* Header/Profile */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img
              src="https://placehold.co/64x64"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-blue-400 shadow"
            />
            <div>
              <div className="text-gray-700 text-lg font-semibold">Welcome,</div>
              <div className="text-blue-700 text-2xl font-bold">Jamelia</div>
            </div>
          </div>
          {/* Menu Icon */}
          <button className="p-2 rounded-full hover:bg-blue-50 transition">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
              <circle cx="14" cy="6" r="1.5" />
              <circle cx="14" cy="14" r="1.5" />
              <circle cx="14" cy="22" r="1.5" />
            </svg>
          </button>
        </div>

        {/* Registration Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            value={form.confirm}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-blue-500 text-white py-3 rounded-lg font-semibold text-lg shadow hover:from-pink-500 hover:to-blue-600 transition"
          >
            Register
          </button>
        </form>

        {/* Categories */}
        <div className="mt-10">
          <div className="text-gray-700 text-xl font-semibold mb-4">Categories</div>
          <div className="flex flex-wrap gap-6 justify-between">
            {[
              { name: "Plants", color: "from-green-300 to-green-500", icon: "🌱" },
              { name: "Animals", color: "from-yellow-200 to-yellow-400", icon: "🐾" },
              { name: "Food", color: "from-pink-200 to-pink-400", icon: "🍎" },
              { name: "Nature", color: "from-blue-200 to-blue-400", icon: "🌳" },
              { name: "Objects", color: "from-purple-200 to-purple-400", icon: "📦" },
            ].map((cat) => (
              <div
                key={cat.name}
                className={`flex flex-col items-center group cursor-pointer`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${cat.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition`}
                >
                  <span className="text-2xl">{cat.icon}</span>
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-700 group-hover:text-pink-500 transition">
                  {cat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
