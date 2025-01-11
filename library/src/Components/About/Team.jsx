import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer'
import AboutUs from './AboutUs'
import Img1 from './kritikPhoto.jpg'
import Img2 from './PCPhoto.jpg'
import Img3 from './Khusbo (1).jpg'
import Img4 from './Ritika.jpg'
const developers = [
  {
    name: "Kritik Raj",
    role: "Designer and Project Lead",
    branch: "Electronics And Computer Engineering",
    photo: Img1,
    github: "https://github.com/Kritikraj920",
    linkedin: " https://in.linkedin.com/in/kritik-raj-279724206",
    instagram: "https://www.instagram.com/kritikrajgupta?igsh=YnVnZnN0Y3RidW9r",
    email: "kritikraj920@gmail.com"
  },
  {
    name: "Khushboo Godara",
    role: "Front-end Developer",
    branch: "Electronics And Computer Engineering",
    photo: Img3,
    github: "https://github.com/bobsmith",
    linkedin: "https://www.linkedin.com/in/khushboo-godara-3a4562272",
    instagram: "https://instagram.com/bobsmith",
    email: "Khushboogodara2@gmail.com"
  },
  {
    name: "Ritika Solanki",
    role: "Front-end Developer",
    branch: "Electronics And Computer Engineering",
    photo: Img4,
    github: "https://github.com/charliebrown",
    linkedin: "https://www.linkedin.com/in/ritika-solanki-a362ba222/",
    instagram: "https://instagram.com/charliebrown",
    email: "ritikasolanki1947@gmail.com"
  },
  {
    name: "Praveen Batesar",
    role: "Content Writer",
    branch: "Electronics And Computer Engineering",
    photo: Img2,
    github: "https://github.com/Pcjatt",
    linkedin: "https://www.linkedin.com/in/%F0%9D%99%8B%F0%9D%99%A7%F0%9D%99%96%F0%9D%99%AB%F0%9D%99%9A%F0%9D%99%9A%F0%9D%99%A3-%F0%9D%98%BD%F0%9D%99%96%F0%9D%99%A9%F0%9D%99%9A%F0%9D%99%A8%F0%9D%99%96%F0%9D%99%A7-940830227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://instagram.com/davidlee",
    email: "Praveenbatesar2002@gmail.com"
  }
];

export default function DeveloperTeamPage() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Technical Creators of MBM Library Website</h1>
      <div className="d-flex justify-content-around flex-wrap">
        {developers.map((developer, index) => (
          <div className="card shadow-sm border-0 mb-4" key={index} style={{ width: "250px", margin: "0 15px" }}>
            <div className="card-body text-center">
              <img
                src={developer.photo}
                alt={developer.name}
                className="rounded-circle mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h5 className="card-title">{developer.name}</h5>
              <p className="card-text">{developer.role}</p>
              <p className="text-muted">{developer.branch}</p>
              <div className="d-flex justify-content-center">
                <a href={developer.github} className="btn btn-outline-dark mx-1" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github"></i>
                </a>
                <a href={developer.linkedin} className="btn btn-outline-primary mx-1" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href={developer.instagram} className="btn btn-outline-danger mx-1" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href={`mailto:${developer.email}`} className="btn btn-outline-success mx-1">
                <i class="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
