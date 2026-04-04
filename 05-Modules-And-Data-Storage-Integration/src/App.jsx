import { Suspense } from "react";
import "./App.css";
import { mult, sum } from "./utils/math";
import WaterBottls from "./components/WaterBottls/WaterBottls";

function App() {
  const add = sum(10, 20);
  console.log(add);

  const goonfol = mult(2, 2);
  console.log(goonfol);

  // Fetch waterBottles.json data

  const waterBottlesPromise = fetch("../waterBottles.json").then((res) =>
    res.json(),
  );

  return (
    <>
      <h1>41-1 Module Introduction ES6 Modules simple import, export</h1>

      <Suspense fallback={<h2>waterBottles Data Loading ...</h2>}>
        <WaterBottls waterBottlesPromise={waterBottlesPromise}></WaterBottls>
      </Suspense>
    </>
  );
}

export default App;
