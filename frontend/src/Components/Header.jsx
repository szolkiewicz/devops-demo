import { useRef } from "react";
import LoginModal from "./LoginModal";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useNavigate, NavLink } from "react-router-dom";


const Header = () => {
  const loginModalRef = useRef();
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const loginHandler = () => {
    loginModalRef.current?.showModal();
    navigate("/");
  }

  const logoutHandler = () => {
    setUser(null);
    navigate("/");
  }

  let buttons = null;

  if (user) {
    buttons = (
      <div>
        <NavLink to="/" className="App-button">Home</NavLink>
        <NavLink to="/crud" className="App-button">CRUD DB</NavLink>
        <button className="App-button" onClick={logoutHandler}>Logout <i>{user.user}</i></button>
      </div>)
  } else {
    buttons = (
      <div>
        <button className="App-button" onClick={loginHandler}>Login</button>
        <button className="App-button" onClick={loginHandler}>Register</button>
      </div>)
  }

  return (
    <>
      <header className="App-header">
        <p>Szandala's k8s demo page</p>
        {buttons}
      </header>
      <LoginModal loginModalRef={loginModalRef} />
    </>
  )
}

export default Header;
