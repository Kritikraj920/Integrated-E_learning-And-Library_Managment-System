import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage and navigate to the home page
    sessionStorage.removeItem("adminUsername");
    navigate("/");  // Redirect to the home page
  };

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div
        className="d-flex flex-column bg-dark text-white"
        style={{
          width: "250px", // Sidebar width
          height: "100vh", // Fixed height for the sidebar
          position: "fixed", // Fixing the sidebar to the left
          top: 0, // Ensures it sticks to the top
        }}
      >
        <div className="p-3 bg-primary text-center">
          <h4>Admin Dashboard</h4>
        </div>
        <nav className="nav flex-column p-2">
          <hr />
          <Link to="/" className="nav-link text-white">
          <i class="fa-solid fa-house"></i> Home
          </Link>
          <hr />
          <Link to="/dashboard/bookreg" className="nav-link text-white">
            <i className="fa-solid fa-right-to-bracket"></i> Book Entry
          </Link>
          <Link to="/dashboard/bookisue" className="nav-link text-white">
            <i className="fa-solid fa-download"></i> Book Issue
          </Link>
          <Link to="/dashboard/booksubmit" className="nav-link text-white">
            <i className="fa-solid fa-closed-captioning"></i> Book Submit
          </Link>
          <Link to="/dashboard/bookpanding" className="nav-link text-white">
            <i className="fa-solid fa-book"></i> Book Pending
          </Link>
          <Link to="/dashboard/bookshow" className="nav-link text-white">
            <i className="fa-solid fa-book"></i> Books
          </Link>
          <hr />
          <Link to="/dashboard/adminUpload" className="nav-link text-white">
            <i className="fa-solid fa-upload"></i> New Uploads
          </Link>
          <hr />
          <a href="">
          <button onClick={handleLogout} className="nav-link text-white"><i className="fas fa-user-lock me-2"></i>Logout</button>
          </a>
          <hr />
        </nav>
        <div className="mt-auto p-3 text-center bg-primary">
          &copy; 2024 Admin Panel
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{
          marginLeft: "250px", // Matches the sidebar width
          overflowY: "auto", // Allows scrolling for main content
          height: "100vh", // Ensures the content area takes up full height
        }}
      >
        <h1>Welcome to the Admin Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
}