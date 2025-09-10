import "./BlogsDetails.css";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { Link, useLocation, useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import RecentBlog from "../../components/RecentBlog/RecentBlog";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../Constants/enviroment";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
const BlogsDetails = () => {
  const { t } = useTranslation();
  const [searchedKey, setSearchedKey] = useState("");
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState(recentBlogs);
  const [postsDetails, setPostsDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const params = useParams();

  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  const {
    id,
    image,
    PublishDate,
    title,
    bigTitle,
    articleText,
    publisher,
    date,
  } = postsDetails;

  // const blog = postsDetails.find((b) => b.id === parseInt(id));
  useEffect(() => {
    axios
      .get(config.baseUrl + "/" + config.recentblogs)
      .then((res) => {
        setRecentBlogs(res.data);
        setFilteredBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, [rerender]);

  useEffect(() => {
    const res = recentBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchedKey.toLowerCase())
    );
    setFilteredBlogs(res);
  }, [searchedKey]);

  useEffect(() => {
    axios
      .get(config.baseUrl + "/" + config.recentblogs)
      .then((res) => {
        setRecentBlogs(res.data);
        setFilteredBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${config.baseUrl}/${config.blogs}/${params.id}`)
      .then((res) => {
        setIsLoading(false);
        setPostsDetails(res.data);
        setComments(res.data.comments);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(`${config.baseUrl}/${config.blogs}/${params.id}`);
        setIsLoading(false);
      });
  }, [params.id]);
  const handleSendComment = () => {
    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    const newComment = {
      blogId: params.id,
      name,
      email,
      message,
      date: new Date(),
    };
    const data = { ...postsDetails, newComment };

    axios
      .post(`${config.baseUrl}/${config.blogs}/${params.id}`, data, {
        headers: { method: "_PUT" },
      })
      .then((res) => {
        toast.success("Comment posted successfully!");
        // setComments([...comments, res.data]);
        setRerender((prev) => !prev);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to post comment.");
      });
  };

  const handleShare = (url) => {
    window.open(url, "_blank", "width=600,height=400");
  };
  const handleCopyURL = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("URL copied successfully!!");
  };

  return (
    <div className="blogs">
      <TopGreenBar dynamicLink={bigTitle} />
      <div className="container">
        {isLoading ? (
          <div className="loader-holder">
            <Loader />
          </div>
        ) : (
          <div className="blogs-detais-container">
            <div className="article-detailes">
              <img className="blog-img" src={image} />
              <div className="date-publisher">
                <p>{PublishDate}</p>
                <p>-</p>
                <p>{publisher}</p>
              </div>
              <div className="article-body">
                <h1>{bigTitle}</h1>
                <p>{articleText}</p>
              </div>
              <div className="share-post">
                <p>Share Post:</p>
                <button
                  onClick={() =>
                    handleShare(`https://wa.me/?text=${currentUrl}`)
                  }
                >
                  <img src="/assets/Images/whatsapp.png" />
                </button>
                <button
                  onClick={() =>
                    handleShare(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        currentUrl
                      )}`
                    )
                  }
                >
                  <img src="/assets/Images/facebook.png" />
                </button>
                <button
                  onClick={() =>
                    handleShare(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`
                    )
                  }
                >
                  <img src="/assets/Images/linkedin.png" />
                </button>
                <button onClick={() => handleCopyURL()}>
                  <img src="/assets/Images/link.png" />
                </button>
                <button
                  onClick={() =>
                    handleShare(
                      `mailto:?subject=Check%20this%20product&body=${currentUrl}`
                    )
                  }
                >
                  <img src="/assets/Images/email.png" />
                </button>
              </div>
              <div className="posts-slider">
                <div className="previous">
                  <GrFormPreviousLink className="previous-icon" />
                  <p> {t(`BlogsDetails.Previous Post`)}</p>
                </div>
                <div className="next">
                  <p>{t(`BlogsDetails.Next Post`)}</p>
                  <GrFormNextLink className="next-icon" />
                </div>
              </div>

              <div className="comment-bar">
                <div className="title">
                  <p>
                    Comment: <span>{comments.length}</span>
                  </p>
                  <Link to={`/blogs/${params.id}/comments`}>
                    <span>View All</span>
                    <IoIosArrowForward />
                  </Link>
                </div>
                {comments.slice(0, 6).map((c, index) => (
                  <div className="name-and-comment" key={index}>
                    <div className="name-and-time">
                      <h4> {c.name}</h4>
                      <p className="time">
                        {new Date(c.date).toLocaleString()}
                      </p>
                    </div>

                    <p className="comment">{c.message}</p>
                  </div>
                ))}
              </div>

              <div className="write-comment-sec">
                <h1>{t(`BlogsDetails.Post a comment`)}</h1>
                <div className="write-comment-form">
                  <div className="phone-email-info">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="textarea-to-write-comment">
                    <label>Your Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button className="send-comment" onClick={handleSendComment}>
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="recent-posts-info">
              <h3>{t(`BlogsDetails.Search`)}</h3>
              <div className="search-container">
                <input
                  type="text"
                  value={searchedKey}
                  onChange={(e) => setSearchedKey(e.target.value)}
                />
                <CiSearch className="search-icon" />
              </div>
              <div className="recent-posts">
                <h2 className="recent-blogs-text">
                  {t(`BlogsDetails.Recent Posts`)}
                </h2>
                <div className="recent-blogs">
                  {filteredBlogs.map((recent) => (
                    <RecentBlog
                      key={recent.id}
                      id={recent.id}
                      title={recent.title}
                      date={recent.date}
                      publisher={recent?.publisher}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsDetails;
