import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://nameless-depths-31123.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="reviews-container">
      <h2>Our Happy Customers Said</h2>
      <div className="all-reviews">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
