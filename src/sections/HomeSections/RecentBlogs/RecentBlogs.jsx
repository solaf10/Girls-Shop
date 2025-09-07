import { Link } from "react-router";
import BlogCard from "../../../components/BlogCard/BlogCard";
import "./RecentBlogs.css";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../Constants/enviroment";

const RecentBlogs = () => {
  /*  const posts = [
    {
      id: 1,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 2,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 3,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
  ]; */
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(config.baseUrl + "/" + config.recentblogs)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const recentBlogs = posts
    .slice(0, 3)
    .map((post) => (
      <BlogCard
        key={post.id}
        image={post.image}
        title={post.title}
        publisher={post.publisher}
        date={post.date}
        id={post.id}
      />
    ));
  return (
    <section className="recent-blogs">
      <div className="container">
        <div className="home-main-title">
          <h2>Recent Blog</h2>
          <p>
            Explore fresh insights from the world of interior and exterior
            design. Our recent blogs bring you expert advice, décor trends, and
            scene styling inspiration — all in one place.
          </p>
        </div>
        <div className="holder">{recentBlogs}</div>
        <div className="btn-holder">
          <Link className="all-btn" to="/blogs">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
