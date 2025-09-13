import "./EmptyHandler.css";

const EmptyHandler = ({ message }) => {
  return (
    <div className="empty-handler">
      <img src="/public/assets/Images/Empty-pana.svg" alt="" />
      <p>{message}</p>
    </div>
  );
};

export default EmptyHandler;
