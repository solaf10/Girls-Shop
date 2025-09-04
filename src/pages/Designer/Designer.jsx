import { useEffect, useState } from "react";
import axios from "axios";
import "./Designer.css";
import DropDownDesigner from "../../components/DropDownDesigner/DropDownDesigner";
import DesignerCard from "../../components/DesignerCard/DesignerCard";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import Loader from "../../components/Loader/Loader";

const Designer = () => {
  const countriesOptions = ["Syria", "Saudi", "Palestine"];
  const creativeOptions = ["Syria", "Saudi", "Palestine"];

  const [designers, setDesigners] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/designers")
      .then((res) => {
        setDesigners(res.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="single-product">
      {loading ? (
        <div className="loader-holder">
          <Loader />
        </div>
      ) : (
        <>
          <TopGreenBar />
          <div className="designers container">
            <div className="designer-header">
              <h1>Designers</h1>
              <div className="search-filter-designer">
                <div className="search-designer">
                  <input placeholder="Search Designer ..." type="text" />
                  <img src="/assets/Images/search.png" alt="search" />
                </div>
                <div className="filter-designer">
                  <DropDownDesigner
                    options={countriesOptions}
                    placeholder="Countries"
                  />
                  <DropDownDesigner
                    options={creativeOptions}
                    placeholder="Creative"
                  />
                </div>
              </div>
            </div>

            <div className="designer-list">
              {designers.length > 0 ? (
                designers.map((designer) => (
                  <DesignerCard
                    key={designer.id}
                    designerName={designer.designerName}
                    designerImage={designer.image}
                    designerLocation={designer.designerCity}
                    designerNumber={designer.designerPhone}
                    designerWork={designer.designerWork}
                  />
                ))
              ) : (
                <p></p>
              )
              }
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Designer;
