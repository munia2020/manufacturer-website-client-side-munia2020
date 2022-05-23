import React from 'react';
import './SingleReview.css';

const SingleReview = ({review}) => {
    return (
        <div className='single-review-container'>
            <img className='review-img' src={review.img} alt="" />
            <h5>{review.name}</h5>
            <p><small>{review.review}</small></p>
            <p>Rating: <span>{review.rating}</span></p>
        </div>
    );
};

export default SingleReview;