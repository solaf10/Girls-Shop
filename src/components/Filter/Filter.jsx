import React, { Children, useEffect, useState } from "react";
import "./Filter.css";
import PriceColorFilter from "./PriceColorFilter";
import AccordionItem from "./AccordionItem";
import MaterialStyle from "./MaterialStyle";
import ResetFilters from "./ResetFilters";
import search from "../../../public/assets/Images/search.svg";
import { useDesignType } from "../../context/DesignType";

const faqs = [
  {
    category: "furniture",
    type: ["Sofas", "Beds", "Tables", "Chairs", "stools ", "Beds"],
  },
  {
    category: "Decoration",
    type: ["3D panel", "Bas-relief", "Carpets", "Mirror", "Vases"],
  },
  {
    category: "childroom",
    type: ["Sets", "Beds", "Sofas", "Toys", "Wardrobe"],
  },
  {
    category: "kitchen",
    type: [
      "Kitchen",
      "Kitchen appliance",
      "Kitchen faucet",
      "sink",
      "Other Kitchen accessories",
    ],
  },
  {
    category: "bathroom",
    type: ["Washbasins", "Bathroom furniture"],
  },
  {
    category: "Other Models",
    type: ["Window", "Door", "Sport"],
  },
];

export default function Accordion({ setFilteredProducts, products }) {
  const [curOpen, setCurOpen] = useState(null);
  const [materialChecked, setMaterialChecked] = useState({});
  const [styleChecked, setStyleChecked] = useState({});
  // filtersUsedInfo
  const [searchedKey, setSearchedKey] = useState("");
  const [price, setPrice] = useState(500);
  const [chosenColor, setChosenColor] = useState(null);
  const [selectedType, setselectedType] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");
  const { designType } = useDesignType();
  // selectedMaterial(filter)
  const selectedMaterials = Object.keys(materialChecked).filter(
    (key) => materialChecked[key]
  );
  // selectedStyle
  const selectedStyles = Object.keys(styleChecked).filter(
    (key) => styleChecked[key]
  );
  // filters
  useEffect(() => {
    if (searchedKey == "" && selectedType == "") {
      setFilteredProducts(products);
    }
    if (searchedKey != "") {
      console.log(12);
      setFilteredProducts((prev) =>
        prev.filter((product) =>
          product.name.toLowerCase().includes(searchedKey.toLowerCase())
        )
      );
    }
    if (selectedType != "") {
      setFilteredProducts((prev) =>
        prev.filter(
          (product) =>
            product.type.toLowerCase() === selectedType.toLowerCase() &&
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    }
  }, [
    selectedType,
    selectedCategory,
    chosenColor,
    styleChecked,
    materialChecked,
    price,
    searchedKey,
  ]);
  const handleAccordionFilter = (e) => {
    if (e.target.checked) {
      setselectedType(e.target.id.toLowerCase());
      setselectedCategory(e.target.name.toLowerCase());
    }
  };
  return (
    <form className="filter">
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchedKey}
          onChange={(e) => setSearchedKey(e.target.value)}
        />
        <img src={search} />I
      </div>
      <div className="accordion">
        <p className="title">Categories</p>

        {faqs.map((el, i) => (
          <AccordionItem
            key={el.category}
            category={el.category}
            num={i}
            curOpen={curOpen}
            onOpen={setCurOpen}
          >
            <ul>
              {el.type.map((option, idx) => (
                <li key={idx}>
                  <label
                    className={
                      option.toLowerCase() == selectedType &&
                      el.category == selectedCategory
                        ? "active"
                        : ""
                    }
                    htmlFor={option}
                  >
                    <input
                      type="radio"
                      name={el.category}
                      id={option}
                      checked={
                        selectedType.toLowerCase() == option.toLowerCase()
                      }
                      onChange={handleAccordionFilter}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </div>
      <PriceColorFilter
        price={price}
        setPrice={setPrice}
        chosenColor={chosenColor}
        setChosenColor={setChosenColor}
      />
      <MaterialStyle
        materialChecked={materialChecked}
        setMaterialChecked={setMaterialChecked}
        styleChecked={styleChecked}
        setStyleChecked={setStyleChecked}
      />
      <ResetFilters />
    </form>
  );
}
