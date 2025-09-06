import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../../components/BlogCard/BlogCard";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import { GrNext } from "react-icons/gr";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);   
  const [loading, setLoading] = useState(true); 
  const [searchTerm, setSearchTerm] = useState(""); 

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/blogs/${id}`); 
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/blogs")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);


  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blogs">
      <TopGreenBar />
      <div className="container">
        {loading ? (
          <div className="loader-holder">
            <Loader />
          </div>
        ) : blogs.length === 0 ? (
          <p className="no-blogs">There Are No Blogs Right Now !</p>
        ) : (
          <>
            <div className="search-holder-blog">
                <div className="search-blog">
              <input
                id="search"
                placeholder="Search Blogs"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img src="/assets/Images/search.png" alt="search" />
            </div>
            </div>

            <div className="holder-blogs">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <BlogCard
                    onClick={() => handleClick(blog.id)}
                    key={blog.id}
                    image={blog.image}
                    title={blog.title}
                    publisher={blog.publisher}
                    date={blog.date}
                  />
                ))
              ) : (
                <p className="no-blogs">No blog found matching your input.</p>
              )}
            </div>

            <div className="slider-blogs">
              <p className="first-num">1</p>
              <p className="second-num">2</p>
              <p className="next-blogs">
                Next <GrNext className="next-blogs-icon" />
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
