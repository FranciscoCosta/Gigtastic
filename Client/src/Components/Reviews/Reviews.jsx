import React, { useState, useEffect } from "react";
import "./Reviews.scss";
import star from "../../assets/star.png";
import axios from "axios";
import Review from "../Review/Review";

function Reviews({ id }) {
  const [reviews, setreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewed, setreviewed] = useState(false);
  const [newreview, setnewreview] = useState({
    userId: "",
    gigId: id,
    stars: 0,
    desc: "",
  });

  useEffect(() => {
    fetchData(id);
  }, [reviewed]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const fetchData = async (id) => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/reviews/${id}`
    );
    const totalReviews = result.data.result;
    setreviews(totalReviews);
    totalReviews.find((review) => {
      if (review.userId === currentUser._id) {
        setreviewed(true);
      }
    });
    setIsLoading(false);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:8080/api/v1/review/`,
        {
          ...newreview,
          userId: currentUser._id,
        },
        {
          withCredentials: true,
        }
      );
      setreviewed(!reviewed);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setnewreview((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
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
      {currentUser && !currentUser.isSeller && !reviewed && (
        <div className="addReview">
          <h3>Add a review of this product</h3>
          <form action="" className="addForm" onSubmit={handleSumbit}>
            <input
              type="text"
              placeholder="write your opinion"
              name="desc"
              onChange={handleChange}
            />
            <select name="stars" id="" onChange={handleChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Reviews;
