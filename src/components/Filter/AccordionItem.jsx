import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
export default function AccordionItem({
  category,
  num,
  curOpen,
  onOpen,
  children,
}) {
  const isOpen = num == curOpen;
  function onToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <div className="category-holder">
        <p className="category">{category}</p>
        <p className="icon" onClick={onToggle}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </p>
      </div>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
