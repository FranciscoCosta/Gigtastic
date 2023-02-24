import React from "react";
import "./Slide.scss";
import { cards } from "../../data";
import Slider from "infinite-react-carousel";
import CatCard from "../CatCard/CatCard";

function Slide() {
  return (
    <div className="Slide">
      <div className="Slide__container">
        <Slider
          slidesToShow={5}
          arrowsScroll={4}
          centerMode={true}
          centerPadding={0}
          autoplay={true}
          autoplayScroll={3}
        >
          {cards.map((item) => (
            <CatCard item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
