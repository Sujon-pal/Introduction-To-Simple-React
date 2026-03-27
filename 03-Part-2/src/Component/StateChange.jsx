import { useState } from "react";

function StateChange() {
  const counterStyle = {
    border: "2px solid yellow",
    padding: "10px",
    marginBottom: "10px",
  };

  const [count, setCount] = useState(0);
  function update() {
    return setCount(count + 1);
  }

  const [run, setRun] = useState(0);
  const [sixs,setSixs] = useState(0)
  function handleSingleRun() {
    return setRun(run + 1);
  }

  function handleFourRun() {
    return setRun(run + 4);
  }

  const handleSixRun = () => {
    let updateSix = sixs + 1
    let updateRun = run + 6;
    setRun(updateRun)
    setSixs(updateSix)
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

      {/* Run counter */}
      <div style={counterStyle}>
        <h1>Count : {run} </h1>
        <p><small>Total Six : {sixs}</small></p>
        {
            run >= 50 && <p>Your Score is 50</p>
        }
         {
            run >= 100 && <p>Your Score is 100</p>
        }
        <button className="btn" onClick={handleSingleRun}>
          {" "}
          Single
        </button>
        <button className="btn" onClick={handleFourRun}>
          {" "}
          Four
        </button>
        <button className="btn" onClick={handleSixRun}>
          {" "}
          Six
        </button>
      </div>
    </>
  );
}

export default StateChange;
