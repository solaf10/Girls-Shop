import Experts from "../../components/Experts/Experts";
import Features from "../../sections/Features/Features";
import HomeHero from "../../sections/HomeHero/HomeHero";

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <Experts />
      <Features />
    </div>
  );
};

export default Home;
