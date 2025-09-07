import React from "react";
import "./Application.css";
import store from "../../../../public/assets/Images/app-store (2).png";
import play from "../../../../public/assets/Images/google-play-store 1.png";
import qrcode from "../../../../public/assets/Images/QR Code.png";
import phon1 from "../../../../public/assets/Images/iphon1.png";
import phon2 from "../../../../public/assets/Images/iphon2.png";
const Application = () => {
  return (
    <section className="application">
      <div className="container">
        <div className="text">
          <div className="title">
            <h2>Download PROJECT APP</h2>
            <p>
              Enjoy the benefits of our platform on your favorite mobile device.
            </p>
          </div>
          <div className="desc">
            <p>
              Explore new models, create mood boards and collections for your
              projects while accessing our platform on the go.
            </p>
          </div>
        </div>
        <div className="image">
          <div className="qrcode">
            <img src={qrcode} alt="" />
          </div>
          <div className="app">
            <p>Scan To download</p>
            <div className="app-img">
              <img src={store} alt="" className="store" />
              <img src={play} alt="" className="play" />
            </div>
          </div>
        </div>
      </div>
      <div className="phone-img">
        <img src={phon1} alt="" className="one" />
        <img src={phon2} alt="" className="two" />
      </div>
    </section>
  );
};

export default Application;
