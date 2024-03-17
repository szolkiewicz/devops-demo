import UserCard from "../Components/UserCard";
import { useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { getAllUsers } from "../Services/api";

const CRUD = () => {

  // const editModalRef = useRef();

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [user] = useLocalStorage("user", null);

  useEffect(() => {
    getAllUsers(user?.token).then(data => {
      setError("");
      setUsers(data);
    }
    ).catch(err => {
      console.log({ err })
      setError(err.message)
    })
  }, [user])

  // const handleEdit = () => {
  //   editModalRef.current?.showModal();
  // }


  const cards = users.map(it => <UserCard key={it.id} userData={it} />)
  return (
    <div>
      {cards}
      {!!error && <h2>{error}</h2>}
    </div>
  )
}

export default CRUD;
