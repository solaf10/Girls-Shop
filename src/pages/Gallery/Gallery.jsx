import { Link, useParams } from "react-router-dom";
import "./Gallery.css";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../Constants/enviroment";
import Loader from "../../components/Loader/Loader";
import { FaArrowCircleLeft } from "react-icons/fa";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";

const workNum = 12;

const Gallery = () => {
  const designerID = useParams().id;
  const [designer, setDesigner] = useState({});
  const [designerWork, setDesignerWork] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(workNum);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${config.baseUrl}/${config.designer}/${designerID}`)
      .then((res) => {
        console.log(res.data);
        setDesigner(res.data);
        setDesignerWork(res.data.designerWork);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  const cards = designerWork.slice(0, limit).map((work, i) => (
    <Link to="/shop/73" className="card" key={i}>
      <img src={work} alt={`work${i + 1}`} />
    </Link>
  ));
  return (
    <div className="gallery">
      <TopGreenBar dynamicLink={designer.designerName} />
      <div className="container">
        <div className="header">
          <Link to="/designer">
            <FaArrowCircleLeft className="icon" />
          </Link>
          <p>{designerWork.length} Designs</p>
        </div>
        <div className="cards">{isLoading ? <Loader /> : cards}</div>
        {limit < designerWork.length && (
          <button
            onClick={() =>
              setLimit((prev) => Math.min(prev + workNum, designerWork.length))
            }
            className="all-btn"
          >
            View more
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
