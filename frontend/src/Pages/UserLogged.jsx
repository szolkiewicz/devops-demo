import useLocalStorage from "../Hooks/useLocalStorage";

const UserLogged = () => {
  const [user] = useLocalStorage("user", null);
  const roles = user?.roles.map(it => <li key={it}>🎩 {it}</li>)

  return (
    <>
    <p>You are logged as user <i>{user?.user}</i></p>
    <p>Your roles are:</p>
    <ul>
      {roles}
    </ul>
    {user?.roles.includes("dummy") && <p>WARNING! This role is dummy, connects to backend, but not necessary to Database!</p>}
    </>
  )
}

export default UserLogged;
