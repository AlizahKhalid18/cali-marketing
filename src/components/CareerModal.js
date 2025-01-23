import React from "react";
import "../components/CareerModal.css";

const CareerModal = ({ isOpen, onClose, jobTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Apply for {jobTitle}</h2>
        <form className="modal-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name*" className="form-input" />
            <input type="email" placeholder="Your Email*" className="form-input" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Your City*" className="form-input" />
            <input type="text" placeholder="Your Position*" className="form-input" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Your Experience*" className="form-input full-width" />
          </div>
          <div className="form-row">
            <textarea
              placeholder="Enter your message"
              className="form-textarea"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            SEND APPLICATION
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerModal;
