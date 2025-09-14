import "./DesignerCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const designerWork = [
  "/public/assets/Images/archDrawing/pexels-igor-meghega-315695093-15935557.jpg",
  "/public/assets/Images/archDrawing/shutterstock_246019015.jpg",
  "/public/assets/Images/archDrawing/design2.jpg",
  "/public/assets/Images/archDrawing/design3.jpg",
  "/public/assets/Images/archDrawing/Easy-Perspective-in-architecture-2.jpg",
  "/public/assets/Images/archDrawing/hq720.jpg",
  "/public/assets/Images/archDrawing/pexels-igor-meghega-315695093-15935596.jpg",
  "/public/assets/Images/archDrawing/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg",
  "/public/assets/Images/archDrawing/design1.jpg",
];

const DesignerCard = ({
  id,
  designerImage,
  designerName,
  designerLocation,
  designerNumber,
}) => {
  return (
    <div className="designer-card">
      <div className="heading">
        <div className="designer-info">
          <img src={designerImage} />
          <div className="more-info-designer">
            <p className="designer-name"> {designerName}</p>
            <div className="designer-location">
              <img src="/assets/Images/locationIcon.svg" />
              <p>{designerLocation}</p>
            </div>
            <div className="designer-num">
              <img src="/public/assets/Images/callIcon.svg" />
              <a href={`tel:${designerNumber}`}>{designerNumber}</a>
            </div>
          </div>
        </div>
        <Link to={`/designer/${id}`}>
          <span>See Designer's Work</span>
          <IoIosArrowForward className="icon" />
        </Link>
      </div>
      <Swiper
        className="designer-work-swipper"
        spaceBetween={40}
        slidesPerView={7}
      >
        {designerWork.map((work, index) => (
          <SwiperSlide key={index}>
            <img
              src={typeof work === "string" ? work : work.img}
              alt={`Work ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DesignerCard;
