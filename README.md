🎯 Real-Time Object Detection using Video Streams

🚀 A full-stack AI-powered application that performs real-time object detection on video streams using OpenCV, MobileNetSSD, and YOLOv8, with a responsive frontend for visualization.

🧠 Overview

This project detects objects from live webcam/video streams and displays results with bounding boxes, class labels, and confidence scores.

It follows a modular architecture:

🔹 Backend → AI model + detection logic

🔹 Frontend → UI for visualization

🔹 Output → Saved results (GIF/video)

📁 Project Structure

      REAL-TIME-OBJECT-DETECTION/
      │
      ├── backend/
      │   ├── __pycache__/
      │   ├── __init__.py
      │   ├── app.py                  # Backend server (Flask/FastAPI)
      │   ├── detection.py            # Core detection logic
      │   ├── utils.py                # Helper functions
      │   ├── requirements.txt        # Dependencies
      │   ├── yolov8n.pt              # YOLOv8 model
      │   ├── MobileNetSSD_deploy.caffemodel
      │   └── MobileNetSSD_deploy.prototxt.txt
      │
      ├── UI/                         # Frontend (HTML/CSS/JS)
      │
      ├── real_time_output_gif/       # Output results
      │
      ├── real_time_object_detection.py   # Main entry script
      ├── README.md
      ├── .gitignore
      └── venv/
      
✨ Features

    🎥 Real-time video stream detection
    
    🎯 Object detection using YOLOv8 + MobileNetSSD
    
    📦 Bounding boxes with labels & confidence
    
    🌐 Frontend UI for visualization
    
    ⚡ Fast processing using OpenCV

💾 Save output as GIF/video

🛠️ Tech Stack

    🔹 Backend
    
        Python
        
        OpenCV
        
        YOLOv8 (Ultralytics)
        
        MobileNetSSD
    
    🔹 Frontend
    
        HTML
        
        CSS
        
        JavaScript

⚙️ Installation & Setup


Follow step-by-step:

🔹 1. Clone the Repository

      git clone https://github.com/rajawatshivpratap46/Object_Detection_Video_Streams.git
      cd Object_Detection_Video_Streams
      
🔹 2. Create Virtual Environment

       python -m venv venv

Activate it:

    👉 Windows:
    
        venv\Scripts\activate


🔹 3. Install Dependencies

    pip install -r backend/requirements.txt
    
🔹 4. Run Backend Server

    cd backend
    python app.py

👉 Server will start:

    http://127.0.0.1:5000/
    
🔹 5. Run Main Detection Script (Optional Direct Mode)

    python real_time_object_detection.py

👉 This will:

    Start webcam
    
    Detect objects in real-time

🔹 6. Run Frontend UI

    Go to UI folder:
    
    cd UI

👉 Option 1 (Simple):

Open index.html in browser

🔹 7. Connect Frontend with Backend

Make sure:

Backend is running

API URL in JS file is correct:

Example:

    http://127.0.0.1:5000/detect

🔄 System Flow

    Video Input (Webcam / Upload)
            ↓
    Frontend UI (HTML/CSS/JS)
            ↓
    API Request → Backend (app.py)
            ↓
    Detection Logic (YOLO / OpenCV)
            ↓
    Processed Frames
            ↓
    Display (Bounding Boxes + Labels)

📸 Demo
![Demo](./real_time_output_gif/demo.gif)
📈 Concepts Demonstrated

    Computer Vision (Object Detection)
    
    Deep Learning Model Integration
    
    Real-Time Video Processing
    
    REST API Integration
    
    Full Stack Development
    
    UI/UX for AI Applications

🚀 Future Improvements

🎥 Live webcam streaming in browser

📊 Analytics dashboard

☁️ Deployment (AWS / Render / Vercel)

⚡ GPU acceleration

📱 Mobile responsiveness


👨‍💻 Author

Shivpratap Rajawat

📧 shiva18021912@gmail.com

🔗 GitHub:
https://github.com/rajawatshivpratap46

🔗 LinkedIn:
https://www.linkedin.com/in/shiva-rajawat/
