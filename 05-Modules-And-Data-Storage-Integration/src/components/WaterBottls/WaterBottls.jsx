import React, { use } from "react";
import WaterBottl from "./WaterBottl";

const WaterBottls = ({ waterBottlesPromise }) => {
  const waterBottles = use(waterBottlesPromise);
  console.log(waterBottles);
  return (
    <div>
        <h1>Bottols : {waterBottles.length}</h1>
      {
        waterBottles.map(bottole => (
            <WaterBottl key={bottole.id} bottole={bottole} ></WaterBottl>
        ))
      }
    </div>
  );
};

export default WaterBottls;
