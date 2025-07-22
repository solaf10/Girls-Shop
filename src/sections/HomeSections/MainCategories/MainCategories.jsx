import "./MainCategories.css";

const MainCategories = () => {
  return (
    <section className="main-categories">
      <div className="container">
        <div className="home-main-title">
          <h2>Brows As</h2>
          <p>
            From elegant interiors to inspiring exteriors and artistic scenes —
            browse our categories and find the perfect touch for every corner of
            your home.
          </p>
        </div>
        <div className="holder">
          <div className="card interior">
            {/* <img src="/assets/Images/textures.png" alt="" /> */}
            <p>Interior Design</p>
          </div>
          <div className="card scenes">
            {/* <img src="/assets/Images/scenes.png" alt="" /> */}
            <p>Scenes</p>
          </div>
          <div className="card exterior">
            {/* <img src="/assets/Images/3d-models.png" alt="" /> */}
            <p>Exterior Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
