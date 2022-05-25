import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './ManageProducts.css';

const ManageProducts = () => {
    const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Do you really want to delete?");
    if (proceed) {
      console.log("deleting , ", id);
      const url = `http://localhost:5000/tools/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = tools.filter(
              (tool) => tool._id !== id
            );
            setTools(remaining);
          }
        });
    }
  };
  return (
    <div className="manage-inventories">
      <h1>Manage Products: {tools.length}</h1>
      <div className="manage-inventories-container">
        {tools.map((tool) => (
          <div key={tool._id}>
            <Card className="manage-single-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={tool.img} style={{ height: "250px" }}/>
              <Card.Body>
                <Card.Title>{tool.name}</Card.Title>
                <Button
                  onClick={() => handleUserDelete(tool._id)}
                  variant="primary"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;