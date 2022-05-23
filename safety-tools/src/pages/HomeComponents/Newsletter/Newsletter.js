import React from 'react';
import { Button } from 'react-bootstrap';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className='schedule-container'>
            <div className='schedule-text'>
                <h2>GRAB OUR NEWSLETTER</h2>
                <p>To receive latest offers and discounts from the shop.</p>
                <Button variant="primary">SUBSCRIBE</Button>{' '}
                <br />
                <h2>SCHEDULE AN APPOINTMENT</h2>
                <p>Be a part of our next project.</p>
                <Button variant="primary">ONLINE SCHEDULING</Button>{' '}
            </div>
            <div className='img-container'>
                <img className='schedule-img' src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" alt="" />
            </div>
        </div>
    );
};

export default Newsletter;