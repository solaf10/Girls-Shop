import { Link } from "react-router";
import BlogCard from "../../../components/BlogCard/BlogCard";
import "./RecentBlogs.css";

const RecentBlogs = () => {
  const posts = [
    {
      id: 1,
      image: "/public/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 2,
      image: "/public/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 3,
      image: "/public/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
  ];
  return (
    <section className="recent-blogs">
      <div className="container">
        <div className="home-main-title">
          <h2>Brows As</h2>
          <p>
            The products we provide only for you as our service are selected
            from the best products with number 1 quality in the world
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
