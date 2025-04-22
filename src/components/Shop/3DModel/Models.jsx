import "./index.css";
import image from "./product.png";
import Card from "../../Card/Card";
import search from "../../../../public/assets/Images/search.svg";
import AccordionFilter from "./AccordionFilter";
export default function Models() {
  return (
    <div className="models">
      <h3>3D Scenesv</h3>
      <div className="topBar">
        <div className="search">
          <input placeholder="Search products..."></input>
          <img src={search} />
        </div>
        <div className="results">Showing 1-12 of 18 results</div>
        <div className="sorting"> Default sorting</div>
      </div>
      <div className="products">
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
