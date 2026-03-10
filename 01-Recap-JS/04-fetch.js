// 🟢 JSON (JavaScript Object Notation)
let jsonData = {
  name: "Sujon",
  age: 22,
  subject: "JavaScript",
};

// Convert JavaScript object to JSON
let newJson = JSON.stringify(jsonData);
console.log(newJson);

// Convert JSON string to JavaScript object
let user = JSON.parse(newJson);
console.log(user);

// 🟢  FETCH API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // convert response to JSON
  //   .then((data) => console.log(data)) // array of users
  .catch((error) => {
    // console.log("Error", error);
  });

// 🟢 Object.keys()
let student = {
  name: "Rahim",
  age: 20,
  subject: "Math",
};
let keys = Object.keys(student);
console.log(keys);

// 🟢 Object.values()
let values = Object.values(student);
console.log(values);

// 🟢 Object.entries()
let entries = Object.entries(student);
console.log(entries);

// 🟢 Notation (Access Object)
const tutors = [
  { name: "Rahim", subject: "Math", rating: 5 },
  { name: "Karim", subject: "English", rating: 4 },
  { name: "Anika", subject: "Biology", rating: 5 },
];

// add new tutor
let newTutor = {
  name: "Nusrat",
  subject: "Chemistry",
  rating: 3,
};

let alltutors = [...tutors, newTutor];
console.log(alltutors);

let remainingTutors = alltutors.filter((tutor) => tutor.rating !== 4);
console.log(remainingTutors)
