import "./AllComments.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../Constants/enviroment";

const AllComments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${config.baseUrl}/${config.blogs}/${params.id}`)
      .then((res) => {
        setIsLoading(false);
        setComments(res.data.comments);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [params.id]);
  const commentsEls = comments.map((comment) => (
    <div className="name-and-comment" key={comment.id}>
      <div className="name-and-time">
        <h4> {comment.name}</h4>
        <p className="time">{comment.date}</p>
      </div>

      <p className="comment">{comment.message}</p>
    </div>
  ));
  return (
    <div className="all-comments">
      <div className="container">{commentsEls}</div>
    </div>
  );
};

export default AllComments;
