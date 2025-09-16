import "./AllComments.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import config from "../../Constants/enviroment";
import { FaRegStar, FaStar } from "react-icons/fa";
import EmptyHandler from "../../components/EmptyHandler/EmptyHandler";

const AllComments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const location = useLocation();
  const isShop = location.pathname.includes("shop");
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${config.baseUrl}/${isShop ? config.products : config.blogs}/${
          params.id
        }`
      )
      .then((res) => {
        setIsLoading(false);
        setComments(res.data.comments);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [params.id]);
  const handleDrawStars = (cnt) => {
    return [...new Array(5)].map((el, i) =>
      i + 1 <= cnt ? (
        <FaStar className="icon" key={i} />
      ) : (
        <FaRegStar className="icon" key={i} />
      )
    );
  };
  const commentsEls = comments.map((comment) => (
    <div className="name-and-comment" key={comment?.id}>
      <div className="name-and-time">
        <h4> {comment?.name}</h4>
        {isShop && (
          <div className="rating">{handleDrawStars(comment?.rate)}</div>
        )}
        <p className="time">{comment?.date}</p>
      </div>

      <p className="comment">{comment?.message}</p>
    </div>
  ));
  return (
    <div className="all-comments">
      <div className="container">
        {comments.length == 0 ? (
          <EmptyHandler message="There isn't any comments yet!!" />
        ) : (
          commentsEls
        )}
      </div>
    </div>
  );
};

export default AllComments;
