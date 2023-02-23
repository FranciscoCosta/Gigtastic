import React, { useState, useEffect } from "react";
import "./Navbar.scss";
// import { Link } from "react-router-dom";

function Navbar() {
  const [navbarActive, setnavbarActive] = useState(false);
  const [userMenuOpen, setuserMenuOpen] = useState(false);

  const isScrolled = () => {
    window.scrollY > 0 ? setnavbarActive(true) : setnavbarActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isScrolled);
    return () => {
      window.addEventListener("scroll", isScrolled);
    };
  }, []);

  const currentUser = {
    img: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    id: 1,
    username: "FranciscoCosta",
    isSeller: true,
  };

  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__logo">
          {/* <Link to="/"> */}
          <h1>Gigtastic</h1>
          {/* </Link> */}
        </div>
        <div className="Navbar__links">
          <a href="/">Gigtastic</a>
          <a href="/">Explore</a>
          <a href="/">Sign in</a>
          {!currentUser.isSeller && <a href="/">Become a seller</a>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div 
            className="user"
            onClick={() => setuserMenuOpen(!userMenuOpen)}
            >
              <img src={currentUser.img} alt="" />
              <span>{currentUser.username}</span>
              {userMenuOpen &&
                <div className="userMenu">
                {currentUser.isSeller && (
                  <>
                    <a href="/">Gigs</a>
                    <a href="/">Add New Gig</a>
                  </>
                )}
                <a href="/">Orders</a>
                <a href="/">Messages</a>
                <a href="/">Logout</a>
              </div>}
            </div>
          )}
        </div>
      </div>
      {navbarActive && (
        <>
          <div className="bar" />
          <div className="Navbar__submenu">
            <span>Test</span>
            <span>test2</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
