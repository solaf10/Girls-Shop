import Experts from "../../components/Experts/Experts";
import Choice from "../../sections/HeroSections/Choice/Choice";
import Features from "../../sections/HeroSections/Features/Features";
import HomeHero from "../../sections/HeroSections/HomeHero/HomeHero";
import MainCategories from "../../sections/HeroSections/MainCategories/MainCategories";

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <Experts />
      <Features />
      <MainCategories />
      <Choice />
    </div>
  );
};

export default Home;
