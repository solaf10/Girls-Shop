import "swiper/css";
import "./NewProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const NewProducts = () => {
  const [isSmallScrenn, setIsSmallScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, []);
  const categories = [
    { id: 1, image: "/assets/Images/slider-furniture.png", text: "Furniture" },
    { id: 2, image: "/assets/Images/slider-kitchen.jpg", text: "Kitchen" },
    { id: 3, image: "/assets/Images/slider-bathroom.png", text: "Bathroom" },
    { id: 4, image: "/assets/Images/slider-childroom.jpg", text: "Childroom" },
    {
      id: 5,
      image: "/assets/Images/slider-streetLighting1.jpg",
      text: "Street lighting",
    },
    {
      id: 6,
      image: "/assets/Images/slider-decoration.jpg",
      text: "Decoration",
    },
    {
      id: 7,
      image: "/assets/Images/slider-outdoorFurniture.jpg",
      text: "Outdoor furniture",
    },
  ];
  return (
    <section className="new-products">
      <div className="container">
        <div className="text">
          <div className="home-main-title">
            <h2>Shop by Category</h2>
            <p>
              Get the perfect piece for every space—living, dining, bedroom &
              more—all now with special promo prices!
            </p>
          </div>
          <Link to="/shop">
            <span>Check All</span>
            <MdArrowOutward className="arrow-icon" />
          </Link>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={isSmallScrenn ? 1.5 : 3.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <img src={category.image} alt={category.text} />
              <p>{category.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewProducts;
