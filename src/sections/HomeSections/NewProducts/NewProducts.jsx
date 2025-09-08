import "swiper/css";
import "./NewProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const NewProducts = () => {
  const { t } = useTranslation();
  const [isSmallScrenn, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, []);

  const categories = [
    {
      id: 1,
      image: "/assets/Images/slider-furniture.png",
      text: t("newProducts.categories.furniture"),
    },
    {
      id: 2,
      image: "/assets/Images/slider-kitchen.jpg",
      text: t("newProducts.categories.kitchen"),
    },
    {
      id: 3,
      image: "/assets/Images/slider-bathroom.png",
      text: t("newProducts.categories.bathroom"),
    },
    {
      id: 4,
      image: "/assets/Images/slider-childroom.jpg",
      text: t("newProducts.categories.childroom"),
    },
    {
      id: 5,
      image: "/assets/Images/slider-streetLighting2.jpg",
      text: t("newProducts.categories.streetLighting"),
    },
    {
      id: 6,
      image: "/assets/Images/slider-decoration.jpg",
      text: t("newProducts.categories.decoration"),
    },
    {
      id: 7,
      image: "/assets/Images/slider-outdoorFurniture.jpg",
      text: t("newProducts.categories.outdoorFurniture"),
    },
  ];

  return (
    <section className="new-products">
      <div className="container">
        <div className="text">
          <div className="home-main-title">
            <h2>{t("newProducts.title")}</h2>
            <p>{t("newProducts.subtitle")}</p>
          </div>
          <Link to="/shop">
            <span>{t("newProducts.checkAll")}</span>
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
