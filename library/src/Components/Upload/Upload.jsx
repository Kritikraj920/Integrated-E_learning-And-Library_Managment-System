import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function FileUploadForm() {
  const navigate=useNavigate();
  const [fileData, setFileData] = useState({
    title: "",
    description: "",
    category: "",
    department: "",
    year: "",
    subject: "",
    file: null,
  });

  const categories = ["Question Paper", "Books", "Notes", "Others"];
  const departments = [
    "Computer Science",
    "Information Technology",
    "Artificial Intelligence",
    "Civil Engineering",
    "Mechanical Engineering",
    "Petroleum Engineering",
    "Electrical Engineering",
    "Mining Engineering",
    "Production Engineering",
    "Instrumentation Engineering",
    "Chemical Engineering",
    "Electronics and Communication Engineering",
    "Electronics and Computer Engineering",
    "Electronics and Electrical Engineering",
    "Building and Construction Engineering",
    // Add more departments as needed
  ];
  const years = ["1", "2", "3", "4"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFileData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rollNo = sessionStorage.getItem("rollNo");
    console.log(rollNo);
    if (!fileData.file) {
      alert("Please upload a file.");
      return;
    }
    
    // Create form data
    const formData = new FormData();
    formData.append("StudentRollno", rollNo);
    formData.append("title", fileData.title);
    formData.append("description", fileData.description);
    formData.append("category", fileData.category);
    formData.append("department", fileData.department);
    formData.append("year", fileData.year);
    formData.append("subject", fileData.subject);
    formData.append("file", fileData.file);
  
    try {
      const response = await axios.post('http://localhost:5000/user/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      alert("Data Uploaded Sucessfully");
      navigate("/");
    } catch (error) {
      console.error("Error during upload:", error); // Log error details
    //   alert('Error uploading file');
    }
  };
  

  return (
    <div className="container mt-5">
      <h2>Upload Files</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={fileData.title}
            onChange={handleChange}
            placeholder="Enter a title for the file"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={fileData.description}
            onChange={handleChange}
            placeholder="Enter a brief description"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={fileData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Department */}
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <select
            className="form-select"
            id="department"
            name="department"
            value={fileData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept, idx) => (
              <option key={idx} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <select
            className="form-select"
            id="year"
            name="year"
            value={fileData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            {years.map((yr, idx) => (
              <option key={idx} value={yr}>
                Year {yr}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject Name
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={fileData.subject}
            onChange={handleChange}
            placeholder="Enter the subject name"
            required
          />
        </div>

        {/* File Upload */}
        <div className="mb-3">
          <label htmlFor="file" className="form-label">
            Upload File (PDF, Word, etc.)
          </label>
          <input
            type="file"
            className="form-control"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt,.zip"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
}
