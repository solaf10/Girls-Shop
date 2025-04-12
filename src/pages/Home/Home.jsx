import Experts from "../../components/Experts/Experts";
import Choice from "../../sections/HomeSections/Choice/Choice";
import Features from "../../sections/HomeSections/Features/Features";
import HomeHero from "../../sections/HomeSections/HomeHero/HomeHero";
import MainCategories from "../../sections/HomeSections/MainCategories/MainCategories";
import NewProducts from "../../sections/HomeSections/NewProducts/NewProducts";

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <Experts />
      <Features />
      <MainCategories />
      <Choice />
      <NewProducts />
    </div>
  );
};

export default Home;
