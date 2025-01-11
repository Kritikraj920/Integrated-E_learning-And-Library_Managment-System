import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const LibrarySystem = () => {
  const [Book, setBook] = useState([]); // Initialize as an empty array
  const [students, setStudents] = useState({});
  const [rollNumber, setRollNumber] = useState("");
  const [imageName, setImageName] = useState("");

  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/admin/issuefind/${rollNumber}`
      );
      const studentData = response.data.map((record) => record.student);
      const bookData = response.data.map((record) => ({
        title: record.book.title,
        author: record.book.author,
        isbn: record.book.isbn,
        issueDate: record.issueDate,
        submissionDate: record.submissionDate,
        status: record.status,
      }));

      setStudents(studentData[0]); // Set student data
      setBook(bookData); // Populate Book array
      setImageName(studentData[0]?.Image || "default-image.jpg");
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

  const submitStatus = async (isbn) => {
    try {
      const response = await axios.post("http://localhost:5000/admin/update", {
        rollNumber,
        isbn
      });
      console.log(response.data);
      alert("Book status updated successfully");
      fetchStudentDetails(); // Refresh data after updating status
    } catch (error) {
      console.error("Error updating book status:", error);
    }
  };
  

  return (
    <div className="container mt-5">
      <h2>Library Management System</h2>

      {/* Student Details Section */}
      <div className="student-details mb-4">
        <div className="row">
          <div className="col-3">
            <h4>Student Details</h4>
            <div className="mb-3">
              <label className="form-label">Roll Number</label>
              <input
                type="text"
                className="form-control"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
              <button
                className="btn btn-primary mt-2"
                onClick={fetchStudentDetails}
              >
                Fetch Student Details
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">
                <strong>Name:</strong>
              </label>
              <p>{students.name}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Gender:</strong>
              </label>
              <p>{students.gender}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Roll Number:</strong>
              </label>
              <p>{students.rollNo}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Email:</strong>
              </label>
              <p>{students.email}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Department:</strong>
              </label>
              <p>{students.department}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <img
                src={`/Images/${imageName}`}
                alt=""
                height="200px"
                width="200px"
                className="border border-dark rounded"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Phone Number:</strong>
              </label>
              <p>{students.phoneNo}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Address:</strong>
              </label>
              <p>{students.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Book Details Section */}
      <div className="book-details">
        <h4>Book Details</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Issue Date</th>
              <th>Submit Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Book.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{new Date(book.issueDate).toLocaleDateString()}</td>
                <td>{new Date(book.submissionDate).toLocaleDateString()}</td>
                <td>{book.status}</td>
                <td>
                  <button
                    className={`btn ${
                      book.status === "Submitted" ? "btn-success" : "btn-warning"
                    }`}
                    onClick={() => submitStatus(book.isbn)} // Pass the specific ISBN
                  >
                    {book.status === "Submitted"
                      ? "Mark Not Submitted"
                      : "Mark Submitted"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibrarySystem;
