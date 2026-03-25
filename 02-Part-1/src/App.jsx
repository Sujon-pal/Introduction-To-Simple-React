import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import Properties from "./component/Properties";
import Conditional from "./component/Conditional";

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
      <Properties />
      {/* Conditional Rendering: If, Ternary and AND OR */}
      <Conditional name="Sujon" isLoggedIn={true} />
      <Conditional name="Anika" isLoggedIn={true} />
      <Conditional name="Shawon" isLoggedIn={false} />
    </>
  );
}

export default App;
