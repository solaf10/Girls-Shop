import { GrNext } from "react-icons/gr";
import "./PagenationControllers.css";

const PagenationControllers = ({
  goToPage,
  nextPage,
  currentPage,
  totalPages,
  isBtnDisabled,
}) => {
  return (
    <div className="pagenation-btns">
      {[...new Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={i == currentPage ? "active pageNum" : "pageNum"}
          onClick={() => goToPage(i)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className={isBtnDisabled ? "disabled next" : "next"}
        onClick={nextPage}
        disabled={isBtnDisabled}
      >
        <span>Next</span>
        <span>
          <GrNext className="icon" />
        </span>
      </button>
    </div>
  );
};

export default PagenationControllers;
