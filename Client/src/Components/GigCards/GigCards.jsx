import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./GigCards.scss";
import start from "../../assets/star.png";
import heart from "../../assets/heart.png";
import axios from "axios";
import { Context } from "../../Context/context";

function GigCards({ item }) {
  const navigate = useNavigate();
  const { setCategory, setSearch, setuserFilter } = useContext(Context);
  const [user, setuser] = useState({});
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    fetchData(item);
  }, []);
  const fetchData = async (item) => {
    setisLoading(true);
    const resultUser = await axios.get(
      `https://gigtastic.onrender.com/api/v1/user/${item.userId}`,
      {
        withCredentials: true,
      }
    );
    setuser(resultUser.data.result);
    setisLoading(false);
  };

  const resetFilter = () => {
    setCategory("");
    setSearch("");
  };

  const handleUser = () => {
    resetFilter();
    setuserFilter([user._id, user.username]);
    navigate("/gigs");
  };

  return (
    <div className="GigCards">
      <Link to={`/gig/${item._id}`} className="link">
        <img src={item.cover} alt="" />
      </Link>
      <div className="GigCards__info">
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="GigCards__user">
            <img src={user.img} alt="" onClick={handleUser} />
            <span onClick={handleUser}>{user.username}</span>
            <div className="GigCards__star">
              <img src={start} alt="star icon" />
              <span>
                {!isNaN(item.totalStars / item.stars) &&
                  Math.round(item.totalStars / item.stars)}
              </span>
            </div>
          </div>
        )}
        <p>{item.shortDesc}</p>
      </div>

      <Link to={`/gig/${item._id}`} className="link">
        <div className="GigCards__details">
          <img src={heart} alt="heart-icon" />
          <div className="GigCards__details-price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GigCards;
