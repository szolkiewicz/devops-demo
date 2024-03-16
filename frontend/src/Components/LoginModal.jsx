import { useState } from "react";


const LoginModal = ({loginModalRef}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const tryLogin = () => {
    loginModalRef.current.close();
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
          <div>
        <button onClick={tryLogin} className="App-button">Login</button>
        <button onClick={tryLogin} className="App-button">Cancel</button>
        </div>
      </dialog>
  )
}

export default LoginModal;
