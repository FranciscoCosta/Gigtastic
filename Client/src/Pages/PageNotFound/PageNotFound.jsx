import React from "react";
import "./PageNotFound.scss";
import Error404 from "../../assets/404.jpg";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <img src={Error404} alt="error404 img" />
    </div>
  );
}

export default PageNotFound;
