function HandleEvent() {
  function HandleClick() {
    alert("Button clicked!");
  }

  return (
    <>
      <button className="btn" onClick={HandleClick}> Click 1
      </button> 
      {/* <button className="btn" onClick={HandleClick}> Click 2 
      </button>  */}
    </>
  );
}
export default HandleEvent;


