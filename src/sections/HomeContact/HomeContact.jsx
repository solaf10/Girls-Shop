import "./HomeContact.css";

const HomeContact = () => {
  return (
    <div className="home-contact">
      <div className="container">
        <div className="image">
          <img src="/assets/Images/home-contact-sofa.png" alt="sofa" />
        </div>
        <div className="text">
          <div className="home-main-title">
            <h2>Subscribe to Newsletter</h2>
          </div>
          <form>
            <input
              className="email-input"
              type="email"
              placeholder="Your email address"
            />
            <input className="shop-btn" type="submit" value="Shop" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
