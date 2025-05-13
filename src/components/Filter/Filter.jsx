import React, { Children, useState } from "react";
import "./Filter.css";
import PriceColorFilter from "./PriceColorFilter";
import AccordionItem from "./AccordionItem";
import MaterialStyle from "./MaterialStyle";
import ResetFilters from "./ResetFilters";

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

  return (
    <div className="filter">
      <div className="accordion">
        <p className="title">categories</p>
        {faqs.map((el, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            category={el.category}
            num={i}
            key={el.category}
          >
            <ul>
              <li>{el.type[0]}</li>
              <li>{el.type[1]}</li>
              <li>{el.type[2]}</li>
              <li>{el.type[3]}</li>
              <li>{el.type[4]}</li>
              <li>{el.type[5]}</li>
            </ul>
          </AccordionItem>
        ))}
      </div>
      <PriceColorFilter />
      <MaterialStyle />
      <ResetFilters />
    </div>
  );
}
