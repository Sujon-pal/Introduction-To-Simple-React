function FriendData({ user }) {
  const { name, email } = user;
  return (
    <>
      <div className="card">
        <h3>Name : {name}</h3>
        <p>Email : {email}</p>
      </div>
    </>
  );
}

export default FriendData;
