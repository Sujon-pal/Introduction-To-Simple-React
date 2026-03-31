import React, { use, useState } from "react";
import "./countris.css";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {
  const [visitiedCountries, setVisitiedCountries] = useState([]);
  const countries = use(countriesPromise);

  const handleVisitedCountries = (countrie) => {
    const newvisitiedCountries = [...visitiedCountries,countrie];
    setVisitiedCountries(newvisitiedCountries)
  };

  return (
    <div className="container">
      <h1 className="title">🌍 Countries: {countries.length}</h1>
      <h2  className="title">Explore Countries : {visitiedCountries.length}</h2>

      <ol>
        {
            visitiedCountries.map(country =>(
                <li>{country.name.common}</li>
            ))
        }
      </ol>

      <div className="grid">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
