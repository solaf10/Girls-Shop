import { useNavigate } from "react-router-dom";
import "./RecentBlog.css";

const RecentBlog = ({ id, title, date, publisher }) => {
  const navigate = useNavigate();
  return (
    <div className="recent-one-blog" onClick={() => navigate(`/blogs/${id}`)}>
      <p className="blog-name">{title}</p>
      <div className="publisher-name-and-date">
        <p>{publisher}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default RecentBlog;
