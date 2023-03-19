import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";
import "./Orders.scss";
import messageIcon from "../../assets/message.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [isLoading, setisLoading] = useState(true);
  const [orders, setorders] = useState([]);

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    const orders = await axios.get("http://localhost:8080/api/v1/orders", {
      withCredentials: true,
    });
    const ordersFilter = await orders.data.orders.filter((orderUser) => {
      if (currentUser.isSeller) {
        return orderUser.sellerId === currentUser._id;
      }
      if (!currentUser.isSeller) {
        return orderUser.buyerId === currentUser._id;
      }
    });
    setorders(ordersFilter);
    setisLoading(false);
  };

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      await axios.get(`http://localhost:8080/api/v1/conversation/${id}`, {
        withCredentials: true,
      });
      navigate(`/message/${id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await axios.post(
          `http://localhost:8080/api/v1/conversation`,
          {
            to: currentUser.isSeller ? buyerId : sellerId,
          },
          {
            withCredentials: true,
          }
        );
        navigate(`/message/${res.data.conv.id}`);
      }
    }
  };

  return (
    <div className="Orders">
      {isLoading ? (
        "Loading ..."
      ) : (
        <div className="Orders__container">
          <div className="Orders__title">
            <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New Gig</button>
              </Link>
            )}
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
            {orders.map((item) => (
              <tr key={`order-${item._id}`}>
                <td>
                  <img className="image" src={item.img} alt="" />
                </td>
                <td>{item.title}</td>
                <td>{item.price}$USD</td>
                <td>
                  <img
                    className="delete"
                    src={messageIcon}
                    alt=""
                    onClick={() => handleContact(item)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
