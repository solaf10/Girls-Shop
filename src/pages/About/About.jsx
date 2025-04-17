import React from "react";
import AboutHero from "../../sections/AboutSections/AboutHero/AboutHero";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import MoreThan from "../../sections/AboutSections/MoreThan/MoreThan";
import Video from "../../sections/AboutSections/Video/Video";

const About = () => {
  return (
    <div className="about">
      <TopGreenBar/>
      <AboutHero/>
      <MoreThan/>
      <Video/>
      </div>
  );
};

export default About;
