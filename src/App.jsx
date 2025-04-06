import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [grade, setGrade] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    setUploadStatus(''); // Clear previous status
    setGrade(''); // Clear previous grade
    setFeedback(''); // Clear previous feedback
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setUploadStatus(''); // Clear previous status
    setGrade(''); // Clear previous grade
    setFeedback(''); // Clear previous feedback
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      // const response = await axios.post('https://ai-teacher-assistant-backend.vercel.app/upload', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      app.get("/api/hello", (req, res) => {
        res.json({ message: "Hello World" });
      
      });
      // Assuming the backend returns { grade, feedback }
      setUploadStatus('Upload successful!');
      setGrade(response.data.grade || 'N/A');
      setFeedback(response.data.feedback || 'No feedback available.');
    } catch (error) {
      setUploadStatus('Upload failed. Please try again.');
      setGrade('');
      setFeedback('');
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      {/* Navigation Panel */}
      <nav className="nav-panel">
        <div className="nav-title">AI Teacher</div>
        <button className="nav-button">Login / Signup</button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div 
          className="upload-area"
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="upload-icon"></div>
          <h2>Get AI-Powered Feedback on Your Documents</h2>
          <p>Upload your assignments, essays, or research papers for instant grading and detailed feedback</p>
          <p>Drag and drop your document here</p>
          <p>or</p>
          <input 
            type="file" 
            id="fileInput" 
            className="file-input"
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx"
          />
          <label htmlFor="fileInput" className="upload-button" onClick={handleUpload}>
            Browse Files
          </label>
          <p>Supported formats: PDF, DOC, DOCX</p>
          
          {file && (
            <div className="file-info">
              <p>Selected file: {file.name}</p>
              <button onClick={handleUpload} className="upload-button" style={{ marginTop: '1rem' }}>
                Upload
              </button>
            </div>
          )}
          {uploadStatus && <p className="upload-status">{uploadStatus}</p>}

          {/* Display Grade and Feedback */}
          {(grade || feedback) && (
            <div className="feedback-container">
              <h3>Results:</h3>
              {grade && <p><strong>Grade:</strong> {grade}</p>}
              {feedback && <p><strong>Feedback:</strong> {feedback}</p>}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 AI Teacher Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;