import { Link } from "react-router";
import BlogCard from "../../../components/BlogCard/BlogCard";
import "./RecentBlogs.css";
import { useTranslation } from "react-i18next";

const RecentBlogs = () => {
  const { t } = useTranslation();

  const posts = [
    {
      id: 1,
      image: "/assets/Images/post-1.png",
      title: t("recentBlogs.posts.post1.title"),
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 2,
      image: "/assets/Images/post-1.png",
      title: t("recentBlogs.posts.post2.title"),
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 3,
      image: "/assets/Images/post-1.png",
      title: t("recentBlogs.posts.post3.title"),
      publisher: "john",
      date: "Feb 8th, 2025",
    },
  ];

  return (
    <section className="recent-blogs">
      <div className="container">
        <div className="home-main-title">
          <h2>{t("recentBlogs.title")}</h2>
          <p>{t("recentBlogs.subtitle")}</p>
        </div>
        <div className="holder">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              publisher={post.publisher}
              date={post.date}
            />
          ))}
        </div>
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
