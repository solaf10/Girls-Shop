import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function AccordionItem({ category, num, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  const toggle = () => onOpen(isOpen ? null : num);

  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <div className="category-holder">
        <p className="category">{category}</p>
        <p className="icon" onClick={toggle}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </p>
      </div>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionItem;
