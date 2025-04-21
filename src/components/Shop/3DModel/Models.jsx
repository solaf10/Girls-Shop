import "./index.css";
import image from "./llight.png";
import Card from "../../Card/Card";
import AccordionFilter from "./AccordionFilter";
export default function Models() {
  return (
    <div className="models">
      <h3>3D Scenesv</h3>
      <div className="topBar">
        <div className="search">
          <input placeholder="Search products..."></input>
          <img src="./search.svg" />
        </div>
        <div className="results">Showing 1-12 of 18 results</div>
        <div className="sorting"> Default sorting</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="filters">
          <AccordionFilter />
        </div>
        <div className="cards">
          <Card image={image} name={"name"} price={"$55.00"} />
          <Card image={image} name={"name"} price={"$55.00"} />
          <Card image={image} name={"name"} price={"$55.00"} />
          <Card image={image} name={"name"} price={"$55.00"} />
          <Card image={image} name={"name"} price={"$55.00"} />
          <Card image={image} name={"name"} price={"$55.00"} />
        </div>
      </div>
    </div>
  );
}
