import { use } from "react";
import FriendData from "./FriendData";

function Friend({ userData }) {
  const users = use(userData);
 
  return (
    <>
      <div className="card">
        <h2>Friends List</h2>
        {users.map((user) => (
          <FriendData key={user.id} user={user}></FriendData>
        ))}
      </div>
    </>
  );
}
export default Friend;
