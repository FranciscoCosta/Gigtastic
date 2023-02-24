import React from "react";
import check from "../../assets/check.png";
import "./Features.scss";
import feat from "../../assets/Feat.jpg"

function Features() {
  return (
    <div className="Features">
      <div className="Features__container">
        <div className="Features__left">
          <h1>About Gigtastic</h1>
          <div className="Features__item">
            <div className="Features__item__title">
              <img src={check} alt="check-icon" />
              <h2>Freelance Services:</h2>
            </div>
            <div className="Features__item__description">
              <p>
                Gigtastic is a digital marketplace that connects businesses and
                individuals with freelance professionals who offer a wide range
                of services.Gigtastic allows users to hire experts for
                everything from graphic design and content creation to web
                development and marketing.
              </p>
            </div>
          </div>
          <div className="Features__item">
            <div className="Features__item__title">
              <img src={check} alt="check-icon" />
              <h2>Easy to Use:</h2>
            </div>
            <div className="Features__item__description">
              <p>
                Gigtastic provides an intuitive platform for both freelancers
                and clients to communicate, share files, and complete
                transactions. The site is designed to be user-friendly and easy
                to navigate, making it easy for anyone to find the right talent
                or showcase their skills.
              </p>
            </div>
          </div>
          <div className="Features__item">
            <div className="Features__item__title">
              <img src={check} alt="check-icon" />
              <h2>Competitive Pricing: </h2>
            </div>
            <div className="Features__item__description">
              <p>
                Gigtastic, offers competitive pricing for freelance
                services. The platform provides transparent pricing structures
                for each gig, making it easy for clients to compare prices and
                choose the best service provider for their needs.
              </p>
            </div>
          </div>
        </div>
        <div className="Features__right">

          <img src={feat} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Features;
