
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register";
import Home from "./components/home/Home.jsx";
import Camera from "./components/detection/Camera.jsx";
import DetectionResult from "./components/detection/DetectionResult.jsx";
import Profile from "./components/profile/Profile.jsx";
import History from "./components/history/History.jsx";
import BottomNav from "./components/common/BottomNav.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import Gallery from "./components/gallery/Gallery.jsx";

function App() {
  const { user } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/detection-result" element={<DetectionResult />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      {user && <BottomNav />}
    </>
  );
}
export default App;

