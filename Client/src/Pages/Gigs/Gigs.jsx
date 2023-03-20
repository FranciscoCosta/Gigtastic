import React, { useState, useEffect, useRef, useContext } from "react";
import "./Gigs.scss";
import down from "../../assets/down.png";
import GigCards from "../../Components/GigCards/GigCards";
import { Context } from "../../Context/context";
import axios from "axios";
import { Audio } from "react-loader-spinner";

function Gigs() {
  const { category, search, userFilter, setuserFilter } = useContext(Context);
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gigs, setGigs] = useState([]);
  const minRef = useRef();
  const maxRef = useRef();

  const fetchData = async () => {
    setIsLoading(true);

    const result = await axios.get(
      `https://gigtastic.onrender.com/api/v1/gigs?&min=${minRef.current.value}&max=${maxRef.current.value}&category=${category}&search=${search}&sort=${sort}&user=${userFilter[0]}`,
      {
        withCredentials: true,
      }
    );
    setGigs(result.data.result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [sort, category]);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const handleApply = () => {
    fetchData();
  };

  return (
    <div className="Gigs">
      <div className="Gigs__container">
        <span className="Gigs__title-info">Gigtastic: {category || ""}</span>

        <h1>{category || "All Categories"}</h1>
        {userFilter.length > 0 && (
          <h2>
            Seller: <span>{userFilter[1]}</span>
          </h2>
        )}
        <p>Results:</p>
        <div className="Gigs__menu">
          <div className="Gigs__menu-left">
            <span>Budget</span>
            <input type="text" name="" id="" placeholder="min" ref={minRef} />
            <input type="text" name="" id="" placeholder="max" ref={maxRef} />
            <button onClick={handleApply}>Apply</button>
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
            gigs.map((gig) => <GigCards key={gig._id} item={gig} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
