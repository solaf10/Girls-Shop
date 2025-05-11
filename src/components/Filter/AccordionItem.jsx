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
    <div className={`item ${isOpen ? "open" : ""}`} onClick={onToggle}>
      <p className="category">{category}</p>
      {/* <p className="icon">{isOpen ? "-" : "+"}</p> */}
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
