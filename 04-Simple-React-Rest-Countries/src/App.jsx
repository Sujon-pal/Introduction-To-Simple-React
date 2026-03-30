import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

const countriesPromise = fetch(
  "https://studies.cs.helsinki.fi/restcountries/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h2>Data Loading...</h2>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;