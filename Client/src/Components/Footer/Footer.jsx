import React, { useContext } from "react";
import "./Footer.scss";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { Context } from "../../Context/context";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const { setCategory, setSearch, setuserFilter } = useContext(Context);

  const handleCategory = (value) => {
    setuserFilter([]);
    setSearch("");
    setCategory(value);
    navigate(`/gigs`);
  };

  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__container__top">
          <div className="Footer-categories">
            <h1>Categories:</h1>
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
        </div>
        <div className="Footer__container__bottom">
          <div className="Footer-container-social">
            <div className="copyright">
              <p className="p-text">@2023 Francisco Costa</p>
              <p className="p-text">Todos os direitos reservados.</p>
            </div>
            <div className="social">
              <div>
                <BsLinkedin
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/francisco-costa-dev/",
                      "_blank"
                    );
                  }}
                />
              </div>
              <div>
                <BsGithub
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("https://github.com/FranciscoCosta", "_blank");
                  }}
                />
              </div>
              <div>
                <BsInstagram
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/tuga_no_brasil/",
                      "_blank"
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
