function Conditional({ name, isLoggedIn }) {
  return (
    <div>
      <section className="student">
        <h1>Name : {name}</h1>
        <h3>
          Login Alart :{" "}
          {isLoggedIn ? `Wellcome Back ${name}` : "Please Login"}{" "}
        </h3>
      </section>
    </div>
  );
}

export default Conditional;
