import './style.css';
export const InputHTML = ({ size, type, name, id, placeholder, className }) => {
  return (
    <div className='ok'>
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className || "defaultInput"}
    />
    </div>
  );
};
