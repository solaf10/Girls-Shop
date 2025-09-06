import React, { useState } from "react";
import { FaRegSquare, FaRegSquareCheck } from "react-icons/fa6";

export default function MaterialStyle() {
  const materials = [
    "Plastic",
    "Rattan",
    "Wood",
    "Stone",
    "Brick",
    "Ceramics",
    "Concrete",
    "Fabric",
    "Glass",
    "Gypsum",
    "Leather",
    "Liquid",
    "Metal",
    "Organics",
    "Paper",
  ];

  const styles = ["Classic", "Ethnic", "Modern"];

  const [materialChecked, setMaterialChecked] = useState({});
  const [styleChecked, setStyleChecked] = useState({});

  const toggleMaterial = (name) => {
    setMaterialChecked((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleStyle = (name) => {
    setStyleChecked((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <hr />
      <div className="material">
        <p className="title">Material</p>
        <form className="checkbox">
          {materials.map((item) => (
            <div key={item} onClick={() => toggleMaterial(item)}>
              {materialChecked[item] ? <FaRegSquareCheck /> : <FaRegSquare />}
              <span>{item}</span>
            </div>
          ))}
        </form>
      </div>

      <hr />
      <div className="style">
        <p className="title">Style</p>
        <form className="checkbox">
          {styles.map((item) => (
            <div key={item} onClick={() => toggleStyle(item)}>
              {styleChecked[item] ? <FaRegSquareCheck /> : <FaRegSquare />}
              <span>{item}</span>
            </div>
          ))}
        </form>
        <hr />
      </div>
    </>
  );
}
