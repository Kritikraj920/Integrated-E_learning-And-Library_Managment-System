import React from 'react'
import CR1 from '../../Images/Carousal/CR (1).jpg'
import CR6 from '../../Images/Carousal/CR (2).jpg'
import CR2 from '../../Images/Carousal/CR (3).jpg'
import CR3 from '../../Images/Carousal/CR (4).jpg'
import CR4 from '../../Images/Carousal/CR (5).jpg'
import CR5 from '../../Images/Carousal/CR (6).jpg'
import { FcFolder } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcAdvance } from "react-icons/fc";
import Footer from '../Footer/Footer'
import Carousal from "../Carousal/Carousal";
import AboutUs from '../About/AboutUs'

export default function Home() {
  return (
    <div>
      <Carousal />
      <hr />
      <div className="container mt-5">
        <div className="row">
            <div className="col-sm-3">
                <h3 className='mt-3'><FcAbout /> WHAT'S NEW</h3>
                <hr />
                <h6 className='my-4'><a href="/Dowmload/Pamplate.pdf" download ="pamplate.pdf" target='_blank'>Pampletes</a></h6>
                <h6 className='my-4'><a href="Dowmload/Holiday_Calander_2025.pdf" download="Holiday_Calander_2025.pdf"  target='_blank'>Mbm Calender</a></h6>
                <h6 className='my-4'><a href="https://www.bloomberg.com/asia" target='_blank'>Bloomberg</a></h6>
                <h6 className='my-4'><a href="https://www.login.amdigital.co.uk/login.aspx?returnUrl=https%3a%2f%2fwww.indiaraj.amdigital.co.uk%2f&JWTKey=amdigital&JWTdata=indiaraj&cookiesTesting=true" target='_blank'>India, Raj and Empire</a></h6>
                <h6 className='my-4'><a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target='_blank'>Research Paper</a></h6>
                <h6 className='my-4'><a href="https://quillbot.com/" target='_blank'>QuillBot</a></h6>
                <h6 className='my-4'><a href="https://hstalks.com/business/" target='_blank'>HSTalks- The Business & Management Collection (Trial Access)</a></h6>
            </div>

            <div className="col-sm-6 mt-3">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators/Dots */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>

                    {/* Carousel Inner/Slides */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={CR1} className="d-block w-100" alt="Slide 1" style={{ height: '400px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={CR2} className="d-block w-100" alt="Slide 2" style={{ height: '400px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={CR3} className="d-block w-100" alt="Slide 3" style={{ height: '400px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={CR4} className="d-block w-100" alt="Slide 4" style={{ height: '400px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={CR5} className="d-block w-100" alt="Slide 5" style={{ height: '400px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={CR6} className="d-block w-100" alt="Slide 6" style={{ height: '400px', objectFit: 'cover' }} />
                        </div>
                    </div>

                    {/* Controls (Optional) */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="col-sm-3">
                <h3 className="mt-3"><FcFolder /> RECENT UPDATE</h3>
                <hr />
                <marquee behavior="" direction="up">
                    <ul>
                        <a href=""><h6 className='my-3'><FcAdvance /> New Arrival: Display Books Items From 22/08/24 - 28/8/24</h6></a>
                        <a href=""><h6 className='my-3 '><FcAdvance /> New Arrival: Display Books Items From 22/08/24 - 28/8/24</h6></a>
                        <a href=""><h6 className='my-3'><FcAdvance /> New Arrival: Display Books Items From 22/08/24 - 28/8/24</h6></a>
                        <a href=""><h6 className='my-3'><FcAdvance /> New Arrival: Display Books Items From 22/08/24 - 28/8/24</h6></a>
                        <a href=""><h6 className='my-3'><FcAdvance /> New Arrival: Display Books Items From 22/08/24 - 28/8/24</h6></a>
                    </ul>
                </marquee>
                <div className='text-center'>
                    <button className='btn btn-danger mt-3'>Read More</button>
                </div>
            </div>
        </div>
      </div>
      <AboutUs />
      <Footer />
    </div>
  )
}
