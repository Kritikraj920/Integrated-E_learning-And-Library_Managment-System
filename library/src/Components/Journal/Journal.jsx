import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../Footer/Footer'
const NotesGallery = () => {
  const [notes, setNotes] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Fetch notes
  const fetchNotes = async () => {
    try {
        const category="Others";
      const response = await axios.get(`http://localhost:5000/admin/newupload2/${category}`);
      setNotes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Fetch unique departments
  const fetchDepartments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/departmentsUpload");
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  // Fetch unique years
  const fetchYears = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/yearsUpload");
      setYears(response.data);
    } catch (error) {
      console.error("Error fetching years:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
    fetchDepartments();
    fetchYears();
  }, []);

  // Filter notes based on selected department and year
  const filteredNotes = notes.filter((note) => {
    return (
      (selectedDepartment === "" || note.department === selectedDepartment) &&
      (selectedYear === "" || note.year === selectedYear)
    );
  });

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Journal Gallery</h2>

      {/* Filter Section */}
      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="department" className="form-label">
            Select Department
          </label>
          <select
            id="department"
            className="form-select"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="year" className="form-label">
            Select Year
          </label>
          <select
            id="year"
            className="form-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">All Years</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 d-flex align-items-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              setSelectedDepartment("");
              setSelectedYear("");
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Notes Cards */}
      <div className="row">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">
                    <strong>Category:</strong> {note.category}
                  </p>
                  <p className="card-text">
                    <strong>Department:</strong> {note.department}
                  </p>
                  <p className="card-text">
                    <strong>Year:</strong> {note.year}
                  </p>
                  <p className="card-text">
                    <strong>Subject:</strong> {note.subject}
                  </p>
                  <a
                    href={`http://localhost:5000/admin/download/${note.filePath.split("\\").pop()}`}
                    className="btn btn-primary"
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No notes found for the selected filters.</p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default NotesGallery;
