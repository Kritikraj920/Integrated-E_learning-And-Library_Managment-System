import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate=useNavigate();
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in (session storage check)
  useEffect(() => {
    if (sessionStorage.getItem("rollNo")) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        rollNo,
        password,
      });

      // Store rollNo in session storage
      if (response.status === 200) {
        sessionStorage.setItem("rollNo", response.data.rollNo);
        setIsLoggedIn(true); // Set logged-in state
        alert("Login successful!");
        console.log("RollNo stored:", sessionStorage.getItem("rollNo"));
      }
    } catch (error) {
      console.error("Login error:", error.response.data.message);
      alert(error.response.data.message || "Error logging in");
    }
  };

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem("rollNo");
    setIsLoggedIn(false); // Update the logged-in state
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sign-In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {!isLoggedIn ? (
                <>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Enter Your Roll number..."
                    required
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control my-2"
                    placeholder="Enter Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              ) : (
                <p>Welcome! You are logged in.</p>
              )}
            </div>
            <div className="modal-footer">
              {!isLoggedIn ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
              )}
              {!isLoggedIn && (
                <a href="/SignUp">
                  <button type="button" className="btn btn-primary">
                    Sign Up
                  </button>
                </a>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
