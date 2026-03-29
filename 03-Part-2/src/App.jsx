import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import HandleEvent from "./Component/HandleEvents";
import StateChange from "./Component/StateChange";
import Users from "./Component/Users";

import { Suspense } from "react";
import Friend from "./Component/Friend";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchUserName = async () => {
  let ref = await fetch("https://jsonplaceholder.typicode.com/users");
  return ref.json();
};
  const userData = fetchUserName();

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
      </section>
      <HandleEvent></HandleEvent>
      <StateChange></StateChange>
      <Suspense fallback={<h3>Lodding...</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>
    
      <Suspense fallback={<h3>Lodding...</h3>}>
        <Friend userData={userData}></Friend>
      </Suspense>
    </>
  );
}

export default App;
