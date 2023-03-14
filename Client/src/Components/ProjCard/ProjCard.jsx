import React from "react";
import "./ProjCard.scss";
import Slider from "infinite-react-carousel";
import { projects } from "../../data";
import { Link } from "react-router-dom";

export default function ProjCard() {
  return (
    <div className="ProjCard">
      <div className="ProjCard__container">
        <Slider
          slidesToShow={4}
          arrowsScroll={4}
          centerMode={true}
          centerPadding={0}
          autoplay={true}
          autoplayScroll={3}
        >
          {projects.map((item) => (
            <Link to="/gigs" className="ProjectLink" key={item.id}>
              <div className="ProjectCard-item">
                <img src={item.img} alt="project img" />
                <div className="ProjectCard-info">
                  <img src={item.pp} alt="people img" />
                  <div className="ProjectCard-info__text">
                    <h2>{item.cat}</h2>
                    <p>{item.username}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
