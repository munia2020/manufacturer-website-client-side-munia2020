import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel className="banner">
      <Carousel.Item interval={1000}>
        <img
          style={{ height: "80vh" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1518704618243-b719e5d5f2b8?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Economy Needs A Healthy Industry</h1>
          <p>
            We're thriving and building better products. We are also involved in
            service, maintenance.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{ height: "80vh" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>we are industry factory solution</h1>
          <p>
            We're thriving and building better products. We are also involved in
            service, maintenance.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "80vh" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Commited to High Quality Service</h1>
          <p>
            We're thriving and building better products. We are also involved in
            service, maintenance.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
