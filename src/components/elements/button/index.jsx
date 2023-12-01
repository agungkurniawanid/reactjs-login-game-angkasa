import "./style.css";
export const Button = ({ children, className, onClick }) => {
  return (
    <button className={className || "Button"} onClick={onClick}>
      {children || "Klik disini!"}
    </button>
  );
};
