import Experts from "../../components/Experts/Experts";
import Choice from "../../sections/HomeSections/Choice/Choice";
import CustomOrder from "../../sections/HomeSections/CustomOrder/CustomOrder";
import Features from "../../sections/HomeSections/Features/Features";
import HomeHero from "../../sections/HomeSections/HomeHero/HomeHero";
import MainCategories from "../../sections/HomeSections/MainCategories/MainCategories";
import NewProducts from "../../sections/HomeSections/NewProducts/NewProducts";
import RecentBlogs from "../../sections/HomeSections/RecentBlogs/RecentBlogs";

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <Experts />
      <Features />
      <MainCategories />
      <Choice />
      <NewProducts />
      <CustomOrder />
      <RecentBlogs />
    </div>
  );
};

export default Home;
