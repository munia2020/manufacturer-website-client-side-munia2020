import React from "react";
import { Button } from "react-bootstrap";
import "./BusinessSummary.css";

const BusinessSummary = () => {
  return (
    <div className="summary-container">
      <h2>Business Summary</h2>
      <h5>Millions Business Trust Us</h5>
      <div className="summaries">
        <div className="summary">
          <h1>
            <i className="summary-icon" class="bi bi-flag"></i>
          </h1>
          <h5>50+</h5>
          <p>Tools</p>
        </div>
        <div className="summary">
          <h1>
            <i className="summary-icon" class="bi bi-activity"></i>
          </h1>
          <h5>120M+</h5>
          <p>Annual Revenue</p>
        </div>
        <div className="summary">
          <h1>
            <i className="summary-icon" class="bi bi-people"></i>
          </h1>
          <h5>100+ Customers</h5>
          <p>
            <small>We Served</small>
          </p>
        </div>
        <div className="summary">
          <h1>
            <i className="summary-icon bi-hand-thumbs-up"></i>
          </h1>
          <h5>33k+</h5>
          <p>Review</p>
        </div>
      </div>
      <div>
        <h5>Have Any Question About Us? Don't Hesitate To Contact Us.</h5>
        <p></p>
        <Button variant="info">CONTACT US</Button>{" "}
      </div>
    </div>
  );
};

export default BusinessSummary;
