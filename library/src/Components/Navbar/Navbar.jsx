import React from "react";
import MBM_Logo from "../../Images/MBM_Logo.png";
import SignIn from "../Modals/SignIn";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Login from "../Admin/Login";
import HelpModal from "../Modals/Help";
export default function Navbar() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    const rollNo = sessionStorage.getItem("rollNo");
    if (rollNo) {
      window.location.href = "/profile";
    } else {
      alert("Please sign in to access your profile.");
    }
  };

  return (
    <div>
      <header className="p-3 border-bottom newNav">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <img
                src={MBM_Logo}
                alt=""
                width="150px"
                height="134px"
                className="my-2"
              />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mx-5 mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 link-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/history" className="nav-link px-2 link-body-emphasis">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle px-2 link-body-emphasis"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Study Materials
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/books" className="dropdown-item">
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/notes" className="dropdown-item">
                      Notes
                    </Link>
                  </li>
                  <li>
                    <Link to="/pyq" className="dropdown-item">
                      Previous Questions
                    </Link>
                  </li>
                  <li>
                    <Link to="/journal" className="dropdown-item">
                      Journal
                    </Link>
                  </li>
                </ul>
              </li>
                      {/* Service Dropdown */}
                      <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle px-2 link-body-emphasis"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CDEEP MBM
                </a>
                <ul className="dropdown-menu">
                <li>
                   <a href="https://www.youtube.com/@prishti/playlists" target="_blank" className="dropdown-item">Harish Khyani Sir Video</a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/@dr.kailashchaudhary3762?si=5tx0RZ4NTsF2Y6ih"
                      className="dropdown-item"
                    >
                      Dr.Kailash Choudhary Sir Video 
                    </a>
                  </li>
                    <li>
                    <a href="https://www.youtube.com/@WittyRobo" className="dropdown-item">
                      Dr.Alok Singh Gehlot Sir Video
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@sumitjoshi2047" target="_blank" className="dropdown-item">
                    Sumit Joshi Sir Video
                    </a>
                  </li>
                </ul>
              </li>

              {/* Service Dropdown */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle px-2 link-body-emphasis"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                <li>
                    <Link to="/bookbank" className="dropdown-item">
                      Book Bank
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#helpModal"
                    >
                      Help
                    </a>
                  </li>
                    <li>
                    <a href="https://www.drillbitplagiarism.com/" className="dropdown-item">
                      DrillBit
                    </a>
                  </li>
                  <li>
                    <a href="https://www.grammarly.com/edu" target="_blank" className="dropdown-item">
                    Grammarly
                    </a>
                  </li>
                  <li>
                    <a href="https://rxresu.me/" target="_blank" className="dropdown-item">
                      Rx Resume
                    </a>
                  </li>
                  <li>
                    <a href="https://www.overleaf.com/" target="_blank" className="dropdown-item">
                      Overleaf
                    </a>
                  </li>
                  <li>
                    <a href="https://www.turnitin.com/login_page.asp?err=3400&lang=en_us" target="_blank" className="dropdown-item">
                      turninit
                    </a>
                  </li>
                </ul>
              </li>


              <li>
                <Link
                  to="/resourceshare"
                  className="nav-link px-2 link-body-emphasis"
                >
                  Resource_Shared
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="nav-link px-2 link-body-emphasis"
                >
                  Devloper_Team
                </Link>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="dropdown text-end">
              <Link
                to="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </Link>
              <ul className="dropdown-menu text-small">
                <li>
                  <Link className="dropdown-item" to="/resource">
                    Share Book
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/upload">
                    Upload
                  </Link>
                </li>
                <li>
                  <li
                    className="dropdown-item"
                    onClick={handleProfileClick}
                  >
                    Profile
                  </li>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Sign In
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#adminLoginModal"
                  >
                    Admin LogIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Login />
        <SignIn />
        <HelpModal/>
      </header>
      <Outlet />
    </div>
  );
}
