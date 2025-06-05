// import React from 'react'

// const Gallery = () => {
//   return (
//     <div>
//       Gallery
//     </div>
//   )
// }

// export default Gallery

// src/components/gallery/Gallery.jsx
import React, { useRef, useState, useEffect } from "react";

export default function Gallery() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [gallery, setGallery] = useState([]);

  // Load gallery from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("photoGallery");
    if (saved) setGallery(JSON.parse(saved));
  }, []);

  // Save gallery to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("photoGallery", JSON.stringify(gallery));
  }, [gallery]);

  // Start the camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setStreaming(true);
    } catch (err) {
      alert("Camera access denied or not available.");
    }
  };

  // Capture a photo
  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      setPhoto(dataUrl);
    }
  };

  // Save photo to gallery
  const savePhoto = () => {
    if (photo) {
      setGallery([{ src: photo, date: new Date().toISOString() }, ...gallery]);
      setPhoto(null);
      stopCamera();
    }
  };

  // Stop the camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      setStreaming(false);
    }
  };

  // Delete a photo from gallery
  const deletePhoto = (idx) => {
    setGallery(gallery.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-orange-50 via-stone-100 to-fuchsia-100 px-4 py-8">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl flex flex-col items-center mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Camera & Gallery</h2>
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
          {!streaming && !photo && (
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
          {photo && (
            <>
              <button
                onClick={savePhoto}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
              >
                Save Photo
              </button>
              <button
                onClick={() => setPhoto(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold shadow transition"
              >
                Retake
              </button>
            </>
          )}
          {(streaming || photo) && !photo && (
            <button
              onClick={stopCamera}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold shadow transition"
            >
              Stop Camera
            </button>
          )}
        </div>
      </div>

      {/* Gallery */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Photo Gallery</h3>
        {gallery.length === 0 ? (
          <div className="text-gray-500 text-center">No photos yet.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <div key={idx} className="relative group">
                <img
                  src={img.src}
                  alt={`Snapshot ${idx + 1}`}
                  className="rounded-lg shadow aspect-video object-cover"
                />
                <button
                  onClick={() => deletePhoto(idx)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-80 hover:opacity-100 transition"
                  title="Delete"
                >
                  &times;
                </button>
                <div className="absolute bottom-2 left-2 text-xs bg-white/70 px-2 py-0.5 rounded">
                  {new Date(img.date).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
