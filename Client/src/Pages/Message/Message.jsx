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
  const [update, setupdate] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    getMessages(id);
  }, [update]);

  const getMessages = async (id) => {
    try {
      const res = await axios.get(
        `https://gigtastic.onrender.com/api/v1/message/${id}`,
        {
          withCredentials: true,
        }
      );
      setMessages(res.data);
    } catch (err) {
      return err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `https://gigtastic.onrender.com/api/v1/message/`,
        {
          conversationId: id,
          desc: newMessage,
        },
        {
          withCredentials: true,
        }
      );
      setupdate(!update);
      setNewMessage("");
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="Message">
      {isLoading ? (
        "Loading"
      ) : (
        <div className="Message__container">
          <span className="Message__info">
            <Link to="/messages" className="link">
              Messages {" >"}
            </Link>
          </span>
          <div className="messages">
            {messages.map((m) => (
              <div
                className={m.userId === currentUser._id ? "owner item" : "item"}
                key={m._id}
              >
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="profile-default"
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
          <hr />
          <form className="Message__write" onSubmit={handleSubmit}>
            <textarea
              type="text"
              placeholder="write a message"
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Message;
