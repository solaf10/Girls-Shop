import React, { Children, useState } from "react";
import "./Filter.css";
import PriceColorFilter from "./PriceColorFilter";
import AccordionItem from "./AccordionItem";
import MaterialStyle from "./MaterialStyle";
import ResetFilters from "./ResetFilters";
import search from "../../../public/assets/Images/search.svg";

const faqs = [
  {
    category: "furniture",
    type: ["Sofas", "Beds", "Tables", "Chairs Bar", "stools ", "Beds"],
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

export default function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  const [searchedKey, setSearchedKey] = useState("");

  const [selectedType, setselectedType] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");

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
                      option.toLowerCase() == selectedType ? "active" : ""
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
      <PriceColorFilter />
      <MaterialStyle />
      <ResetFilters />
    </form>
  );
}
