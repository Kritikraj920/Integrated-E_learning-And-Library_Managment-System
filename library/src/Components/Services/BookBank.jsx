import React from "react";
import Footer from '../Footer/Footer'
export default function BookBank() {
  return (
    <div>

    <div className="container my-5">
      <h1 className="text-center mb-4">Book Bank</h1>
      <p>
        The Central Library maintains a Book Bank primarily for undergraduate-level students to assist those belonging to economically and socially weaker sections of society. The bank has two collections:
      </p>
      <ul>
        <li><strong>Special Collection (BC)</strong> for SC/ST Students</li>
        <li><strong>Technological Lending Library (TLL)</strong></li>
      </ul>
      
      <h2 className="mt-4">Special Collection (BC) for SC/ST Students</h2>
      <p>
        Students can borrow up to <strong>3 books</strong> from this collection for a period of one semester. The library issues a circular at the beginning of each semester, and eligible students may apply to avail the benefit as per the announced schedule.
      </p>

      <h2 className="mt-4">Technological Lending Library</h2>
      <p>
        The textbooks from the TLL Section are loaned out for one semester. All students can borrow a maximum of <strong>3 books</strong> per semester. The library announces the application schedule, and students may apply accordingly.
      </p>
    </div>
    <Footer/>
    </div>
  );
}
