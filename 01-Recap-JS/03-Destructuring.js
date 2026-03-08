// 🟢 Array Destructuring
let user = ["Sjon", "Pal", "25", "Sylhet", "BD"];

let [fname, lname, age, ...moreInfo] = user;
console.log(fname);
console.log(lname);
console.log(moreInfo);

// 🟢 Skip Value in Array

let fruits = ["apple", "banana", "mango", "orange"];

// skip banana
let [first, , third] = fruits;

console.log(first); // apple
console.log(third); // mango

// 🟢  Default Value

let animals = ["cat", "dog"];
let [animal1, animal2, animal3 = "tiger", animal4 = "laion"] = animals;

console.log(animal1); // cat
console.log(animal2); // dog
console.log(animal3); // tiger
console.log(animal4); // laion

// 🟢 Rest Operator (...)

let numbers = [10, 20, 30, 40, 50];

let [num1, num2, ...others] = numbers;
console.log(num1); // 10
console.log(num2); // 20
console.log(others); // [30,40,50]

// 🟢 OBJECT DESTRUCTURING

// 🟢  Basic Object Destructuring
let student = {
  name: "Sujon",
  subject: "JavaScript",
  dept: "CSE",
};
let { name, dept, subject } = student;
console.log(name); // Sujon
console.log(dept); // CSE
console.log(subject); // JavaScript

// 🟢  Rename Variable
let teacher = {
  name: "Rahim",
  subject: "Math",
};
// rename variable
let { name: teacherName, subject: teacherSubject } = teacher;
console.log(teacherName);
console.log(teacherSubject);

// 🟢 Default Value in Object
let person={
    userName:'sujon',

}
let {userName, userAge=26} = person
console.log(userAge)



