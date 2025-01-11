import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const LibrarySystem = () => {
  const [records, setRecords] = useState([]); // Combined student and book records
  const [departments, setDepartments] = useState([]); // Stores unique departments
  const [selectedDepartment, setSelectedDepartment] = useState(""); // Tracks selected department

  // Fetch data from the server
  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/panding");
      const combinedData = response.data.map((record) => ({
        student: {
          name: record.student.name,
          email: record.student.email,
          rollNo: record.student.rollNo,
          department: record.student.department,
          phoneNo: record.student.phoneNo,
          image: record.student.Image || "default-image.jpg",
        },
        book: {
          title: record.book.title,
          author: record.book.author,
          isbn: record.book.isbn,
          issueDate: record.issueDate,
          submissionDate: record.submissionDate,
          status: record.status,
        },
      }));
      setRecords(combinedData);
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

  const sendMail = async (email) => {
    console.log("Sending email to:", email);
    try {
      const response = await axios.post(`http://localhost:5000/admin/mail/${email}`);
      if (response.data.success === "true") {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending mail:", error);
      alert("An error occurred while sending the email.");
    }
  };
  
  // Fetch unique departments from the backend
const fetchDepartments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/departments");
      setDepartments(response.data); // Backend sends unique department list
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };
  
  // Fetch filtered records by department
  const fetchDetailsByDepartment = async () => {
    try {
        console.log(selectedDepartment);
      const endpoint = selectedDepartment == "" || selectedDepartment == "All"
        ? "http://localhost:5000/admin/panding" // Fetch all records for "All"
        : `http://localhost:5000/admin/detailsByDepartment/${selectedDepartment}`;
  
      const response = await axios.get(endpoint);
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };
  

  // Fetch data on component mount
  useEffect(() => {
    fetchDepartments();
    fetchStudentDetails();
  }, []);

  return (
    <div className="container mt-5">
        <div className="mt-3">
  <h2>Filter Students by Department</h2>
  <select
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
  <button
    className="btn btn-primary mt-2"
    onClick={fetchDetailsByDepartment}
  >
    Search
  </button>
</div>

      <h2>Books Not Submitted to Library</h2>
      {/* Table Section */}
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Department</th>
            <th>Phone No</th>
            <th>Book Title</th>
            <th>Book ISBN</th>
            <th>Issue Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {records.length === 0 ? (
    <tr>
      <td colSpan="9" className="text-center">No records found for the selected department.</td>
    </tr>
  ) : (
    records.map((record, index) => (
      <tr key={index}>
        <td>{record.student.name}</td>
        <td>{record.student.rollNo}</td>
        <td>{record.student.department}</td>
        <td>{record.student.phoneNo}</td>
        <td>{record.book.title}</td>
        <td>{record.book.isbn}</td>
        <td>{record.issueDate ? new Date(record.issueDate).toLocaleDateString() : "N/A"}</td>
        <td>{record.status || "N/A"}</td>
        <td>
          <button className="btn btn-danger" onClick={() => sendMail(record.student.email)}>
            Send Mail
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

      </table>
    </div>
  );
};

export default LibrarySystem;
