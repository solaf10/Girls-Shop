import Experts from "../../components/Experts/Experts";
import HomeContact from "../../sections/HomeContact/HomeContact";
import Choice from "../../sections/HomeSections/Choice/Choice";
import CustomOrder from "../../sections/HomeSections/CustomOrder/CustomOrder";
import Features from "../../sections/HomeSections/Features/Features";
import HomeHero from "../../sections/HomeSections/HomeHero/HomeHero";
import MainCategories from "../../sections/HomeSections/MainCategories/MainCategories";
import NewProducts from "../../sections/HomeSections/NewProducts/NewProducts";
import RecentBlogs from "../../sections/HomeSections/RecentBlogs/RecentBlogs";
import Reviews from "../../sections/HomeSections/Reviews/Reviews";

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
      <Reviews />
      <HomeContact />
    </div>
  );
};

export default Home;
