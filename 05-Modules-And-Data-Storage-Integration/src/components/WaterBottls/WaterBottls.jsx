import { use, useState } from "react";
import WaterBottl from "./WaterBottl";
import { addItemToCartLocalStorage } from "../LocalStorage";

const WaterBottls = ({ waterBottlesPromise }) => {

  const [cart , setCart] = useState([]);
  const waterBottles = use(waterBottlesPromise);
  console.log(waterBottles);

  const handleAddCart = (bottle)=>{
   const newCart = [...cart , bottle];
   setCart(newCart)


  //  save the bottle id in the storage
  addItemToCartLocalStorage(bottle.id)
  }

  return (
    <div>
      <h2>Total Bottles: {waterBottles.length}</h2>
      <h3>Total Card : {cart.length} </h3>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "15px"
      }}>
        {waterBottles.map((bottole) => (
          <WaterBottl key={bottole.id} 
          handleAddCart = {handleAddCart}
          bottole={bottole} />
        ))}
      </div>
    </div>
  );
};

export default WaterBottls;