// import React from 'react'

// const Camera = () => {
//   return (
//     <div>
//       Camera
//     </div>
//   )
// }

// export default Camera

// src/components/detection/Camera.jsx
import React, { useRef, useState } from "react";

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [photo, setPhoto] = useState(null);

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setStreaming(true);
    } catch (err) {
      alert("Camera access denied or not available.");
    }
  };

  // Take photo
  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL("image/png"));
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      setStreaming(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-orange-50 via-stone-100 to-fuchsia-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Camera</h2>

        {/* Camera Preview or Photo */}
        <div className="relative w-full flex flex-col items-center justify-center mb-6">
          {!photo ? (
            <video
              ref={videoRef}
              autoPlay
              className="w-full max-w-lg aspect-video rounded-xl shadow-lg bg-black"
              style={{ minHeight: 320 }}
            />
          ) : (
            <img
              src={photo}
              alt="Captured"
              className="w-full max-w-lg aspect-video rounded-xl shadow-lg"
              style={{ minHeight: 320 }}
            />
          )}
          <canvas ref={canvasRef} className="hidden" />
        </div>

        {/* Controls */}
        <div className="flex gap-4 justify-center">
          {!streaming && (
            <button
              onClick={startCamera}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
            >
              Start Camera
            </button>
          )}
          {streaming && !photo && (
            <button
              onClick={takePhoto}
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
            >
              Capture Photo
            </button>
          )}
          {(streaming || photo) && (
            <button
              onClick={() => {
                stopCamera();
                setPhoto(null);
              }}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold shadow transition"
            >
              {photo ? "Retake" : "Stop Camera"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
