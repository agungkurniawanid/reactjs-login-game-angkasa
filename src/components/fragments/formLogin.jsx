import { Button } from "../elements/button";
import { InputComponent } from "../elements/input";
import './style.css';
export const FormLogin = () => {
  const klik = ()=>{
    alert('Maaf konten belum tersedia!');
  }
  return (
    <form action="">
      <InputComponent
        label="Username"
        name="username"
        placeholder="Masukkan Username"
        type="text"
        id="username"
        htmlFor="username"
      />
      <InputComponent
        label="Password"
        name="password"
        placeholder="Masukkan Password"
        type="password"
        id="password"
        htmlFor="password"
      />
      <Button onClick={klik}>Login</Button>
    </form>
  );
};
