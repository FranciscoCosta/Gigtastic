import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [navbarActive, setnavbarActive] = useState(false);
  const [userMenuOpen, setuserMenuOpen] = useState(false);
  // const {pathname} = useLocation();


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
    <div className={!navbarActive ? "Navbar" : "Navbar active"}>
      <div className="Navbar__container">
        <div className="Navbar__logo">
          <Link to="/" className="link"> 
          <h1 className={navbarActive && "Navbar-tilte active"}>Gigtastic</h1>
          </Link>
        </div>
        <div className="Navbar__links">
          <Link to="/"><span>Gigtastic</span></Link>
          <Link to="/"><span>Explore</span></Link>
          <Link to="/register"><span>Sign in</span></Link>
          {!currentUser.isSeller && <Link to="/"><span>Become a seller</span></Link>}
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
                    <Link to="/gigs"><span>Gigs</span></Link>
                    <Link to="/add"><span>Add New Gig</span></Link>
                  </>
                )}
                <Link to="/orders"><span>Orders</span></Link>
                <Link to="/messages"><span>Messages</span></Link>
                <Link to="/logout"><span>Logout</span></Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {navbarActive && (
        <>
          <div className="bar" />
          <div className="Navbar__submenu">
            <span>Web Design</span>
            <span>Logo Design</span>
            <span>Build Api</span>
            <span>AI Services</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
