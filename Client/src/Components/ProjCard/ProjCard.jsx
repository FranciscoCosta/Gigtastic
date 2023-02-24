import React from 'react'
import './ProjCard.scss'
import Slider from "infinite-react-carousel";
import { projects } from "../../data";

export default function ProjCard() {
  return (
    <div className='ProjCard'>
        <div className="ProjCard__container">
        <Slider
          slidesToShow={5}
          arrowsScroll={4}
          centerMode={true}
          centerPadding={0}
          autoplay={true}
          autoplayScroll={3}
        >
          {projects.map((item) => (
            <div className="ProjectCard" key={item.id}>
                <img src={item.img} alt="project img" />
                <div className="ProjectCard-info">
                    <img src={item.pp} alt="people img" />
                    <div className="ProjectCard-info__text">
                        <h2>{item.cat}</h2>
                        <p>{item.username}</p>
                        </div>
                </div>

            </div>
          ))}
        </Slider>

        </div>
    </div>
  )
}
