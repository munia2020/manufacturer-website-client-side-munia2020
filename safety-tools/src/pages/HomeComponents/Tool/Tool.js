
import React from "react";
import './Tool.css';
import { Button, Card } from "react-bootstrap";

const Tool = ({ tool }) => {
  console.log(tool);
  const { _id, name, description, price, minQuantity, avaQuantity, img } = tool;

  return (
    <div className="single-tool">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "10rem"}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <small>{description}</small>
          </Card.Text>
          <Card.Text>
            Price: {price} $
          </Card.Text>
          <Card.Text>
            <small>Minimum Order Quantity: {minQuantity} units</small>
          </Card.Text>
          <Card.Text>
            Available Quantity: {avaQuantity} units
          </Card.Text>
          <Button variant="primary">Purchase</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Tool;
