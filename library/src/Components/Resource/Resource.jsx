import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const ShareResourceForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  // Get rollNo from session storage
  const rollNo = sessionStorage.getItem('rollNo');
  const [studentName, setStudentName] = useState('');

  // Fetch student name (and other details) using rollNo from backend
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please upload a file');
      return;
    }

    const formData = new FormData();
    formData.append('rollNo',rollNo)
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/user/share', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      alert('Resource shared successfully!');
      navigate("/");
    } catch (error) {
      console.error('Error sharing resource:', error);
      alert('Failed to share the resource');
    }
  };

  return (
    <div className="container">
      <h2>Share Your Resource</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Student Roll Number</label>
          <input
            type="text"
            className="form-control"
            value={rollNo}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Photo</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Share Resource
        </button>
      </form>
    </div>
  );
};

export default ShareResourceForm;
