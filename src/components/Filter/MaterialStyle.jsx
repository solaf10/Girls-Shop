import React, { useState } from "react";

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

  // for filter post req
  const selectedMaterials = Object.keys(materialChecked).filter(
    (key) => materialChecked[key]
  );

  const selectedStyles = Object.keys(styleChecked).filter(
    (key) => styleChecked[key]
  );
  return (
    <>
      <hr />
      <div className="material">
        <p className="title">Material</p>
        <div className="checkbox">
          {materials.map((item) => (
            <div key={item} className="checkbox-item">
              <input
                type="checkbox"
                name="material"
                checked={!!materialChecked[item.toLowerCase()]}
                id={item.toLowerCase()}
                onChange={() => toggleMaterial(item.toLowerCase())}
              />
              <label htmlFor={item.toLowerCase()}>{item}</label>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <div className="style">
        <p className="title">Style</p>
        <div className="checkbox">
          {styles.map((item) => (
            <div key={item} className="checkbox-item">
              <input
                type="checkbox"
                checked={!!styleChecked[item.toLowerCase()]}
                name="style"
                id={item.toLowerCase()}
                onChange={() => toggleStyle(item.toLowerCase())}
              />
              <label htmlFor={item.toLowerCase()}>{item}</label>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
}
