import "./BlogCard.css";

const BlogCard = ({ image, title, publisher, date }) => {
  return (
    <div className="blog-card">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p>
          by <span>{publisher}</span> on <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
