import React from "react";
import { Link } from "react-router-dom";
import "./gigCards.scss";
import start from "../../assets/start.png";
import heart from "../../assets/heart.png";
// import { gigs } from '../../data'

function gigCards({ item }) {
  return (
    <Link to="/gig/123">
      <div className="GigCards">
        <img src={item.img} alt="" />
        <div className="GigCards__info">
          <div className="GigCards__user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="GigCards__star">
            <img src={start} alt="star icon" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="GigCards__details">
          <img src={heart} alt="heart-icon" />
          <div className="GigCards__details-price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default gigCards;
