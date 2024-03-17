
const UserCard = ({ userData }) => {

  const roles = userData.roles.map(it => <p key={it}>{it}</p>)
  return (
    <div className="user-card">
      <div className="column-flex">
        <img src="/user-placeholder.jpg" alt="Upload new " />
        <div className="row-flex">
          <button className="App-mini-button">Edit</button>
          <button className="App-mini-button">Delete</button>
        </div>
      </div>
      <div className="column-flex">
        <p>{userData.email}</p>

        <p>{userData.name} {userData.surname}</p>
        <div className="row-flex">
          <p>Roles: </p>{roles}
        </div>
      </div>
    </div>)
}


export default UserCard;
