import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Reviews.css";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import config from "../../../Constants/enviroment";

const Reviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(config.baseUrl + "/" + config.reviews)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="reviews">
      <div className="container">
        <div className="home-main-title">
          <h2>{t("reviews.title")}</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard
                publisher={review.publisher}
                image={review.image}
                title={review.title}
                content={review.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
