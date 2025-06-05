// src/components/home/Home.js

import React from "react";

export default function Home() {
  return (
    <div className="relative w-[390px] h-[844px] bg-white overflow-hidden rounded-[50px] mx-auto shadow-lg">
      {/* Status Bar */}
      <div className="absolute left-0 top-0 w-[390px] h-[30px] flex items-center justify-end pr-5">
        {/* You can use SVGs or images for status icons */}
        <div className="flex gap-2 mt-2">
          <div className="w-5 h-3.5 bg-gray-300 rounded"></div>
          <div className="w-4 h-3.5 bg-gray-300 rounded"></div>
          <div className="w-6 h-3.5 bg-gray-400 rounded"></div>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="absolute left-[21px] top-[93px]">
        <img
          src="https://placehold.co/61x57"
          alt="Profile"
          className="w-[61px] h-[57px] rounded-full border border-[#242760]"
        />
      </div>

      {/* Welcome Text */}
      <div className="absolute left-[99px] top-[99px] text-center">
        <div className="text-black text-[16px] font-medium leading-[22px]">Welcome,</div>
        <div className="text-black text-[20px] font-medium leading-[22px]">Jamelia</div>
      </div>

      {/* Start the Quest Card */}
      <div className="absolute left-[38px] top-[200px] w-[310px] h-[173px] bg-[#F89AEE]/[0.75] rounded-[15px] flex flex-col items-center justify-center">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="absolute top-[19px] left-1/2 -translate-x-1/2 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow">
            {/* Camera or Quest icon */}
            <div className="w-[33px] h-[33px] border-2 border-white rounded-full"></div>
          </div>
          <div className="absolute top-[87px] left-1/2 -translate-x-1/2 w-[179px] text-center text-[24px] font-semibold text-[#3c3c43]/60 font-['Public Sans']">
            Start the Quest
          </div>
          <div className="absolute top-[126px] left-1/2 -translate-x-1/2 w-[177px] text-center text-[12px] text-[#3c3c43]/60 font-['Public Sans']">
            Click here to add an image
          </div>
        </div>
      </div>

      {/* Categories Title */}
      <div className="absolute left-[21px] top-[409px] text-black text-[20px] font-medium leading-[22px]">
        Categories
      </div>

      {/* Categories Row */}
      <div className="absolute left-[18px] top-[449px] flex gap-[15px]">
        {/* Category Card Example: Plants */}
        <div className="relative w-[60px] h-[84px] flex flex-col items-center">
          <div className="w-[60px] h-[60px] bg-white shadow-md rounded-full border border-[#F9B1F2] flex items-center justify-center">
            {/* Replace with your SVG/icon */}
            <div className="w-[33px] h-[33px] border-2 border-[#F9B1F2] rounded-full"></div>
          </div>
          <div className="mt-2 text-[#EB5757] text-[11px] font-semibold uppercase tracking-[.055em] font-['Public Sans']">
            Plants
          </div>
        </div>
        {/* Repeat for Animals, Food, Nature, Objects */}
        <div className="relative w-[60px] h-[84px] flex flex-col items-center">
          <div className="w-[60px] h-[60px] bg-white shadow-md rounded-full border border-[#EB5757] flex items-center justify-center">
            <div className="w-[33px] h-[33px] border-2 border-[#EB5757] rounded-full"></div>
          </div>
          <div className="mt-2 text-[#EB5757] text-[11px] font-semibold uppercase tracking-[.055em] font-['Public Sans']">
            Animals
          </div>
        </div>
        <div className="relative w-[60px] h-[84px] flex flex-col items-center">
          <div className="w-[60px] h-[60px] bg-white shadow-md rounded-full border border-[#EB5757] flex items-center justify-center">
            <div className="w-[33px] h-[33px] border-2 border-[#EB5757] rounded-full"></div>
          </div>
          <div className="mt-2 text-[#EB5757] text-[11px] font-semibold uppercase tracking-[.055em] font-['Public Sans']">
            Food
          </div>
        </div>
        <div className="relative w-[60px] h-[84px] flex flex-col items-center">
          <div className="w-[60px] h-[60px] bg-white shadow-md rounded-full border border-[#EB5757] flex items-center justify-center">
            <div className="w-[33px] h-[33px] border-2 border-[#EB5757] rounded-full"></div>
          </div>
          <div className="mt-2 text-[#EB5757] text-[11px] font-semibold uppercase tracking-[.055em] font-['Public Sans']">
            Nature
          </div>
        </div>
        <div className="relative w-[60px] h-[84px] flex flex-col items-center">
          <div className="w-[60px] h-[60px] bg-white shadow-md rounded-full border border-[#EB5757] flex items-center justify-center">
            <div className="w-[33px] h-[33px] border-2 border-[#EB5757] rounded-full"></div>
          </div>
          <div className="mt-2 text-[#EB5757] text-[11px] font-semibold uppercase tracking-[.055em] font-['Public Sans']">
            Objects
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute left-[15px] top-[657px] w-[360px] h-[126px]">
        <div className="absolute top-[51px] left-0 w-[360px] h-[75px] bg-white shadow-lg rounded-t-[20px]" />
        {/* History */}
        <div className="absolute left-[279px] top-[69px] flex flex-col items-center gap-1">
          <img src="https://placehold.co/24x24" alt="History" className="w-6 h-6" />
          <div className="text-[10px] text-black tracking-wide font-['Public Sans']">History</div>
        </div>
        {/* Upload */}
        <div className="absolute left-[43px] top-[69px] flex flex-col items-center gap-1">
          <img src="https://placehold.co/24x24" alt="Upload" className="w-6 h-6" />
          <div className="text-[10px] text-black tracking-wide font-['Public Sans']">Upload</div>
        </div>
        {/* Capture */}
        <div className="absolute left-[159px] top-[69px] flex flex-col items-center gap-1">
          <img src="https://placehold.co/24x24" alt="Capture" className="w-6 h-6" />
          <div className="text-[10px] text-black tracking-wide font-['Public Sans']">Capture</div>
        </div>
      </div>

      {/* Hamburger/Menu Icon */}
      <img
        src="https://placehold.co/25x25"
        alt="Menu"
        className="absolute left-[325px] top-[110px] w-[25px] h-[25px] shadow"
      />
    </div>
  );
}


// // src/components/home/Home.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const categories = [
//   { name: "Plants", color: "from-green-200 to-green-400", icon: "🌱" },
//   { name: "Animals", color: "from-yellow-200 to-yellow-400", icon: "🐾" },
//   { name: "Food", color: "from-pink-200 to-pink-400", icon: "🍎" },
//   { name: "Nature", color: "from-blue-200 to-blue-400", icon: "🌳" },
//   { name: "Objects", color: "from-purple-200 to-purple-400", icon: "📦" },
// ];

// export default function Home() {
//   const navigate = useNavigate();

//   // Example: image upload handler
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       alert(`Selected image: ${file.name}`);
//       // Implement backend upload or detection logic here
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-pink-50 to-purple-100 flex flex-col items-center py-8 px-4">
//       {/* Header/Profile */}
//       <div className="flex items-center w-full max-w-3xl justify-between mb-8">
//         <div className="flex items-center gap-4">
//           <img
//             src="https://placehold.co/61x57"
//             alt="Profile"
//             className="w-16 h-14 rounded-full border-4 border-blue-700 shadow"
//           />
//           <div>
//             <div className="text-gray-700 text-lg font-semibold">Welcome,</div>
//             <div className="text-blue-700 text-2xl font-bold">Jamelia</div>
//           </div>
//         </div>
//         <button
//           className="p-2 rounded-full hover:bg-blue-50 transition"
//           title="Menu"
//         >
//           <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
//             <circle cx="14" cy="6" r="1.5" />
//             <circle cx="14" cy="14" r="1.5" />
//             <circle cx="14" cy="22" r="1.5" />
//           </svg>
//         </button>
//       </div>

//       {/* Start the Quest Card */}
//       <div className="w-full max-w-xl bg-gradient-to-r from-pink-200 via-fuchsia-200 to-blue-100 rounded-2xl shadow-lg flex flex-col items-center justify-center py-10 mb-10 relative">
//         <label className="cursor-pointer flex flex-col items-center">
//           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg hover:scale-105 transition">
//             <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-fuchsia-400">
//               <rect x="8" y="10" width="20" height="16" rx="3" />
//               <circle cx="18" cy="18" r="3" />
//             </svg>
//           </div>
//           <span className="text-2xl font-semibold text-gray-700 mb-1">Start the Quest</span>
//           <span className="text-xs text-gray-500 mb-2">Click here to add an image</span>
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleImageUpload}
//           />
//         </label>
//       </div>

//       {/* Categories */}
//       <div className="w-full max-w-3xl">
//         <div className="text-gray-800 text-xl font-semibold mb-4">Categories</div>
//         <div className="flex flex-wrap gap-6 justify-between">
//           {categories.map((cat) => (
//             <button
//               key={cat.name}
//               className={`flex flex-col items-center group cursor-pointer transition`}
//               onClick={() => alert(`Category: ${cat.name}`)}
//             >
//               <div
//                 className={`w-20 h-20 bg-gradient-to-br ${cat.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition`}
//               >
//                 <span className="text-3xl">{cat.icon}</span>
//               </div>
//               <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-700 group-hover:text-fuchsia-500 transition">
//                 {cat.name}
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <div className="fixed bottom-0 left-0 w-full flex justify-center bg-white py-4 shadow-lg z-50">
//         <div className="flex gap-16">
//           <button
//             className="flex flex-col items-center group"
//             onClick={() => navigate("/upload")}
//           >
//             <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-1 text-fuchsia-400 group-hover:text-fuchsia-600 transition">
//               <path d="M12 16V4M12 4l-6 6M12 4l6 6" />
//               <rect x="4" y="16" width="16" height="4" rx="2" />
//             </svg>
//             <span className="text-xs text-gray-700">Upload</span>
//           </button>
//           <button
//             className="flex flex-col items-center group"
//             onClick={() => navigate("/camera")}
//           >
//             <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-1 text-blue-400 group-hover:text-blue-600 transition">
//               <rect x="4" y="8" width="16" height="12" rx="3" />
//               <circle cx="12" cy="14" r="3" />
//               <path d="M9 8V6a3 3 0 0 1 6 0v2" />
//             </svg>
//             <span className="text-xs text-gray-700">Capture</span>
//           </button>
//           <button
//             className="flex flex-col items-center group"
//             onClick={() => navigate("/history")}
//           >
//             <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-1 text-purple-400 group-hover:text-purple-600 transition">
//               <circle cx="12" cy="12" r="10" />
//               <path d="M12 6v6l4 2" />
//             </svg>
//             <span className="text-xs text-gray-700">History</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
