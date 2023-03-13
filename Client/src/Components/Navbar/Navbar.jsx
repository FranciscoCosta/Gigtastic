import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import profileIcon from "../../assets/profile.png";
import axios from "axios";

function Navbar() {
  const [navbarActive, setnavbarActive] = useState(false);
  const [userMenuOpen, setuserMenuOpen] = useState(false);
  // const {pathname} = useLocation();

  const navigate = useNavigate();

  const isScrolled = () => {
    window.scrollY > 0 ? setnavbarActive(true) : setnavbarActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isScrolled);
    return () => {
      window.addEventListener("scroll", isScrolled);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/logout");
      await localStorage.removeItem("currentUser");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
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
          <Link to="/">
            <span>Gigtastic</span>
          </Link>
          <Link to="/">
            <span>Explore</span>
          </Link>
          <Link to="/register">
            <span>Sign in</span>
          </Link>
          {/* {!currentUser.isSeller ||
            (false && (
              <Link to="/">
                <span>Become a seller</span>
              </Link>
            ))} */}
          {currentUser ? (
            <div
              className="user"
              onClick={() => setuserMenuOpen(!userMenuOpen)}
            >
              <img src={currentUser.img || profileIcon} alt="" />
              <span>{currentUser.username}</span>
              {userMenuOpen && (
                <div className="userMenu">
                  {currentUser.isSeller && (
                    <>
                      <Link to="/gigs">
                        <span>Gigs</span>
                      </Link>
                      <Link to="/add">
                        <span>Add New Gig</span>
                      </Link>
                    </>
                  )}
                  <Link to="/orders">
                    <span>Orders</span>
                  </Link>
                  <Link to="/messages">
                    <span>Messages</span>
                  </Link>
                  <Link onClick={handleLogout}>
                    <span>Logout</span>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => navigate("/login")}>Join</button>
          )}
        </div>
      </div>
      {navbarActive && (
        <>
          <div className="bar" />
          <div className="Navbar__submenu">
            <span>Web and Mobile Design</span>
            <span>Logo Design</span>
            <span>Build Api</span>
            <span>Build Website</span>
            <span>Social Media Design</span>
            <span>Illustration</span>
            <span>AI Art</span>
            <span>Digital Marketing</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
