import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HelpModal() {
  return (
    <div
      className="modal fade"
      id="helpModal"
      tabIndex="-1"
      aria-labelledby="helpModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content shadow-lg rounded-3">
          <div className="modal-header border-0 bg-primary text-white">
            <h5 className="modal-title" id="helpModalLabel">
              Contact Information
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="list-group">
              {[
                {
                  title: "Registrar's Office",
                  phone: "📞 99833-45299",
                  email: "registrar@mbm.ac.in",
                },
                {
                  title: "Public Relation's Office",
                  phone: "📞 77376-26002",
                  email: "pro@mbm.ac.in",
                },
                {
                  title: "Training & Placement Office",
                  phone: "📞 94149-18856",
                  email: "tpo@mbm.ac.in",
                },
                {
                  title: "Chief Proctor",
                  phone: "📞 94142-43583",
                  email: "proctors@mbm.ac.in",
                },
                {
                  title: "Admission Cell",
                  phone: "📞 94142-84352",
                  email: "admissions@mbm.ac.in",
                },
              ].map((item, index) => (
                <div
                  className="list-group-item list-group-item-action border-0 p-3 mb-2 rounded-3 bg-light"
                  key={index}
                >
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="mb-1">{item.phone}</p>
                  <p className="text-primary">
                    <a href={`mailto:${item.email}`} className="text-decoration-none">
                      {item.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer border-0">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
