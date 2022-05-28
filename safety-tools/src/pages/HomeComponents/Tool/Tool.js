import React from "react";
import "./Tool.css";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  console.log(tool);
  const { _id, name, description, price, minQuantity, avaQuantity, img } = tool;
  const navigate = useNavigate();

  const navigateToToolDetail = (id) => {
    navigate(`/tools/${id}`);
  };

  return (
    <div className="single-tool">
      <Card style={{ width: "18em" }}>
        <Card.Img style={{ height: "10rem" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <small>{description}</small>
          </Card.Text>
          <Card.Text>Price: {price} $</Card.Text>
          <Card.Text>
            <small>Minimum Order Quantity: {minQuantity} units</small>
          </Card.Text>
          <Card.Text>Available Quantity: {avaQuantity} units</Card.Text>
          <Button onClick={() => navigateToToolDetail(_id)} variant="primary">
            Purchase
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Tool;
