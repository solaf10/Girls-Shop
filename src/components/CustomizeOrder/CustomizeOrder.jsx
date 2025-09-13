import { useState } from "react";
import "./CustomizeOrder.css";
import axios from "axios";
import { AiOutlineWarning } from "react-icons/ai";
import usePrivateRoute from "../../custom hooks/usePrivateRoute";
import { useTranslation } from "react-i18next";

const CustomizeOrder = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [file, setFile] = useState(null);
  const [formValues, setFormValues] = useState({
    width: "",
    height: "",
    length: "",
    location: "",
    color: "#385854",
  });
  const [showPopup, setShowPopup] = useState(false);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(prev - 1, 0));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const confirmSubmission = async () => {
    setShowPopup(false);
    try {
      const formData = new FormData();
      formData.append("width", formValues.width);
      formData.append("height", formValues.height);
      formData.append("length", formValues.length);
      formData.append("location", formValues.location);
      formData.append("color", formValues.color);
      formData.append("count", count);
      if (file) formData.append("file", file);

      const res = await axios.post(
        "http://localhost:5000/api/customize-order",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Response:Done", res.data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Error:Err", err);
      alert("Something went wrong!");
    }
  };

  const privateRouteHandler = usePrivateRoute(handleSubmit);

  return (
    <div className="customize-page">
      <div className="bring-idea-container">
        <div className="Bring-idea-tolife-sec">
          <img
            src="/assets/Images/design-thinking 1.png"
            alt="design-thinking"
          />
          <h1 className="bring-your-idea-title">
            {t("customizeOrder.bringIdeaTitle")}
          </h1>
          <p className="bring-your-idea-paragraph">
            {t("customizeOrder.bringIdeaDesc")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="customize-form">
          <div className="dimenision-inputs">
            <div className="dimenision-label">
              <label>{t("customizeOrder.width")}:</label>
              <input
                type="text"
                name="width"
                value={formValues.width}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="dimenision-label">
              <label>{t("customizeOrder.height")}:</label>
              <input
                type="text"
                name="height"
                value={formValues.height}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="dimenision-label">
              <label>{t("customizeOrder.length")}:</label>
              <input
                type="text"
                name="length"
                value={formValues.length}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="location-box">
            <label>{t("customizeOrder.location")}:</label>
            <input
              type="text"
              name="location"
              value={formValues.location}
              onChange={handleInputChange}
              placeholder={t("customizeOrder.locationPlaceholder")}
            />
          </div>

          <div className="color-counter-box">
            <div className="count">
              <button type="button" onClick={decrement}>
                -
              </button>
              <div className="count-number">{count}</div>
              <button type="button" onClick={increment}>
                +
              </button>
            </div>

            <div className="choose-color">
              <label className="label-choose-color">
                {t("customizeOrder.wrappingColor")}:
              </label>
              <input
                type="color"
                name="color"
                value={formValues.color}
                onChange={handleInputChange}
              />
            </div>

            <div className="chose-product-img">
              <label>
                {file == null
                  ? t("customizeOrder.uploadImage")
                  : t("customizeOrder.imageUploaded")}
                <input type="file" accept="image/*" onChange={handleChange} />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value={t("customizeOrder.send")}
            className="submit-send"
          />
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box warning">
            <AiOutlineWarning className="popup-warning-icon" />
            <p
              className="popup-text"
              dangerouslySetInnerHTML={{
                __html: t("customizeOrder.popupText"),
              }}
            />
            <div className="popup-actions">
              <button
                onClick={() => setShowPopup(false)}
                className="cancel-btn"
              >
                {t("customizeOrder.cancel")}
              </button>
              <button onClick={confirmSubmission} className="accept-btn">
                {t("customizeOrder.accept")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizeOrder;
