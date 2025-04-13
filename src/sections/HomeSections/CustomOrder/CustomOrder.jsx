import "./CustomOrder.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const CustomOrder = ({}) => {
  return (
    <section className="custom-order">
      <div className="container">
        <div className="image">
          <img
            className="dotted-bg right"
            src="/assets/Images/Dotted.png"
            alt=""
          />
          <img src="/assets/Images/customOrder-image.png" alt="" />
          <img
            className="dotted-bg left"
            src="/assets/Images/Dotted.png"
            alt=""
          />
        </div>
        <div className="text">
          <div className="sub-title">
            <h2>We help you make Modern Interior Design</h2>
            <p>
              "Bringing your vision to life with stylish, functional pieces for
              the perfect modern space."
            </p>
          </div>
          <div className="holder">
            <div className="box">
              <div className="icon-holder">
                <FaCheckCircle className="icon" />
              </div>
              <div className="content">
                <h3>Inspire Your Space</h3>
                <p>
                  We bring contemporary design ideas to life, transforming any
                  room into a stylish, functional space.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon-holder">
                <FaCheckCircle className="icon" />
              </div>
              <div className="content">
                <h3>Tailored to You</h3>
                <p>
                  Your vision is our guide. We help you curate a personalized
                  design that perfectly reflects your style and needs.
                </p>
              </div>
            </div>
          </div>
          <button>
            <span>Make Your Own Design</span>
            <MdArrowOutward className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
