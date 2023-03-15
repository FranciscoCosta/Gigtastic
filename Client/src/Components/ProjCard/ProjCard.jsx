import React, { useState, useEffect } from "react";
import "./ProjCard.scss";
import Slider from "infinite-react-carousel";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProjCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [gigs, setGigs] = useState([]);
  const [projects, setprojects] = useState([]);
  const fetchData = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/gigs`, {
      withCredentials: true,
    });
    setGigs(result.data.result);
    const gigsWithUsers = result.data.result.map(async (item) => {
      const resultUser = await axios.get(
        `http://localhost:8080/api/v1/user/${item.userId}`,
        {
          withCredentials: true,
        }
      );
      return { ...item, user: resultUser.data.result };
    });
    const resultUsers = await Promise.all(gigsWithUsers);
    setprojects(resultUsers);
    console.log(resultUsers[0].user.img);
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div className="ProjCard">
      {isLoading ? (
        "Loading"
      ) : (
        <div className="ProjCard__container">
          {/* <Slider
            slidesToShow={4}
            arrowsScroll={4}
            centerMode={true}
            centerPadding={0}
            autoplay={true}
            autoplayScroll={3}
          >
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
          </Slider> */}
        </div>
      )}
    </div>
  );
}
