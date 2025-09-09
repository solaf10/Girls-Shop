import "./SkeletonCard.css";

const SkeletonCard = ({ count }) => {
  return (
    <>
      {[...Array(count)].map((_, idx) => (
        <div className=" skeleton-card" key={idx}>
          <div>
            <div className="skeleton-img"></div>
          </div>
          <div className="info">
            <p className="p-skeleton"></p>
            <div className="price p-skeleton"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonCard;
