import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import Review from '../SingleReview/SingleReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[]);
    console.log(reviews)
    return (
        <div className='reviews-container'>
            <h2>Our Happy Customers Said</h2>
            <div className='all-reviews'>
                {
                    reviews.map(review=><SingleReview
                        key={review._id}
                        review={review}
                        ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;