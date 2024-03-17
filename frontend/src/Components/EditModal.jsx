import { useState } from "react"

const EditModal = (userData) => {

  const [email, setEmail] = useState(userData.email)
  const [password, setPassword] = useState(userData.password)
  const [name, setName] = useState(userData.name)
  const [surname, setSurname] = useState(userData.surname)

  return (
  <dialog id="modal" className="modal" ref={loginModalRef}>
    <div className="user-card">
      <div className="column-flex">
        <img src="/user-placeholder.jpg" alt="Upload new " />
        <div className="row-flex">
        </div>
      </div>
      <div className="column-flex">
      <input
          value={email}
          placeholder="Enter email here"
          onChange={(e) => setEmail(e.target.value)}
          className="App-input"
          />
      <input
          value={name}
          placeholder="Enter name here"
          onChange={(e) => setName(e.target.value)}
          className="App-input"
          />
      <input
          value={name}
          placeholder="Enter name here"
          onChange={(e) => setName(e.target.value)}
          className="App-input"
          />
  <input
          value={password}
          placeholder="Enter your password here"
          onChange={(e) => setPassword(e.target.value)}
          className="App-input"
          type="password"
          />
        <p>{userData.name} {userData.surname}</p>
        <div className="row-flex">
          <p>Roles: </p>{roles}
        </div>
      </div>
    </div>
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
        <button onClick={handleLogin} className="App-button">Cancel</button>
        </div>
      </dialog>)
}
