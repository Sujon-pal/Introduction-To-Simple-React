import { useState } from "react";

const Country = ({ country ,handleVisitedCountries }) => {
  const [isVisited, setVisited] = useState(false);

  const handleVisited = () =>{
    // if(isVisited === true){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }

    // OR 
    setVisited(!isVisited)
    handleVisitedCountries(country)
  }
  return (
    <div className={`card ${isVisited && 'country-visitied'}`}>
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="flag"
      />

      <h3 className="name">{country.name.common}</h3>

      <button onClick={handleVisited}>
        {isVisited ? "Visited ✅" : "Not Visited ❌"}
      </button>
    </div>
  );
};

export default Country;