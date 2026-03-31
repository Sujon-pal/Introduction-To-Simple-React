import React, { use } from "react";
import "./countris.css";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  return (
    <div className="container">
      <h1 className="title">🌍 Countries: {countries.length}</h1>

      <div className="grid">
        {
          countries.map(country => (
            <Country key={country.cca3} country={country} />
          ))
        }
      </div>
    </div>
  );
};

export default Countries;