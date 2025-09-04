import { Fragment, useState } from "react";
import "./TopGreenBar.css";
import { GoHome } from "react-icons/go";
import { PiGreaterThanBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const TopGreenBar = ({ dynamicLink }) => {
  const [links] = useState(window.location.pathname.slice(1).split("/"));
  return (
    <div className="top-green-bar">
      <GoHome className="go-home-icon" />
      <Link to={"/"} className="go-to-this-page">
        Home
      </Link>
      {/* <PiGreaterThanBold className="greater-than-icon" /> */}
      {links.map((link, i) =>
        +link ? (
          <Fragment key={i}>
            <PiGreaterThanBold className="greater-than-icon" />
            <Link style={{ fontWeight: "bold" }} className="go-to-this-page">
              {dynamicLink}
            </Link>
          </Fragment>
        ) : (
          <Fragment key={i}>
            <PiGreaterThanBold className="greater-than-icon" />
            <Link
              style={{ fontWeight: i == links.length - 1 ? "bold" : "normal" }}
              to={`/${link}`}
              className="go-to-this-page"
            >
              {link}
            </Link>
          </Fragment>
        )
      )}
    </div>
  );
};

export default TopGreenBar;
