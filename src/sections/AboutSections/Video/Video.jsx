import React from "react";
import video from "../../../../public/assets/Images/video.png";
import "./Video.css";
const Video = () => {
  return (
    <section className="video">
      <div className="container">
        <div className="video-img">
          <video loop autoPlay muted>
            <source
              src="/assets/Modern Interior Design For Apartment(720P_60FPS).mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
