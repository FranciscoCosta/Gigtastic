import React, { useEffect, useState } from "react";
import "./Gig.scss";
import star from "../../assets/star.png";
import Slider from "infinite-react-carousel";
import axios from "axios";
import { useParams } from "react-router-dom";
import check from "../../assets/greencheck.png";

function Gig() {
  const [isLoading, setIsLoading] = useState(true);
  const [gig, setGig] = useState([]);
  const [user, setUser] = useState([]);

  const { id } = useParams();
  const fetchData = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/v1/gig/${id}`);
    setGig(result.data);
    const user = await axios.get(
      `http://localhost:8080/api/v1/user/${result.data.userId}`
    );
    console.log(user.data.result);
    setUser(user.data.result);

    setIsLoading(false);
  };
  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <div className="Gig">
      {isLoading ? (
        "isLoading"
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
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>
                  {!isNaN(gig.totalStars / gig.stars) &&
                    Math.round(gig.totalStars / gig.stars)}
                </span>
              </div>
            </div>
            {/* <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {gig.images.map((img) => {
                return <img src={img} alt="" key={img} />;
              })}
            </Slider> */}
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
            <div className="Gig__reviews">
              <h2>Reviews</h2>
              <div className="Gig__item">
                <div className="Gig__user">
                  <img
                    className="Gig__pp"
                    src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="Gig__info">
                    <span>Garner David</span>
                    <div className="Gig__country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="Gig__stars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <span>5</span>
                </div>
                <p>
                  I just want to say that art_with_ai was the first, and after
                  this, the only artist Ill be using on Fiverr. Communication
                  was amazing, each and every day he sent me images that I was
                  free to request changes to. They listened, understood, and
                  delivered above and beyond my expectations. I absolutely
                  recommend this gig, and know already that Ill be using it
                  again very very soon
                </p>
                <div className="Gig__helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>
              <hr />
            </div>
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
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
