import Experts from "../../components/Experts/Experts";
import HomeContact from "../../sections/ReviewForm/ReviewForm";
import Choice from "../../sections/HomeSections/Choice/Choice";
import CustomOrder from "../../sections/HomeSections/CustomOrder/CustomOrder";
import Features from "../../sections/HomeSections/Features/Features";
import HomeHero from "../../sections/HomeSections/HomeHero/HomeHero";
import MainCategories from "../../sections/HomeSections/MainCategories/MainCategories";
import NewProducts from "../../sections/HomeSections/NewProducts/NewProducts";
import RecentBlogs from "../../sections/HomeSections/RecentBlogs/RecentBlogs";
import Reviews from "../../sections/HomeSections/Reviews/Reviews";
import ReviewForm from "../../sections/ReviewForm/ReviewForm";
import SpecificProducts from "../../sections/HomeSections/SpecificProducts/SpecificProducts";
import UserAutherization from "../../components/UserAutherization/UserAutherization";

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <Experts />
      <Features />
      <MainCategories />
      <Choice />
      <SpecificProducts />
      <NewProducts />
      <UserAutherization>
        <CustomOrder />
      </UserAutherization>
      <RecentBlogs />
      <Reviews />
      <ReviewForm />
    </div>
  );
};

export default Home;
