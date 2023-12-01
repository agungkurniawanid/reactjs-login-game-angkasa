import { InputHTML } from "./input";
import { LabelHTML } from "./label";
import './style.css';
export const InputComponent = ({ type, label, id, htmlFor, placeholder, name }) => {
  return (
    <div className="Wrapper">
      <LabelHTML id={htmlFor}>{label}</LabelHTML>
      <InputHTML type={type} id={id} placeholder={placeholder} name={name} />
    </div>
  );
};