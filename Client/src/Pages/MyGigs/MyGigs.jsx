import React, { useState, useEffect } from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import deleteIcon from "../../assets/delete.png";
import axios from "axios";
import { Audio } from "react-loader-spinner";

function MyGigs() {
  const [isLoading, setIsLoading] = useState(false);
  const [gigs, setGigs] = useState([]);
  const [update, setupdate] = useState(false);

  useEffect(() => {
    fetchGigs();
  }, [update]);

  const fetchGigs = async () => {
    setIsLoading(true);
    try {
      const gigsFromuser = await axios.get(
        `https://gigtastic.onrender.comigsuser`,
        {
          withCredentials: true,
        }
      );
      setGigs(gigsFromuser.data.result);
      setIsLoading(false);
    } catch (error) {
      return error;
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://gigtastic.onrender.comig/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
    setupdate(!update);
  };

  return (
    <div className="MyGigs">
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
        <div className="MyGigs__container">
          <div className="MyGigs__title">
            <h1>Gigs</h1>
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            {gigs?.map((gig) => (
              <tr key={gig.title}>
                <td>
                  <img className="image" src={gig.cover} alt="gig-cover" />
                </td>
                <td>{gig.title}</td>
                <td>{gig.price}</td>
                <td>{gig.sales}</td>
                <td>
                  <img
                    className="delete"
                    src={deleteIcon}
                    alt=""
                    onClick={() => handleDelete(gig._id)}
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

export default MyGigs;
