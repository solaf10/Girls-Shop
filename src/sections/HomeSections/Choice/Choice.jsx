import "./Choice.css";
import { FaCheckCircle } from "react-icons/fa";

const Choice = () => {
  return (
    <section className="choice">
      <div className="container">
        <div className="text">
          <div className="sub-title">
            <h2>The Best Furniture Manufacturer of your choice</h2>
            <p>
              At ArchiLink, we craft high-quality, stylish, and durable
              furniture designed to elevate any space. With expert craftsmanship
              and premium materials, we bring comfort, elegance, and
              functionality to your home or business. Choose excellence. Choose
              ArchiLink.
            </p>
          </div>
        </div>

        <div className="image">
          <img src="/assets/Images/choice-image.png" alt="" />
        </div>
      </div>
      <img className="dotted-bg" src="/assets/Images/Dotted.png" alt="" />
    </section>
  );
};

export default Choice;
