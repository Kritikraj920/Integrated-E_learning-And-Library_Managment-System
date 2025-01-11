import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const LibraryManagement = () => {
  const [student, setStudent] = useState({});
  const [book, setBook] = useState({});
  const [rollNumber, setRollNumber] = useState("");
  const [isbn, setIsbn] = useState("");

  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/admin/StudentDetails/${rollNumber}`);
      setStudent(response.data);
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/admin/BookDetails/${isbn}`);
      setBook(response.data);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const issueBook = async () => {
    try {
      const response = await axios.post("http://localhost:5000/admin/issue", {
        student,
        book,
        issueDate: new Date(),
        submissionDate: null,
        status: "Isue",

      });
      alert("Book issued successfully!");
      
       // Reset all fields and data after issue
       setStudent(null);
       setBook(null);
       setRollNumber("");
       setIsbn("");
    } catch (error) {
      console.error("Error issuing book:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Library Management System</h2>
      <div className="mb-3">
        <label className="form-label">Roll Number</label>
        <input
          type="text"
          className="form-control"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={fetchStudentDetails}>
          Fetch Student Details
        </button>
      </div>
      <div className="mb-3">
        <label className="form-label">ISBN</label>
        <input
          type="text"
          className="form-control"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={fetchBookDetails}>
          Fetch Book Details
        </button>
      </div>
       {/* Display Student Details */}
       {student && (
        <div className="student-details mt-4">
          <h4>Student Details</h4>
          <table className="table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{student.name}</td>
              </tr>
              <tr>
                <th>Mother's Name</th>
                <td>{student.mothersName}</td>
              </tr>
              <tr>
                <th>Date of Birth</th>
                <td>{student.dob}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{student.gender}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{student.email}</td>
              </tr>
              <tr>
                <th>Department</th>
                <td>{student.department}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>{student.phoneNo}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{student.address}</td>
              </tr>
              <tr>
                <th>State</th>
                <td>{student.state}</td>
              </tr>
              <tr>
                <th>Pincode</th>
                <td>{student.pincode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Display Book Details */}
      {book && (
        <div className="book-details mt-4">
          <h4>Book Details</h4>
          <table className="table">
            <tbody>
              <tr>
                <th>Title</th>
                <td>{book.title}</td>
              </tr>
              <tr>
                <th>Author</th>
                <td>{book.author}</td>
              </tr>
              <tr>
                <th>ISBN</th>
                <td>{book.isbn}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <button className="btn btn-success" onClick={issueBook}>
        Issue Book
      </button>
    </div>
  );
};

export default LibraryManagement;
