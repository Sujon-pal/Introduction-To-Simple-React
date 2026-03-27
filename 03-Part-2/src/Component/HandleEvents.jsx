function HandleEvent() {
  function HandleClick() {
    alert("Button clicked!");
  }

  const sum = (num) =>{
    let result = num + 10;
    alert(result)
  }

  return (
    <>
      <button className="btn" onClick={HandleClick}> Click 1
      </button> 
      <button className="btn" onClick={() => sum(10)}> Click 2 
      </button> 
    </>
  );
}
export default HandleEvent; 


