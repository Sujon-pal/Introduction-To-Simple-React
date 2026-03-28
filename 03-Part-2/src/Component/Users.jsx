import { use } from "react";

function Users({fetchUser}) {
 

  const users = use(fetchUser)
  return (
    <div className="card">
      <h1>Users : {users.length} </h1>
    </div>
  );
}

export default Users;
