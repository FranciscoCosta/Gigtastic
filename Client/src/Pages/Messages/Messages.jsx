import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import axios from "axios";
import moment from "moment";
const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [isLoading, setisLoading] = useState(false);
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    console.log("fetch");
    const messages = await axios.get(
      "http://localhost:8080/api/v1/conversations",
      {
        withCredentials: true,
      }
    );
    setmessages(messages.data.conversations);
    setisLoading(false);
  };

  const handleRead = async (id) => {
    console.log(id);
    const updateStatus = await axios.put(
      `http://localhost:8080/api/v1/conversation/${id}`,
      { withCredentials: true }
    );
    console.log(updateStatus);
  };

  return (
    <div className="Messages">
      {isLoading ? (
        "Loading"
      ) : (
        <div className="Messages__container">
          <div className="Messages__title">
            <h1>Messages</h1>
          </div>
          <table>
            <tr>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {messages.map((message) => (
              <tr
                className={
                  ((currentUser.isSeller && !message.readBySeller) ||
                    (!currentUser.isSeller && !message.readByBuyer)) &&
                  "active"
                }
                key={message._id}
              >
                <td>
                  {currentUser.isSeller ? message.buyerId : message.sellerId}
                </td>
                <td>
                  <Link to={`/message/${message.id}`} className="link">
                    {message?.lastMessage?.substring(0, 100)}...
                  </Link>
                </td>
                <td>{moment(message.updatedAt).fromNow()}</td>
                <td>
                  {((currentUser.isSeller && !message.readBySeller) ||
                    (!currentUser.isSeller && !message.readByBuyer)) && (
                    <button onClick={() => handleRead(message.id)}>
                      Mark as Read
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
