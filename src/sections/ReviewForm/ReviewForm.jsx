import { useEffect, useState } from "react";
import "./ReviewForm.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import usePrivateRoute from "../../custom hooks/usePrivateRoute";
import { toast } from "react-toastify";
import config from "../../Constants/enviroment";

const ReviewForm = ({ setRerendered }) => {
  const { t } = useTranslation();
  const [review, setReview] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const userID = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get(`${config.baseUrl}/${config.users}/${userID}`)
      .then((res) => setCurrentUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  /* {
      "id": "1",
      "image": "/assets/Images/avatar.png",
      "publisher": "John Doe",
      "title": "Architecture",
      "content": "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”"
    }, */
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(config.baseUrl + "/" + config.reviews)
      .then((res) => {
        console.log(res.data);
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let newId;
  do {
    newId = Math.floor(Math.random() * 1000000);
  } while (reviews.some((user) => user.id === newId.toString()));
  const newReview = {
    id: newId.toString(),
    image: currentUser.image,
    publisher: currentUser.name,
    title: currentUser.type,
    content: review,
  };
  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/reviews", newReview)
      .then((res) => {
        console.log(res.data);
        setReview("");
        setRerendered((prev) => !prev);
        toast.success("Your review is Added");
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong!!");
      });
  };
  const handlePrivateRoute = usePrivateRoute((e) => handleSubmit(e));
  return (
    <div className="review-form">
      <div className="container">
        <div className="image">
          <img src="/assets/Images/home-contact-sofa.png" alt="sofa" />
        </div>
        <div className="text">
          <div className="home-main-title">
            <h2>{t("reviewForm.title")}</h2>
          </div>
          <form onSubmit={(e) => handlePrivateRoute(e)}>
            <textarea
              className="review-input"
              onChange={(event) => setReview(event.target.value)}
              placeholder={t("reviewForm.placeholder")}
              value={review}
            ></textarea>
            <input
              className="send-btn"
              type="submit"
              value={t("reviewForm.button")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
