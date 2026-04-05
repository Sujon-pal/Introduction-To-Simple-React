import { Suspense } from "react";
import "./App.css";
import WaterBottls from "./components/WaterBottls/WaterBottls";

// only once fetch
const waterBottlesPromise = fetch(
  "https://jsonplaceholder.typicode.com/photos?_limit=20"
).then((res) => res.json());

function App() {
  return (
    <>
      <h1>Water Bottles Gallery</h1>

      <Suspense fallback={<h2>Loading...</h2>}>
        <WaterBottls waterBottlesPromise={waterBottlesPromise} />
      </Suspense>
    </>
  );
}

export default App;