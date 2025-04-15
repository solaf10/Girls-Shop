import "./ReviewForm.css";

const ReviewForm = () => {
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
            ></textarea>
            <input className="send-btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
