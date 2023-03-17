import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Message.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const Message = () => {
  const { id } = useParams();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMessages(id);
  }, []);

  const getMessages = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/messages/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/messages/`,
        {
          conversationId: id,
          desc: e.target[0].value,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Message">
      {isLoading ? (
        "Loading"
      ) : (
        <div className="Message__container">
          <span className="Message__info">
            <Link to="/messages">Messages</Link> - John Doe -
          </span>
          <div className="messages">
            {messages.map((m) => (
              <div className="item" key={m._id}>
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
          <hr />
          <form className="Message__write" onSubmit={handleSubmit}>
            <textarea type="text" placeholder="write a message" />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Message;
