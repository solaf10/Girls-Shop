import React, { useState } from "react";
import "./Filter.css";
import PriceColorFilter from "./PriceColorFilter";
import MaterialStyle from "./MaterialStyle";
import ResetFilters from "./ResetFilters";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import search from "../../../public/assets/Images/search.svg";

const faqs = [
  {
    category: "furniture",
    type: ["Sofas", "Beds", "Tables", "Chairs Bar", "Stools", "Beds"],
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
      "Sink",
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
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (categoryIndex, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [categoryIndex]: value,
    }));
  };

  return (
    <form className="filter">
      {/* Search */}
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchedKey}
          onChange={(e) => setSearchedKey(e.target.value)}
        />
        <img src={search} alt="search" />
      </div>

      {/* Accordion */}
      <div className="accordion">
        <p className="title">Categories</p>
        {faqs.map((el, i) => (
          <AccordionItem
            key={el.category}
            curOpen={curOpen}
            onOpen={setCurOpen}
            category={el.category}
            num={i}
          >
            <ul>
              {el.type.map((option, idx) => (
                <li key={idx}>
                  <label>
                    <input
                      type="radio"
                      name={`category-${i}`}
                      value={option}
                      checked={selectedOptions[i] === option}
                      onChange={() => handleOptionChange(i, option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </div>

      {/* Other Filters */}
      <PriceColorFilter />
      <MaterialStyle />
      <ResetFilters />
    </form>
  );
}
