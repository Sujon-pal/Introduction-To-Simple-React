const tutors = [
  {
    id: 1,
    name: "Rahim",
    subject: "Math",
    rating: 5,
    city: "Sylhet",
    hourlyRate: 800,
    available: true,
  },
  {
    id: 2,
    name: "Karim",
    subject: "Math",
    rating: 4,
    city: "Dhaka",
    hourlyRate: 700,
    available: true,
  },
  {
    id: 3,
    name: "Sujon",
    subject: "English",
    rating: 3,
    city: "Chittagong",
    hourlyRate: 600,
    available: false,
  },
  {
    id: 4,
    name: "Nusrat",
    subject: "Physics",
    rating: 5,
    city: "Sylhet",
    hourlyRate: 900,
    available: true,
  },
  {
    id: 5,
    name: "Tanvir",
    subject: "Chemistry",
    rating: 4,
    city: "Rajshahi",
    hourlyRate: 750,
    available: false,
  },
  {
    id: 6,
    name: "Mim",
    subject: "Biology",
    rating: 5,
    city: "Dhaka",
    hourlyRate: 850,
    available: true,
  },
  {
    id: 7,
    name: "Arif",
    subject: "ICT",
    rating: 4,
    city: "Sylhet",
    hourlyRate: 650,
    available: true,
  },
  {
    id: 8,
    name: "Jannat",
    subject: "English",
    rating: 5,
    city: "Khulna",
    hourlyRate: 700,
    available: true,
  },
];

// map()    👉 Returns a new array
const map = tutors.map((tutor) => {
  // console.log(tutor.subject)
});

// forEach()    👉 Does NOT return anything
tutors.forEach((tutor) => {
  //   console.log(tutor);
});

// filter()     👉 Returns a new array

const mathTutor = tutors.filter((tutor) => {
  return tutor.subject === "Math";
});
console.log(mathTutor);

// find()  👉 Use when you want only one match 👉 Returns a single object

const tutor = tutors.find((tutor) => {
  return tutor.id === 2;
});
console.log(tutor)
