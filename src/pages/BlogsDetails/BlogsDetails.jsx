import "./BlogsDetails.css";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import RecentBlog from "../../components/RecentBlog/RecentBlog";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../Constants/enviroment";
const BlogsDetails = () => {
  const [searchedKey, setSearchedKey] = useState("");
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState(recentBlogs);
  const [postsDetails, setPostsDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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
    const res = recentBlogs.filter((blog) =>
      title.toLowerCase().includes(searchedKey.toLowerCase())
    );
    setFilteredBlogs(res);
  }, [searchedKey]);

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
  const params = useParams();
  // const blog = postsDetails.find((b) => b.id === parseInt(id));
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
    const res = recentBlogs.filter((blog) => title.includes(searchedKey));
    setFilteredBlogs(res);
  }, [searchedKey]);

  useEffect(() => {
    setIsLoading(true);
    axios
      //   .get(config.baseUrl + "/" + config.blogs + "/" + params.id)
      .get(`${config.baseUrl}/${config.blogs}/${params.id}`)
      .then((res) => {
        setIsLoading(false);
        setPostsDetails(res.data);
        console.log(res.data);
        console.log(postsDetails[id]);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [params.id]);
  return (
    // <div className="blogs">
    //   <TopGreenBar dynamicLink={bigTitle} />
    //   <div className="container">
    //     <div className="blogs-detais-container">
    //       <div className="article-detailes">
    //         <img className="blog-img" src={image} />
    //         <div className="date-publisher">
    //           <p>{PublishDate}</p>
    //           <p>-</p>
    //           <p>{publisher}</p>
    //         </div>
    //         <div className="article-body">
    //           <h1>{bigTitle}</h1>
    //           <p>{articleText}</p>
    //         </div>
    //         <div className="share-post">
    //           <p>Share Post:</p>
    //           <a>
    //             <img src="/assets/Images/whatsapp.png" />
    //           </a>
    //           <a>
    //             <img src="/assets/Images/facebook.png" />
    //           </a>
    //           <a>
    //             <img src="/assets/Images/linkedin.png" />
    //           </a>
    //           <a>
    //             <img src="/assets/Images/link.png" />
    //           </a>
    //           <a>
    //             <img src="/assets/Images/email.png" />
    //           </a>
    //         </div>
    //         <div className="posts-slider">
    //           <div className="previous">
    //             <GrFormPreviousLink className="previous-icon" />
    //             <p>Previous Post</p>
    //           </div>
    //           <div className="article-body">
    //             <h1>{bigTitle}</h1>
    //             <p>{articleText}</p>
    //           </div>
    //           <div className="share-post">
    //             <p>Share Post:</p>
    //             <a>
    //               <img src="/assets/Images/whatsapp.png" />
    //             </a>
    //             <a>
    //               <img src="/assets/Images/facebook.png" />
    //             </a>
    //             <a>
    //               <img src="/assets/Images/linkedin.png" />
    //             </a>
    //             <a>
    //               <img src="/assets/Images/link.png" />
    //             </a>
    //             <a>
    //               <img src="/assets/Images/email.png" />
    //             </a>
    //           </div>
    //           <div className="comment-bar">
    //             <h1>
    //               Comment: <span>1</span>
    //             </h1>
    //             <div className="name-and-comment">
    //               <div className="name-and-time">
    //                 <p className="name">Batoul abdulHadi </p>
    //                 <p className="time"> 5 days ago</p>
    //               </div>
    //               <p className="comment">
    //                 "Such a well-written piece! Insightful and inspiring — keep
    //                 up the amazing work!"
    //               </p>
    //             </div>
    //             <div className="posts-slider">
    //               <div className="previous">
    //                 <GrFormPreviousLink className="previous-icon" />
    //                 <p>Previous Post</p>
    //               </div>
    //               <div className="next">
    //                 <p>Next Post</p>
    //                 <GrFormNextLink className="next-icon" />
    //               </div>
    //             </div>
    //             <div className="comment-bar">
    //               <h1>
    //                 Comment: <span>1</span>
    //               </h1>
    //               <div className="name-and-comment">
    //                 <div className="name-and-time">
    //                   <p className="name"> abdulHadi </p>
    //                   <p className="time"> 5 days ago</p>
    //                 </div>

    //                 <p className="comment">
    //                   "Such a well-written piece! Insightful and inspiring —
    //                   keep up the amazing work!"
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="write-comment-sec">
    //               <h1>Post a comment</h1>
    //               <div className="write-comment-form">
    //                 <div className="phone-email-info">
    //                   <input type="text" placeholder="Phone"></input>
    //                   <input type="text" placeholder="E-mail"></input>
    //                 </div>
    //                 <div className="textarea-to-write-comment">
    //                   <label>Your Message</label>
    //                   <textarea />
    //                 </div>
    //                 <div className="agree-yo-save-your-info">
    //                   <input className="check" type="checkbox" />
    //                   <label>
    //                     Save my name, email, and website in this browser for the
    //                     next time I comment.
    //                   </label>
    //                 </div>
    //                 <button className="send-comment">Send</button>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="recent-posts-info">
    //             <h3>Search</h3>
    //             <div className="search-container">
    //               <input
    //                 type="text"
    //                 value={searchedKey}
    //                 onChange={(e) => setSearchedKey(e.target.value)}
    //               />
    //               <CiSearch className="search-icon" />
    //             </div>
    //             <div className="recent-posts">
    //               <h2 className="recent-blogs-text">Recent Posts</h2>
    //               <div className="recent-blogs">
    //                 {filteredBlogs.map((recent) => (
    //                   <RecentBlog
    //                     key={recent.id}
    //                     id={recent.id}
    //                     title={recent.title}
    //                     date={recent.date}
    //                     publisher={recent?.publisher}
    //                   />
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="blogs">
      <TopGreenBar dynamicLink={bigTitle} />
      <div className="container">
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
              <a>
                <img src="/assets/Images/whatsapp.png" />
              </a>
              <a>
                <img src="/assets/Images/facebook.png" />
              </a>
              <a>
                <img src="/assets/Images/linkedin.png" />
              </a>
              <a>
                <img src="/assets/Images/link.png" />
              </a>
              <a>
                <img src="/assets/Images/email.png" />
              </a>
            </div>
            <div className="posts-slider">
              <div className="previous">
                <GrFormPreviousLink className="previous-icon" />
                <p>Previous Post</p>
              </div>
              <div className="next">
                <p>Next Post</p>
                <GrFormNextLink className="next-icon" />
              </div>
            </div>
            <div className="comment-bar">
              <h1>
                Comment: <span>1</span>
              </h1>
              <div className="name-and-comment">
                <div className="name-and-time">
                  <p className="name">Batoul abdulHadi </p>
                  <p className="time"> 5 days ago</p>
                </div>

                <p className="comment">
                  "Such a well-written piece! Insightful and inspiring — keep up
                  the amazing work!"
                </p>
              </div>
            </div>
            <div className="write-comment-sec">
              <h1>Post a comment</h1>
              <div className="write-comment-form">
                <div className="phone-email-info">
                  <input type="text" placeholder="Phone"></input>
                  <input type="text" placeholder="E-mail"></input>
                </div>
                <div className="textarea-to-write-comment">
                  <label>Your Message</label>
                  <textarea />
                </div>
                <div className="agree-yo-save-your-info">
                  <input className="check" type="checkbox" />
                  <label>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button className="send-comment">Send</button>
              </div>
            </div>
          </div>
          <div className="recent-posts-info">
            <h3>Search</h3>
            <div className="search-container">
              <input
                type="text"
                value={searchedKey}
                onChange={(e) => setSearchedKey(e.target.value)}
              />
              <CiSearch className="search-icon" />
            </div>
            <div className="recent-posts">
              <h2 className="recent-blogs-text">Recent Posts</h2>
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
      </div>
    </div>
  );
};

export default BlogsDetails;
