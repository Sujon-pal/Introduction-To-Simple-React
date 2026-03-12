const handleLocalStorage = () => {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  localStorage.setItem(id, name);

  // Create a  object
  const userData = { id, name };

  //Save to localStorage and Convert object to JSON string
  localStorage.setItem(id, JSON.stringify(userData));
};

// Get data
const getUserData = localStorage.getItem("2");
console.log(getUserData);

// Convert JSON string to object
const getUserDataObject = JSON.parse(getUserData);
console.log(getUserDataObject);
