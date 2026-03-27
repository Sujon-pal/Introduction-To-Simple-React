import { useState } from "react";

function StateChange() {
  const counterStyle = {
    border: "2px solid yellow",
    padding: "10px",
  };

  const [count, setCount] = useState(0);
  function update() {
    return setCount(count + 1);
  }
  return (
    <>
      <div style={counterStyle}>
        <h1>Count : {count} </h1>
        <button className="btn" onClick={update}>
          {" "}
          Add
        </button>
      </div>
    </>
  );
}

export default StateChange;
