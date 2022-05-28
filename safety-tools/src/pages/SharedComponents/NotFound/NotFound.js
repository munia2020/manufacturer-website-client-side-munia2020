import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            {/* <h3 style={{ color: "blue" }}>Sorry, we couldn't find that page...</h3> */}
            <img src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
        </div>
    );
};

export default NotFound;