import React, { useState, useContext, useEffect } from "react";
import "./Featured.scss";
import hero from "../../assets/hero.png";
import searchIcon from "../../assets/search.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/context";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const { setCategory, setSearch } = useContext(Context);

  useEffect(() => {
    setCategory("");
    setSearch("");
  }, []);

  return (
    <div className="Featured">
      <div className="Featured__container">
        <div className="Featured-left">
          <h1>
            Find the Perfect services for <span>YOUR</span> business.
          </h1>
          <div className="Featured__search">
            <div className="Featured__search-input">
              <img src={searchIcon} alt="search-icon" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                setSearch(input);
                navigate(`/gigs`);
              }}
            >
              Search
            </button>
          </div>
          <div className="Featured__popular">
            <span>Popular: </span>
            <button
              onClick={() => {
                setCategory("Web");
                navigate("/gigs");
              }}
            >
              Web Design
            </button>
            <button
              onClick={() => {
                setCategory("Logo");
                navigate("/gigs");
              }}
            >
              Logo Design
            </button>
            <button
              onClick={() => {
                setCategory("Api");
                navigate("/gigs");
              }}
            >
              Build Api
            </button>
            <button
              onClick={() => {
                setCategory("AI");
                navigate("/gigs");
              }}
            >
              AI Services
            </button>
          </div>
        </div>
        <div className="Featured-right">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
