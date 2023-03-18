import React, { useState, useEffect } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CheckoutForm } from "../../Components";

const stripePromise = loadStripe(
  "pk_test_51MmjZULyAsPMyCj4OKTdisyLXVnTAnjliujFmxMnTSGONN1UAJPJQLhABKzQpF4Fh6tgOVqFtUaJjZFclBqT3E6N00g9OD12UV"
);

function Pay() {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/create-payment-intent/${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.log(error);
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
