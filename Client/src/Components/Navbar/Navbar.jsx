import React, { useState, useEffect, useContext } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import profileIcon from "../../assets/profile.png";
import axios from "axios";
import { Context } from "../../Context/context";

function Navbar() {
  const [navbarActive, setnavbarActive] = useState(false);
  const [userMenuOpen, setuserMenuOpen] = useState(false);
  const { setCategory, setSearch, setuserFilter } = useContext(Context);
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
      await axios.post("https://gigtastic.onrender.comender.com/api/v1/logout");
      await localStorage.removeItem("currentUser");
      navigate("/login");
    } catch (err) {
      return err;
    }
  };

  const handleCategory = (value) => {
    setuserFilter([]);
    setSearch("");
    setCategory(value);
    navigate(`/gigs`);
  };

  return (
    <div className={!navbarActive ? "Navbar" : "Navbar active"}>
      <div className="Navbar__container">
        <div className="Navbar__logo">
          <Link to="/" className="link">
            <h1 className={navbarActive ? "Navbar-tilte active" : undefined}>
              Gigtastic
            </h1>
          </Link>
        </div>
        <div className="Navbar__links">
          <Link to="/">
            <span>Gigtastic</span>
          </Link>
          <Link to="/gigs">
            <span>Explore</span>
          </Link>
          {!currentUser && (
            <Link to="/register">
              <span>Register</span>
            </Link>
          )}
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
                      <Link to="/myGigs">
                        <span>Mygigs</span>
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
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
      </div>
      {navbarActive && (
        <>
          <div className="bar" />
          <div className="Navbar__submenu">
            <span onClick={() => handleCategory("Web")}>
              Web and Mobile Design
            </span>
            <span onClick={() => handleCategory("Logo")}>Logo Design</span>
            <span onClick={() => handleCategory("Api")}>Build Api</span>
            <span onClick={() => handleCategory("Social")}>
              Social Media Design
            </span>
            <span onClick={() => handleCategory("Illustration")}>
              Illustration
            </span>
            <span onClick={() => handleCategory("AI")}>AI Art</span>
            <span onClick={() => handleCategory("Marketing")}>
              Digital Marketing
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
