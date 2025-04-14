import "./ReviewCard.css";

const ReviewCard = ({ image, publisher, title, content }) => {
  return (
    <div className="review-card">
      <div className="publisher">
        <div className="image">
          <img src={image} alt={publisher} />
        </div>
        <div className="infos">
          <p className="name">{publisher}</p>
          <p className="title">{title}</p>
        </div>
      </div>
      <div className="review-content">{content}</div>
    </div>
  );
};

export default ReviewCard;
