import { useState } from "react";
import { tryLogin } from "../Services/api";
import useLocalStorage from "../Hooks/useLocalStorage";

const LoginModal = ({loginModalRef}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setUser] = useLocalStorage("user", null);

  const handleLogin = () => {
    tryLogin(email, password).then(([msg,userData])  => {
      if(userData) {
        setUser(userData);
        setError("");
        loginModalRef.current.close();
      } else {
        setError(msg);
        setUser(null);
      }
    })
  }

  return (
      <dialog id="modal" className="modal" ref={loginModalRef}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(e) => setEmail(e.target.value)}
          className="App-input"
          />
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(e) => setPassword(e.target.value)}
          className="App-input"
          type="password"
          />
          {!!error && <p>{error}</p>}
          <div>
        <button onClick={handleLogin} className="App-button">Login</button>
        <button onClick={() => loginModalRef.current.close()} className="App-button">Cancel</button>
        </div>
      </dialog>
  )
}

export default LoginModal;
