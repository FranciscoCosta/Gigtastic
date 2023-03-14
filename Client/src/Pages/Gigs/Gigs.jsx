import React, { useState, useEffect, useRef } from "react";
import "./Gigs.scss";
import down from "../../assets/down.png";
import GigCards from "../../Components/GigCards/GigCards";
import axios from "axios";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gigs, setGigs] = useState([]);
  const minRef = useRef();
  const maxRef = useRef();

  const fetchData = async () => {
    setIsLoading(true);
    const result = await axios.get("http://localhost:8080/api/v1/gigs", {
      withCredentials: true,
    });
    setGigs(result.data.result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reSort = (type) => {
    setSort(type);
  };

  return (
    <div className="Gigs">
      <div className="Gigs__container">
        <span className="Gigs__title-info">Gigtastic: Graphic & Design</span>
        <h1>AI Artist</h1>
        <p>Explore BLA BLA BLA BLA BLA BLA</p>
        <div className="Gigs__menu">
          <div className="Gigs__menu-left">
            <span>Budget</span>
            <input type="text" name="" id="" placeholder="min" ref={minRef} />
            <input type="text" name="" id="" placeholder="max" ref={maxRef} />
            <button>Apply</button>
          </div>
          <div className="Gigs__menu-right">
            <span className="Menu__sortBy">SortBy</span>
            <span className="Menu__sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src={down}
              alt="down-arrow-icon"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="Sort__menu">
                <span onClick={() => reSort("createdAt")}>Newest</span>
                <span onClick={() => reSort("sales")}>Best Selling</span>
              </div>
            )}
          </div>
        </div>
        <div className="Gigs__cards">
          {isLoading
            ? "Loading..."
            : gigs.map((gig) => <GigCards key={gig.id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
