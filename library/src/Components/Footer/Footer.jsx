import React from 'react'
import MBM_Logo from '../../Images/MBM_Logo.png'
import { FcCallTransfer } from "react-icons/fc";
import { FcMms } from "react-icons/fc";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import YouTube icon

export default function Footer() {
  return (
    <div>
        <hr />
      <div className="container mt-2">
        <div className="row">
            <div className="col-sm-3 mt-3">
                <img src={MBM_Logo} alt="" width="150px" height="134px" /><br />
                <h4 className='mt-2'>Contact Us</h4><br />
                   <p>Central Library officer <br />
                    MBM University Jodhpur,<br />
                    Ratanada, Jodhpur, Rajasthan <br /></p>
                    <span className=''><FcCallTransfer /> Phone: <span>6299850134</span> </span><br />
                    <span><FcMms /> Email: library@mbm.ac.in</span>
            </div>
            <div className="col-sm-3 mt-5">
                <h3>Useful Links</h3>
                <a href="https://www.mbm.ac.in/"><h6 className='mt-3' target='_blank'>Application Software Cell</h6></a>
                <a href="https://www.bankbazaar.com/home-loan/repo-rate.html"className='mt-3' target='_blank'><h6 className='mt-3'>Bank Rates</h6></a>
                <a href="https://www.youtube.com/@prishti/playlists" target='_blank'><h6 className='mt-3'>CDEEP MBM</h6></a>
                <a href="https://mbmiums.in/(S(kgvwaxjj2cismhsc0rffbk0l))/Results/ExamResult.aspx"className='mt-3' target='_blank'><h6 className='mt-3'>Exam Result</h6></a>
                <a href="https://mbmiums.in/(S(epb25lv4y5mvrg0wa2mkmvwp))/main.aspx"className='mt-3' target='_blank'><h6 className='mt-3'>MBMIUMS.ac</h6></a>
                <a href="https://moodle.com/in/?utm_source=Google&utm_medium=paid&utm_campaign=name~2025IndiaGadsconversion+cat~india+mp~no&utm_term=moodle&utm_campaign=IMP+%7C+India+FY25+%7C+Generic&utm_source=adwords&utm_medium=ppc&hsa_acc=1028567792&hsa_cam=21589193711&hsa_grp=164757563246&hsa_ad=709810291321&hsa_src=g&hsa_tgt=kwd-338653346&hsa_kw=moodle&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1"className='mt-3' target='_blank'><h6 className='mt-3'>Moodle</h6></a>
            </div>
            <div className="col-sm-3 mt-5">
                <a href="Dowmload/MBMEMAGAZINE_JAN_24_240311_172527 (1).pdf" download="MBM_Magazine_2023.pdf"><h6 className='mt-5'>MBM Magazine 2021</h6></a>
                <a href="Dowmload/E-Magazine-1.pdf" download="MBM_Magzine_2024.pdf"><h6 className='mt-3'>MBM Magazine 2022</h6></a>
                <a href="Dowmload/MBMEMAGAZINE_JAN_24_240311_172527 (1).pdf" download="MBM_Magazine_2023.pdf"><h6 >MBM Magazine 2023</h6></a>
                <a href="Dowmload/E-Magazine-1.pdf" download="MBM_Magzine_2024.pdf"><h6 className='mt-3'>MBM Magazine 2024</h6></a>

                <a href="https://nptel.ac.in/" target='_blank'><h6 className='mt-3'>NPTEL Video</h6></a>
                <a href="https://ndl.iitkgp.ac.in/" target='_blank'><h6 className='mt-3'>National Digital Library</h6></a>
                <a href="https://spoken-tutorial.org/" target='_blank'><h6 className='mt-3'>Spoken-Tutorial</h6></a>
            </div>
            <div className="col-sm-3 mt-5">
                <h4>Subscribe Us</h4>
                <input type="text" className='form-control' placeholder='Email here...' />
                <button className='btn btn-danger mt-3'>Subscribe</button>

                <h4 className="mt-4">Follow Us</h4>
                <div className="d-flex justify-content-start">
                    <a href="https://www.facebook.com/M.B.M.EngineeringCollegeJodhpur/" className="mx-2" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={25} />
                    </a>
                    <a href="https://www.instagram.com/mbmuniversityjodhpur/" className="mx-2" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={25} />
                    </a>
                    <a href="https://www.youtube.com/@MBMUniv" className="mx-2" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={25} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
