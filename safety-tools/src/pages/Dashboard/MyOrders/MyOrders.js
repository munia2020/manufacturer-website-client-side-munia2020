import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import "./MyOrders.css";
import { Button, Card } from "react-bootstrap";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`https://nameless-depths-31123.herokuapp.com/purchase?user=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Do you really want to delete?");
    if (proceed) {
      console.log("deleting , ", id);
      const url = `https://nameless-depths-31123.herokuapp.com/purchase/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = orders.filter((tool) => tool._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  console.log(orders)
  return (
    <div className="my-order-div">
      <h2>My Orders: {orders.length}</h2>
      <div>
        {orders.map((order) => (
          <div key={order._id}>
            <Card className="manage-single-card" style={{ width: "18rem" }}>
              <Card.Body className="d-flex justify-content-between">
                <Card.Title>{order.tool}</Card.Title>
                <Button
                  onClick={() => handleUserDelete(order._id)}
                  variant="primary"
                >
                  Cancel
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
