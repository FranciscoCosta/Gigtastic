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

  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    console.log("SDAASDASDASDAS");
    const makeRequest = async () => {
      try {
        console.log("entrei no try");
        const response = await axios.post(
          `https://gigtastic.onrender.com/create-payment-intent/${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        console.log("response");
        setClientSecret(response.data.clientSecret);
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
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default Pay;
