import React from "react";

const WaterBottl = ({ bottole }) => {
  return (
    <div>
      <img src={bottole.image} alt="" />

      <h2>Bottole Name : {bottole.name}</h2>
       <img src={bottole.image} alt={bottole.name} width={150} />
    </div>
  );
};

export default WaterBottl;
