import React, { useEffect, useState } from "react";
import "./Gig.scss";
import star from "../../assets/star.png";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import check from "../../assets/greencheck.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Reviews } from "../../Components";
import { Audio } from "react-loader-spinner";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Gig() {
  const [isLoading, setIsLoading] = useState(false);
  const [gig, setGig] = useState([]);
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { id } = useParams();
  const fetchData = async (id) => {
    setIsLoading(true);
    const result = await axios.get(
      `https://gigtastic.onrender.com/api/v1/gig/${id}`
    );
    const userF = await axios.get(
      `https://gigtastic.onrender.com/api/v1/user/${result.data.userId}`
    );
    setGig(result.data.gig);
    console.log(userF, "DATA USER F");
    setUser(userF.data.user);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData(id);
  }, []);

  const handlePayment = (id) => {
    if (!currentUser) setError("You need to be logged in to order a gig!");
    if (currentUser.isSeller)
      setError("Login in a buyer account to order a gig!");
    else {
      navigate(`/pay/${id}`);
    }
  };

  return (
    <div className="Gig">
      {isLoading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#1db954"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <div className="Gig__container">
          <div className="Gig__left">
            <span className="Gigs__title-info">
              Gigtastic: {gig.category || ""}
            </span>
            <h1>{gig.title}</h1>

            <div className="Gig__user">
              <img className="pp" src={user.img} alt="userPhoto" />
              <span>{user.username}</span>
              <div className="Gig__stars">
                {gig.totalStars > 0 &&
                  Array(Math.round(gig.totalStars / gig.stars))
                    .fill()
                    .map((item, i) => <img src={star} alt="" key={i} />)}
                <span>
                  {!isNaN(gig.totalStars / gig.stars) &&
                    Math.round(gig.totalStars / gig.stars)}
                </span>
              </div>
            </div>
            <Carousel responsive={responsive} className="slider">
              {gig.images.map((img) => {
                return <img src={img} alt="" key={img} />;
              })}
            </Carousel>
            <h2>About This Gig</h2>
            <p>{gig.desc}</p>
            <div className="Gig__seller">
              <h2>About The Seller</h2>
              <div className="Gig__user">
                <img src={user.img} alt="sellerImg" />
                <div className="Gig__info">
                  <span>{user.username}</span>
                  <div className="Gig__stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <span>5</span>
                  </div>
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="Gig__box">
                <div className="Gig__items">
                  <div className="Gig__item">
                    <span className="Gig__title">From:</span>
                    <span className="Gig__desc">{user.country}</span>
                  </div>
                  <div className="Gig__item">
                    <span className="Gig__title">Member since:</span>
                    <span className="Gig__desc">{Date(user.createdAT)}</span>
                  </div>
                  <div className="Gig__item">
                    <span className="Gig__title">Avg. response time:</span>
                    <span className="Gig__desc">4 hours</span>
                  </div>
                  <div className="Gig__item">
                    <span className="Gig__title">Last delivery:</span>
                    <span className="Gig__desc">1 day</span>
                  </div>
                  <div className="item"></div>
                </div>
                <hr />
                <p>{user.desc}</p>
              </div>
            </div>
            <Reviews id={gig._id} />
          </div>
          <div className="Gig__right">
            <div className="Gig__price">
              <h3>{gig.shorttitle}</h3>
              <h2>{gig.price}$USD</h2>
            </div>
            <p>{gig.shortDesc}</p>
            <div className="Gig__details">
              <div className="Gig__item">
                <img src="/img/clock.png" alt="" />
                <span>{gig.deliveryTime} day(s).</span>
              </div>
              <div className="Gig__item">
                <img src="/img/recycle.png" alt="" />
                <span>{gig.revisionNumber} Revision(s).</span>
              </div>
            </div>
            <div className="Gig__features">
              {gig.features.map((feature, index) => {
                return (
                  <div className="Gig__item" key={index}>
                    <img src={check} alt="" />
                    <span>{feature}</span>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => {
                handlePayment(id);
              }}
            >
              Continue
            </button>
            <p className="Gig__error">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
