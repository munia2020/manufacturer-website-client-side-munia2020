import React from "react";
import { Button } from "react-bootstrap";
import './Talks.css';

const Talks = () => {
  return (
    <div className="talks-container">
      <div className="talks-text">
        <h3>
          Amazing things happen to your business when we connect those dots of
          utility and value.
        </h3>
        <p>
          Commited to High Quality Service.Commited to High Quality
          Service.Commited to High Quality Service.
        </p>
        <Button variant="primary">GET IN TOUCH</Button>{' '}
      </div>
    </div>
  );
};

export default Talks;
