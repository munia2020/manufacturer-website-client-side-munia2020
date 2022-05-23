import React from "react";
import { Accordion } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="qus-ans">
      <h2 className="accor-h2">Help Desk</h2>
      <div className="accordion-container">
        <div className="accor-container">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="accor-item">
              <Accordion.Header className="accor-header">
                Is EAN code/weight code necessary?
              </Accordion.Header>
              <Accordion.Body className="accor-body">
                Yes, Please deliver to our warehouse free of charge between 8:00am
                and 4:00 pm on weekdays. Quantities should be agreed upon one
                week in advance, this number may change following the
                introduction of product(s). We ask for a transfer invoice for
                the products, preferably via e-mail, that will be paid with a
                minimum 21 days transfer. Please deliver to our warehouse free
                of charge between 8:00am and 4:00 pm on weekdays.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What do I need to know about shipping and billing?
              </Accordion.Header>
              <Accordion.Body>
                Please deliver to our warehouse free of charge between 8:00am
                and 4:00 pm on weekdays. Quantities should be agreed upon one
                week in advance, this number may change following the
                introduction of product(s). We ask for a transfer invoice for
                the products, preferably via e-mail, that will be paid with a
                minimum 21 days transfer.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Is EAN code/weight code necessary?
              </Accordion.Header>
              <Accordion.Body>
                Yes. For a fee we can provide EAN and weight code, but an EAN
                code is always required for the identification of the products.
                Fresh vegetables and fruits are available seasonally, dairies,
                meats and processed products while stock lasts as per the
                producer. For our complete offer feel free to contact our
                colleague.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="accor-img-container">
          <img
            className="accor-img"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
