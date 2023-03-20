import React, { useState, useEffect } from "react";
import "./Review.scss";
import axios from "axios";
import profile from "../../assets/profile.png";
import star from "../../assets/star.png";

function Review({ review }) {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const result = await axios.get(
      `https://gigtastic.onrender.com/api/v1/user/${review.userId}`
    );
    setUser(result.data.result);
    setIsLoading(false);
  };
  return (
    <div className="Gig__item">
      <div className="Gig__user">
        <img className="Gig__pp" src={user.img || profile} alt="" />
        <div className="Gig__info">
          <span>{user.username}</span>
          <div className="Gig__country">
            <span>{user.country}</span>
          </div>
        </div>
      </div>
      <div className="Gig__stars">
        {Array(review.stars)
          .fill()
          .map((item, i) => (
            <img src={star} alt="" key={i} />
          ))}
        <span>{review.stars}</span>
      </div>
      <p>{review.desc}</p>
      <hr />
    </div>
  );
}

export default Review;
