import "./MainCategories.css";

const MainCategories = () => {
  return (
    <section className="main-categories">
      <div className="container">
        <div className="home-main-title">
          <h2>Brows As</h2>
          <p>
            The products we provide only for you as our service are selected
            from the best products with number 1 quality in the world
          </p>
        </div>
        <div className="holder">
          <div className="card scenes">
            {/* <img src="/assets/Images/scenes.png" alt="" /> */}
            <p>Scenes</p>
          </div>
          <div className="card texture">
            {/* <img src="/assets/Images/textures.png" alt="" /> */}
            <p>texture</p>
          </div>
          <div className="card model">
            {/* <img src="/assets/Images/3d-models.png" alt="" /> */}
            <p>3D Model</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
