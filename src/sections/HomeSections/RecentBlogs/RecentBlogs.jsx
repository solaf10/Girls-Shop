import { Link } from "react-router";
import BlogCard from "../../../components/BlogCard/BlogCard";
import "./RecentBlogs.css";

const RecentBlogs = () => {
  const posts = [
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
  ];
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
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
