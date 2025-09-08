import { Link } from "react-router";
import BlogCard from "../../../components/BlogCard/BlogCard";
import "./RecentBlogs.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../Constants/enviroment";

const RecentBlogs = () => {
  const { t } = useTranslation();
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
          <h2>{t("recentBlogs.title")}</h2>
          <p>{t("recentBlogs.subtitle")}</p>
        </div>
        <div className="holder">{recentBlogs}</div>
        <div className="btn-holder">
          <Link className="all-btn" to="/blogs">
            {t("recentBlogs.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
