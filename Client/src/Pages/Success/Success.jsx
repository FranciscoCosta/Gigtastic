import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Success.scss";
import { Audio } from "react-loader-spinner";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await axios.put(
          "https://gigtastic.onrender.com/api/v1/orders",
          { payment_intent },
          { withCredentials: true }
        );
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        return err;
      }
    };

    makeRequest();
  }, []);

  return (
    <div className="Success">
      <div className="Success__container">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#1db954"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        ;<h1>Payment successful.</h1>
        <p>
          You are being redirected to the orders page.
          <br />
          Please do not close the page.
        </p>
      </div>
    </div>
  );
};

export default Success;
