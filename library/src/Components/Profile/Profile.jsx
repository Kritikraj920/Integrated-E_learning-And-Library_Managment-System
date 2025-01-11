import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const LibrarySystem = () => {
  const [Book, setBook] = useState([]);
  const [resources, setResources] = useState([]);
  const [students, setStudents] = useState({});
  const [rollNumber, setRollNumber] = useState("");
  const [imageName, setImageName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sessionRollNo = sessionStorage.getItem("rollNo");
    if (sessionRollNo) {
      setRollNumber(sessionRollNo);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/user/profile/${rollNumber}`
      );
      setStudents(response.data);
      setImageName(response.data?.Image || "default-image.jpg");
    } catch (err) {
      console.error("Error fetching student details:", err);
    }
  };

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/admin/issuefind/${rollNumber}`
      );
      const bookData = response.data.map((record) => ({
        title: record.book.title,
        author: record.book.author,
        isbn: record.book.isbn,
        issueDate: record.issueDate,
        submissionDate: record.submissionDate,
        status: record.status,
      }));
      setBook(bookData);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const fetchResources = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/user/resourcesfind/${rollNumber}`
      );
      console.log(response.data)
      setResources(response.data);
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  const deleteResource = async (resourceId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this resource?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/user/resources/${resourceId}`);
        setResources(resources.filter((resource) => resource._id !== resourceId));
        alert("Resource deleted successfully");
      } catch (error) {
        console.error("Error deleting resource:", error);
        alert("Failed to delete the resource");
      }
    }
  };
  
  useEffect(() => {
    if (isLoggedIn) {
      fetchBookDetails();
      fetchStudentDetails();
      fetchResources();
    }
  }, [isLoggedIn]);

  return (
    <div className="container mt-5">
      {!isLoggedIn ? (
        <div className="alert alert-warning" role="alert">
          Please sign in to view your profile, book, and resource details.
        </div>
      ) : (
        <>
          <h2>My Profile</h2>

          {/* Student Details Section */}
          <div className="student-details mb-4">
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
          <div className="book-details mb-4">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Resource Sharing Section */}
          <div className="resource-details">
            <h4>Resource Sharing</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Resource Name</th>
                  <th>Description</th>
                  <th>Uploaded Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource, index) => (
                  <tr key={resource._id}>
                    <td>{resource.title}</td>
                    <td>{resource.description}</td>
                    <td>{resource.uploadedDate}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteResource(resource._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default LibrarySystem;
