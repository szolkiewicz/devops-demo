import { useRef } from "react";
import LoginModal from "./LoginModal";

const Header = () => {
  const loginModalRef = useRef();

  const loginHandler = () => {
    loginModalRef.current?.showModal();
  }

  return (
    <>
      <header className="App-header">
        <p>Szandala's k8s demo page</p>
        <div>
          <button className="App-button" onClick={loginHandler}>Login</button>
          <button className="App-button" onClick={loginHandler}>Register</button>
        </div>
      </header>
      <LoginModal loginModalRef={loginModalRef} />
    </>
  )
}

export default Header;
