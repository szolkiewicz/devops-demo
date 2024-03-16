import { useState } from "react";

const UserView = () => {
  const [user, setUser]=useState(null);

  return (
    <>
    <p>You are logged as user {user}</p>
    <p>Please login</p>
    </>
  )
}

export default UserView;
