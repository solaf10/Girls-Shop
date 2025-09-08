import { useEffect, useState } from "react";
import axios from "axios";
import "./Designer.css";
import DropDownDesigner from "../../components/DropDownDesigner/DropDownDesigner";
import DesignerCard from "../../components/DesignerCard/DesignerCard";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import Loader from "../../components/Loader/Loader";
import { useTranslation } from "react-i18next";

const Designer = () => {
  const { t } = useTranslation();

  const countriesOptions = ["Syria", "Saudi", "Palestine"];
  const creativeOptions = ["Syria", "Saudi", "Palestine"];

  const [designers, setDesigners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDesigners, setFilteredDesigners] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/designers")
      .then((res) => {
        setDesigners(res.data);
        setFilteredDesigners(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleKeyDown = () => {
    const arr = designers.filter((designer) =>
      designer.designerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDesigners(arr);
  };

  return (
    <div className="designers-holder">
      {loading ? (
        <div className="loader-holder">
          <Loader />
        </div>
      ) : (
        <>
          <TopGreenBar />
          <div className="designers container">
            <div className="designer-header">
              <h1>{t("designer.title")}</h1>
              <div className="search-filter-designer">
                <div className="search-designer">
                  <input
                    id="search"
                    placeholder={t("designer.searchPlaceholder")}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <img
                    src="/assets/Images/search.png"
                    alt={t("designer.searchAlt")}
                  />
                </div>
                <div className="filter-designer">
                  <DropDownDesigner
                    options={countriesOptions}
                    placeholder={t("designer.countries")}
                  />
                  <DropDownDesigner
                    options={creativeOptions}
                    placeholder={t("designer.creative")}
                  />
                </div>
              </div>
            </div>

            <div className="designer-list">
              {filteredDesigners.length > 0 ? (
                filteredDesigners.map((designer) => (
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
                <p className="no-designer-matches">{t("designer.noMatches")}</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Designer;
