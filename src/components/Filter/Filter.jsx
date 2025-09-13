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
  const [price, setPrice] = useState(null);
  const [chosenColor, setChosenColor] = useState("");
  const [selectedType, setselectedType] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");
  const { designType, setDesignType } = useDesignType();
  // selectedMaterial(filter)
  const selectedMaterials = Object.keys(materialChecked).filter(
    (key) => materialChecked[key]
  );
  // selectedStyle
  const selectedStyles = Object.keys(styleChecked).filter(
    (key) => styleChecked[key]
  );
  const handleReset = () => {
    setChosenColor("");
    setMaterialChecked({});
    setStyleChecked({});
    setSearchedKey("");
    setPrice(null);
    setselectedType("");
    setselectedCategory("");
    setDesignType("");
  };
  // filters
  useEffect(() => {
    let res = products;
    if (
      searchedKey == "" &&
      selectedType == "" &&
      price == null &&
      chosenColor == "" &&
      selectedMaterials.length == 0 &&
      selectedStyles.length == 0 &&
      designType == ""
    ) {
      setFilteredProducts(products);
    }
    if (searchedKey != "") {
      res = res.filter((product) =>
        product.name.toLowerCase().includes(searchedKey.toLowerCase())
      );
    }
    if (selectedType != "") {
      res = res.filter(
        (product) =>
          product.type.toLowerCase() === selectedType.toLowerCase() &&
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (price != null) {
      res = res.filter(
        (product) => parseFloat(product.price.replace("$", "")) <= price
      );
    }
    if (chosenColor != "") {
      res = res.filter((product) => product.colors.includes(chosenColor));
    }
    if (selectedMaterials.length > 0) {
      console.log(selectedMaterials, res);
      res = res.filter((product) =>
        selectedMaterials.includes(product.material.toLowerCase())
      );
    }
    if (selectedStyles.length > 0) {
      res = res.filter((product) =>
        selectedStyles.includes(product.style.toLowerCase())
      );
    }
    if (designType != "") {
      res = res.filter(
        (product) =>
          product.designType.toLowerCase() == designType.toLowerCase()
      );
    }
    setFilteredProducts(res);
  }, [
    selectedType,
    selectedCategory,
    chosenColor,
    styleChecked,
    materialChecked,
    price,
    searchedKey,
    designType,
  ]);
  const handleAccordionFilter = (e) => {
    if (e.target.checked) {
      const category = e.target.dataset.category.toLowerCase();
      const type = e.target.dataset.type.toLowerCase();
      setselectedType(type);
      setselectedCategory(category);
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
                    htmlFor={`${option}${i}`}
                  >
                    <input
                      type="radio"
                      name={el.category}
                      data-category={el.category}
                      data-type={option}
                      id={`${option}${i}`}
                      checked={
                        selectedType.toLowerCase() === option.toLowerCase() &&
                        selectedCategory.toLowerCase() ===
                          el.category.toLowerCase()
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
      <ResetFilters handleReset={handleReset} />
    </form>
  );
}
