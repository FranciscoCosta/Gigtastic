import React,{useState, useEffect} from 'react'
import './Reviews.scss'
import star from "../../assets/star.png";


function Reviews({gig}) {

  const [reviews, setreviews] = useState([])

  return (
    <div className="Gig__reviews">
    <h2>Reviews</h2>
    {console.log(reviews)}
{(reviews.length=== 0) ? <h2>This product dosent have reviews.</h2> :
    <div className="Gig__item">
      <div className="Gig__user">
        <img
          className="Gig__pp"
          src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div className="Gig__info">
          <span>Garner David</span>
          <div className="Gig__country">
            <img
              src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
              alt=""
            />
            <span>United States</span>
          </div>
        </div>
      </div>
      <div className="Gig__stars">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <span>5</span>
      </div>
      <p>
        I just want to say that art_with_ai was the first, and after
        this, the only artist Ill be using on Fiverr. Communication
        was amazing, each and every day he sent me images that I was
        free to request changes to. They listened, understood, and
        delivered above and beyond my expectations. I absolutely
        recommend this gig, and know already that Ill be using it
        again very very soon
      </p>
      <div className="Gig__helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>}
    <hr />
  </div>
  )
}

export default Reviews