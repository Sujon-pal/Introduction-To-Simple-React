import React, { use } from "react";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      {
        countries.map(country => (
            <div key={country.cca3}>
                <h3>Name : {country.name.common}</h3>
                 <img src={country.flags.png} width="100" />
            </div>
        ))
      }
    </div>
  );
};

export default Countries;