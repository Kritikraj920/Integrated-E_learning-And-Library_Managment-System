import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate=useNavigate();
  // Check if the user is already logged in
  useEffect(() => {
    if (sessionStorage.getItem("adminUsername")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/admin/login", {
        username,
        password,
      });
      console.log(response);

      if (response.data.success) {
        sessionStorage.setItem("adminUsername", response.data.mockAdmin.email);
        setIsLoggedIn(true);
        setAlertMessage("Login successful!");
        navigate("/dashboard");
      } else {
        setAlertMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setAlertMessage(
        error.response?.data?.message || "An error occurred during login."
      );
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminUsername");
    setIsLoggedIn(false);
    setAlertMessage("Logged out successfully.");
    navigate("/");
  };

  return (
    <div className="modal fade" id="adminLoginModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h1 className="modal-title fs-5">Admin Login</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {alertMessage && <div className="alert alert-info">{alertMessage}</div>}
            {!isLoggedIn ? (
              <>
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  className="form-control my-2"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </>
            ) : (
              <p>Welcome, {sessionStorage.getItem("adminUsername")}!</p>
            )}
          </div>
          <div className="modal-footer">
            {!isLoggedIn ? (
              <button type="button" className="btn btn-secondary" onClick={handleLogin}>
                Log In
              </button>
            ) : (
              <button type="button" className="btn btn-danger" onClick={handleLogout}>
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
