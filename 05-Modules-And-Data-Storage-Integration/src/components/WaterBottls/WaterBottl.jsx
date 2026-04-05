const WaterBottl = ({ bottole,handleAddCart }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <img
        src={bottole?.thumbnailUrl}
        alt={bottole?.title}
        style={{ width: "100%" }}
      />

      <h4>{bottole?.title}</h4>
      <button onClick={ () => handleAddCart(bottole)}>Buy Now</button>
    </div>
  );
};

export default WaterBottl;