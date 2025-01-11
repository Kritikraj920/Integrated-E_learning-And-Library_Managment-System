import React from 'react'
import { FcHome } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
export default function AboutUs() {
  return (
    <div>
        <hr />
      <div className="container">
        <div className="row">
            <div className="col-4">
                <h3 className='mt-3'><FcHome /> MY LIBRARY</h3>
                <hr />
                <h6 className='mt-3'><a href="Dowmload/Book_Claim.pdf" download="Book_Claim.pdf">Book Claim/Renew</a></h6>
                <h6 className='mt-3'><a href="Dowmload/Book-Donation-Form-1.pdf" download="Book_Donation.pdf">Books Donation Form</a></h6>
                <h6 className='mt-3'><a href="Dowmload/Book_Lost_Declaration.pdf" download="Book_Lost_Declaration.pdf">Book Lost Declaration Form</a></h6>
                <h6 className='mt-3'><a href="Dowmload/Suggestion_Form_for_Books.pdf" download="Suggestion_Form_for_Books.pdf">Book Suggestion Form</a></h6>
                <h6 className='mt-3'><a href="Dowmload/Recommendation_form_std_room.pdf" download="Recommendation_form_std_room.pdf">Standards Suggestion Form</a></h6>
            </div>
            <div className="col-5">
            <h3 className='mt-3'><FcHome /> LIBRARY RULES & REGULATION</h3>
                <hr />
                <h6 className='mt-3'><a href="Dowmload/Library_rules_and_regulations.pdf" download="Library_rules_and_regulations.pdf">Library Rules</a></h6>
                <h6 className='mt-3'><a href="Dowmload/24X7_Reading_Hall_Usage_Guidelines.pdf" download="24X7_Reading_Hall_Usage_Guidelines.pdf">24x7 Reading Hall Usage Guidelines</a></h6>
                <h6 className='mt-3'><a href="Dowmload/Library_Cafeteria_Usage_Guidelines.pdf" download="Library_Cafeteria_Usage_Guidelines.pdf">Library Cafeteria Usage Guidelines</a></h6>
            </div>
            <div className="col-3">
            <h3 className='mt-3'><FcHome /> LIBRARY HOURS</h3>
            <hr />
            <h6 className='mt-3'><FcCalendar /><span> Mon-Fri:  <FcAlarmClock />  10:00 AM - 5:00 PM</span></h6>
            <h6 className='mt-3'><FcCalendar /><span> Sat, Sun:  <FcAlarmClock />  10:00 AM - 5:00 PM</span></h6>
            <h6 className='mt-3'><FcCalendar /><span> 365 days:  <FcAlarmClock />  24*7 Reading</span></h6>
            </div>
        </div>
      </div>
    </div>
  )
}
