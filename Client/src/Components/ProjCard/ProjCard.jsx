import React, { useState, useEffect } from "react";
import "./ProjCard.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Audio } from "react-loader-spinner";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ProjCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [gigs, setGigs] = useState([]);
  const [projects, setprojects] = useState([]);
  const fetchData = async () => {
    const result = await axios.get(
      `https://gigtastic.onrender.com/api/v1/gigs`,
      {
        withCredentials: true,
      }
    );
    setGigs(result.data.result);
    const gigsWithUsers = result.data.result.map(async (item) => {
      const resultUser = await axios.get(
        `https://gigtastic.onrender.com/api/v1/user/${item.userId}`,
        {
          withCredentials: true,
        }
      );
      return { ...item, user: resultUser.data.result };
    });
    const resultUsers = await Promise.all(gigsWithUsers);
    setprojects(resultUsers);
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div className="ProjCard">
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
        <div className="ProjCard__container">
          <Carousel responsive={responsive} className="ProjCard__carousel">
            {projects.map((item) => (
              <Link
                to={`/gig/${item._id}`}
                className="ProjectLink"
                key={item.id}
              >
                <div className="ProjectCard-item">
                  <img src={item.cover} alt="project img" />
                  <div className="ProjectCard-info">
                    <img src={item.user.img} alt="people img" />
                    <div className="ProjectCard-info__text">
                      <h2>{item.category}</h2>
                      <p>{item.user.username}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}
