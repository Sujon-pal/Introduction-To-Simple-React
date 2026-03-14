function Properties() {
  return (
    <div>
      <Player name="Sujon" Run={50} />
      <Player name="Rahim" Run={100} />

      <UserInformation name="Sujon" age={22} city="Dhaka" />
      <UserInformation name="Rahim" age={20} city="Sylhet" />
    </div>
  );
}

function Player({ name, Run }) {
  return (
    <div className="student">
      <p>Name : {name}</p>
      <p>Run : {Run}</p>
    </div>
  );
}

function UserInformation({ name, age, city }) {
  return (
    <div className="student">
      <h1>Name : {name}</h1>
      <h3>Age : {age}</h3>
      <h3>City : {city}</h3>
    </div>
  );
}

export default Properties;