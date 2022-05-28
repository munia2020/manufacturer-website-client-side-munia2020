import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './ToolDetail.css';

const ToolDetail = () => {
    const {id} = useParams();
    const [tool, setTool] = useState({});
    console.log(tool);
    useEffect(()=>{
        const url = `https://nameless-depths-31123.herokuapp.com/tools/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTool(data));
    },[id]);

    // * ui can be updated by this way (uzzal vai)
  const updateUi = () => {
    const url = `https://nameless-depths-31123.herokuapp.com/tools/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }

  
  const handleOrderQuantity = event =>{
    event.preventDefault();
    const avaQuantity = parseInt(tool.avaQuantity) - parseInt(event.target.quantity.value);
    console.log(avaQuantity);

    const updatedUser = {avaQuantity};
    console.log(updatedUser);

    const url = `https://nameless-depths-31123.herokuapp.com/tools/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
            // 'Accept': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        // event.target.reset();
        updateUi()
    })
  }


    const [user] = useAuthState(auth);
    console.log(user.email);
    const handlePurchase = event =>{
        event.preventDefault();

        const purchase ={
            toolId: tool._id,
            tool: tool.name,
            user: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
        console.log(purchase)

        fetch('https://nameless-depths-31123.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast(`Your order is confirmed`)
                } 
            });
    }


    return (
        <div className="detail-container">
      <div className="detail-img-div">
        <img className="detail-img" src={tool.img} alt="" />
      </div>
      <div className="detail-text">
        <h1>{tool.name}</h1>
        <p>
          <small>{tool.description}</small>
        </p>
        <p>Price: <strong>{tool.price} $</strong></p>
        <p>Minimum Order Quantity: {tool.minQuantity} units</p>
        <p>Available Quantity: {tool.avaQuantity} units</p>
        <div className="purchase">
            <h4>Purchase</h4>
            <p>To purchase, Kindly Place an order</p>
            <form onSubmit={handleOrderQuantity} className="order-form">
            <input  type="number" name="quantity" placeholder="quantity" min="2" max={tool.avaQuantity} required />
            <input  type="submit" value="Order Quantity" />
          </form>
          <h4>user details</h4>
          <form onSubmit={handlePurchase} className="order-form">
            <input type="text" name="name" disabled value={user?.displayName || ''} /><br />
            <input type="email" name="email" disabled value={user?.email || ''} /><br />
            <input type="text" name="phone" placeholder="Phone Number" /><br />
            <input type="text" name="address" placeholder="Addressr"/><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    );
};

export default ToolDetail;