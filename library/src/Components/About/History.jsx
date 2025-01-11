import React from 'react'
import Footer from '../Footer/Footer'
import AboutUs from './AboutUs'
import collagephoto from './CollagePhoto.jpg'
export default function History() {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
            <div className="col-3">
            <h1>History of MBM</h1>
            <hr />
            </div>
            <div className="row my-3">
                <div className="row">
                    <p className='d-inline-block fs-5'><em>Looking to the need for multi-faceted development of the region, the Government of Rajasthan established the MBM University as a State Level University through a Legislative Act in September, 2021.</em></p>
                    <p className='d-inline-block fs-5'><em>The university boasts of its high standards of education, prestigious legacy and a flourishing environment that caters for the overall development of its students, faculties and staff members.</em></p>
                </div>
                <div className="row my-2">
                    <img src={collagephoto} alt="" />
                </div>
                <div className="row my-2">
                  <p className='d-inline-block fs-5'><em>
                    Located on a 98-acre academic campus and situated within the 5 Km radius of all major landmarks of the Jodhpur City, the university is applauded for its vast campus and geographical advantage. Further, staff quarters and college hostels (accommodating 800+ students every year) offers a residential advantage in close vicinity to the university.
                    </em></p>
                </div>
                <div className="row my-2">
                  <p className='d-inline-block fs-5'><em>
                    The university is proud of its high academic and technical standards since its inception. With a vision to cater to the growing needs of the society and industry, the institute has always been a pioneer in incorporating latest domains of engineering education and research. Currently, the institute offers 14 undergraduate, 25 postgraduate and 10 doctoral research programmes to the aspiring students. Several factors including good infrastructure, cutting-edge curriculum, reputed faculties, low educational costs and nourishing environment makes MBM, a first choice for students within Rajasthan as well as from other states across the country.
                    </em></p>
                </div>
                <div className="row my-1">
                  <p className='d-inline-block fs-5'><em>
                    The university is proud of its huge alumni base who have always excelled in their career and are contributing through top positions within industry, governmental bodies and academia. Many of them are also working as professors in IITs, IIMs and other prestigious technical institutions. The institute strives to maintain a culture and environment that enables our students to become responsible, ethical and true professionals.
                    </em></p>
                </div>
                <div className="row my-2"><h4>Vision</h4></div>
                
                <div className="row my-1">
                  <p className='d-inline-block fs-5'><em>
                    “To be a leading educational institute that provides quality technical education and conducts research to produce knowledge-rich professionals for meeting the dynamic needs of the industry and society”.
                    </em></p>
                </div>
                <div className="row my-2" ><h4>Mission</h4></div>
                <div className="row"><p className='d-inline-block fs-5'><em>“To impart quality technical education to the students to make them globally competent engineers, contributing to the development of the nation and world at large”.</em></p></div>
            </div>
            </div>
        <AboutUs/>
            <Footer/>
      </div>
    </div>
  )
}
