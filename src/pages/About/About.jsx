import React from "react";
import AboutHero from "../../sections/AboutSections/AboutHero/AboutHero";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import MoreThan from "../../sections/AboutSections/MoreThan/MoreThan";
import Video from "../../sections/AboutSections/Video/Video";
import InspiredLiving from "../../sections/AboutSections/InspiredLiving/InspiredLiving";
import Application from "../../sections/AboutSections/Application/Application";
import FollowUs from "../../sections/AboutSections/FollowUs/FollowUs";

const About = () => {
  return (
    <div className="about">
      <TopGreenBar/>
      <AboutHero/>
      <MoreThan/>
      <Video/>
      <InspiredLiving/>
      <Application/>
      <FollowUs/>
      </div>
  );
};

export default About;
