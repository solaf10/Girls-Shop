import "./HomeHero.css";

const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="container">
        <h1>Style Meets Comfort Furniture Made for You</h1>
        <p className="desc">
          From cozy sofas to elegant dining sets, discover furniture that turns
          your house into a home." Let me know if you’d like a different tone or
          style!
        </p>
        <div className="btns">
          <button className="shop-btn btn blurry">Shop Now</button>
          <button className="customize-btn btn">Customize order</button>
        </div>
        <div className="features">
          <div className="card">
            <p className="num">15</p>
            <p className="text">Year Experience</p>
          </div>
          <div className="card">
            <p className="num">2</p>
            <p className="text">Opened in the country</p>
          </div>
          <div className="card">
            <p className="num">10k+</p>
            <p className="text">Furniture sold</p>
          </div>
          <div className="card">
            <p className="num">260+</p>
            <p className="text">bloke designe download</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
