import React from "react";
import "./MyPortfolio.css";

const MyPortfolio = () => {
  return (
    <div className="contact-container">
      <div className="contact-width">
        <div className="contact-text">
          <h3>Hello, I'm</h3>
          <h1>Israt Zahan</h1>
          <h5>
            I am a Dentist and a passionate Python Programmer and front-end web
            developer.
          </h5>
          <p>
            I have completed my graduation from Dhaka dental college and
            hospital. I am an intermediate-level Python programmer and worked
            with Pandas, NumPy, and Tkinter. As a beginner front-end developer I
            have worked with HtMl5, css3, Bootstrap, Tailwind CSS, Es6, React,
            ReactRouter, API, node js, and MongoDB.
          </p>
        </div>
        <div className="contact-img-container">
          <img
            className="contact-img"
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
            alt=""
          />
          {/* <img src="https://images.unsplash.com/photo-1591453214154-c95db71dbd83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /> */}
        </div>
      </div>
      <div className="contact-width">
        <div className="contact-img-container">
          <img
            className="contact-img"
            src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="contact-text" id="txt-email-add">
          <div>
            <p>
              <small>E-mail address:</small>
            </p>
            <h2>
              <span className="mail-span">isratzahan.official@gmail.com</span>
            </h2>
          </div>
          <div>
            <h5>My Project Links:</h5>
            <p>
              <small>
                1.
                <a href="https://organic-zone-36825.web.app/">Organic Zone</a>
              </small>
            </p>
            <p>
              <small>
                2.
                <a href="https://heartfelt-malabi-3e6cef.netlify.app/">Creative Dentistry</a>
              </small>
            </p>
            <p>
              <small>
                3.
                <a href="https://musical-sunburst-aac6c2.netlify.app/">Trusty Tech</a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
