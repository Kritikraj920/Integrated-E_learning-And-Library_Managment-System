import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const LibrarySystem = () => {
  const [records, setRecords] = useState([]); // Initialize with an empty array

  // Fetch data from the server
  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/newupload");
      const combinedData = response.data.map((record) => ({
        _id: record._id,
        StudentRollno: record.StudentRollno,
        title: record.title,
        category: record.category,
        department: record.department,
        year: record.year,  // Ensure 'year' exists in the backend data
        subject: record.subject,
        filePath: record.filePath,
      }));
      setRecords(combinedData);
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`http://localhost:5000/admin/deleteUpload/${id}`);
        setRecords(records.filter((record) => record._id !== id)); // Update state after deletion
        alert("Record deleted successfully");
      } catch (error) {
        console.error("Error deleting record:", error);
        alert("Failed to delete record");
      }
    }
  };
  useEffect(() => {
    fetchStudentDetails();
  }, []); // Empty dependency array ensures it runs once

  const handleUpdateStatus = async (id) => {
    try {
      await axios.put(`http://localhost:5000/admin/update-status/${id}`);
      setRecords(
        records.map((record) =>
          record._id === id ? { ...record, status: true } : record
        )
      );
      alert("Status updated successfully");
      fetchStudentDetails();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  const handleDownload = (filePath) => {
    const filename = filePath.split("\\").pop();// Extract filename from the path
    axios({
      url: `http://localhost:5000/admin/download/${filename}`,
      method: "GET",
      responseType: "blob", // Important for downloading files
    })
      .then((response) => {
        // Create a temporary link to trigger download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename); // Set filename for download
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };


  return (
    <div className="container mt-5">
      <h2>New Uploads</h2>

      {/* Table Section */}
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Student RollNo</th>
            <th>Title</th>
            <th>Category</th>
            <th>Department</th>
            <th>Year</th>
            <th>Subject</th>
            <th>Download</th>
            <th>Delete</th>
            <th>Upload</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record, index) => (
              <tr key={index}>
                <td>{record.StudentRollno}</td>
                <td>{record.title}</td>
                <td>{record.category}</td>
                <td>{record.department}</td>
                <td>{record.year}</td>
                <td>{record.subject}</td>
                <td>
                  <button className="btn btn-primary"  onClick={() => handleDownload(record.filePath)}>Download</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(record._id)}>Delete</button>
                </td>
                <td>
                <button
                    className="btn btn-success"
                    onClick={() => handleUpdateStatus(record._id)}
                    disabled={record.status} // Disable button if status is true
                  >
                    {record.status ? "Uploaded" : "Upload"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LibrarySystem;
