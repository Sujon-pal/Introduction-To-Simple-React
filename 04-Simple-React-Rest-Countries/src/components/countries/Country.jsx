import { useState } from "react";

const Country = ({ country }) => {
  const [isVisited, setVisited] = useState(false);

  
  return (
    <div className={`card ${isVisited && 'country-visitied'}`}>
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="flag"
      />

      <h3 className="name">{country.name.common}</h3>

      <button onClick={() => setVisited(!isVisited)}>
        {isVisited ? "Visited ✅" : "Not Visited ❌"}
      </button>
    </div>
  );
};

export default Country;