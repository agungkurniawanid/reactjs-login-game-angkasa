import { CardMedia } from "../elements/mediacard";
import { ToggleTheme } from "../elements/toggle/theme";
import "./style.css";
export const AuthLayout = ({ children }) => {
  const register = ()=>{
    alert('Maaf konten belum tersedia!');
  }
  return (
    <div className="SubContainer">
      <h1 style={{ marginBottom: "1rem" }}>Game Login!</h1>
      <p className="p">
        Halo player login dahulu dan mulai gamenya! kalo <b>baperan</b> jangan
        main nieh game ok?
      </p>
      <ToggleTheme />
      {children}
      <p className="i">Atau login dengan</p>
      <CardMedia/>
      <p className="y">
        belum punya akun? <a href='' onClick={register}>register!</a>
      </p>
    </div>
  );
};
