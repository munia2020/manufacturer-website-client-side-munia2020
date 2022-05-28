import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <div className="manage-all-orders">
      <h2>ManageOrders: {orders.length}</h2>
      <div>
        {orders.map((order) => (
          <div key={order._id}>
            <Card className="manage-single-card">
            {/* style={{ width: "75%" }} */}
              <Card.Body className="d-flex justify-content-between">
                <Card.Title>{order.tool}</Card.Title>
                <Card.Title>{order.userName}</Card.Title>
                <Card.Title>{order.address}</Card.Title>
                <Button
                  variant="primary"
                >
                  Ship
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrders;
