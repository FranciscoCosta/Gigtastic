import React, { useState, useEffect } from "react";
import "./Reviews.scss";
import star from "../../assets/star.png";
import axios from "axios";
import Review from "../Review/Review";

function Reviews({ id }) {
  const [reviews, setreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(id);
  }, []);

  const fetchData = async (id) => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/reviews/${id}`
    );
    setreviews(result.data.result);
    setIsLoading(false);
  };
  return (
    <div className="Gig__reviews">
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <h2>This product dosent have reviews.</h2>
      ) : (
        reviews.map((review) => (
          <Review review={review} key={`review-${review._id}`} />
        ))
      )}
    </div>
  );
}

export default Reviews;
