import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Reviews.css";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      image: "/assets/Images/avatar.png",
      publisher: "John Doe",
      title: "Architecture",
      content:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      id: 2,
      image: "/assets/Images/avatar.png",
      publisher: "John Doe",
      title: "Architecture",
      content:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      id: 3,
      image: "/assets/Images/avatar.png",
      publisher: "John Doe",
      title: "Architecture",
      content:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      id: 4,
      image: "/assets/Images/avatar.png",
      publisher: "John Doe",
      title: "Architecture",
      content:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      id: 5,
      image: "/assets/Images/avatar.png",
      publisher: "John Doe",
      title: "Architecture",
      content:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      id: 6,
      image: "/assets/Images/avatar.png",
      publisher: "John Doe",
      title: "Architecture",
      content:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      id: 7,
      image: "/assets/Images/avatar.png",
      publisher: "John Doe",
      title: "Architecture",
      content:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      id: 8,
      image: "/assets/Images/avatar.png",
      publisher: "John Doe",
      title: "Architecture",
      content:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ];
  return (
    <section className="reviews">
      <div className="container">
        <div className="home-main-title">
          <h2>What people are saying about us</h2>
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
