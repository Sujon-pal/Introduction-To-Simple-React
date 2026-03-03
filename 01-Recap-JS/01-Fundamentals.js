// 🟢  Variables (let, const, var)

// 🔹 let - > Value can change
let name = "Sujon";
const age = 22;

let count = 1;
count = 2; // allowed

//  🔹 const - >  Value cannot change
const pi = 3.14;
// pi = 5; // ❌ error

// 🟢 Functions

function sum(a, b) {
  let result = a + b;
  return result;
}

const result = sum(10, 20);
console.log(result);

// 🔹 Arrow function

const add = (a, b) => {
  let sum = a + b;
  return sum;
};
console.log(sum(20, 30));

// 🟢  Arrays

let fruits = ["apple", "banana", "mango", "orange", "grape", "pineapple"];
console.log(fruits[0]); // apple

fruits.push("BD"); // add last index
fruits.pop(); // remove last item
fruits.unshift("BD"); // add first index
fruits.shift(); // remove first item

console.log(fruits);

for (let i = 0; i <= fruits.length - 1; i++) {
  console.log(fruits[i]);
}
// 🟢  Objects
const user = {
  name: "sujon pal",
  age:25,
  fruit : fruits
};


console.log(user.name)
console.log(user.fruit[0])