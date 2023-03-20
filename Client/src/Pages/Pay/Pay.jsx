import React, { useState, useEffect } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CheckoutForm } from "../../Components";
import { Audio } from "react-loader-spinner";

const stripePromise = loadStripe(
  "pk_test_51MmjZULyAsPMyCj4OKTdisyLXVnTAnjliujFmxMnTSGONN1UAJPJQLhABKzQpF4Fh6tgOVqFtUaJjZFclBqT3E6N00g9OD12UV"
);

function Pay() {
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setisLoading(true);
    const makeRequest = async () => {
      try {
        const response = await axios.post(
          `https://gigtastic.onrender.com/create-payment-intent/${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        setClientSecret(response.data.clientSecret);
        setisLoading(false);
      } catch (error) {
        return error;
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Pay">
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
        clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )
      )}
    </div>
  );
}

export default Pay;
