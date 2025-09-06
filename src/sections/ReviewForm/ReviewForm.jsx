import { useEffect, useState } from "react";
import "./ReviewForm.css";
import axios from "axios";

const ReviewForm = () => {
  const [review , setReview] = useState("")
  const sendReview = () =>  {
  axios
  .post("http://localhost:8000/reviews" , {
    yourReview:content 
  })
  .then( (res) => setReview(res))
  .catch( (err) => console.log(err))
  }
  return (
    <div className="review-form">
      <div className="container">
        <div className="image">
          <img src="/assets/Images/home-contact-sofa.png" alt="sofa" />
        </div>
        <div className="text">
          <div className="home-main-title">
            <h2>Your Feedback Matters: Share Your Review</h2>
          </div>
          <form>
            <textarea
              className="review-input"
              placeholder="Your Review"
              onChange={(event) => {setReview(event.target.value)}}
            ></textarea>
            <input className="send-btn" type="submit" value="Send" onClick={sendReview}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
