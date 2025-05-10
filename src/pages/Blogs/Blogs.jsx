import BlogCard from "../../components/BlogCard/BlogCard";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import { GrNext } from "react-icons/gr";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";
const Blogs = () => {
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
    {
      id: 4,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 5,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 6,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 7,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 8,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 9,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 10,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 11,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 12,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 13,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 14,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 15,
      image: "/assets/Images/post-1.png",
      title: "First Time Home Owner Ideas",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
  ];
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="blogs">
      <TopGreenBar secondLink="../../pages/Blogs" secondPageName="Blogs" />
      <div className="container">
        <div className="holder-blogs">
          {posts.map((post) => (
            <BlogCard
              onClick={() => handleClick(post.id)}
              key={post.id}
              image={post.image}
              title={post.title}
              publisher={post.publisher}
              date={post.date}
            />
          ))}
        </div>
        <div className="slider-blogs">
          <p className="first-num">1</p>
          <p className="second-num">2</p>
          <p className="next-blogs">
            Next <GrNext className="next-blogs-icon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
