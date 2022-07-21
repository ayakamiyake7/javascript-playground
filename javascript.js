// console.log("Hello, JavaScript!");

// ********* let
// let value = 1;

// value = 2;

// if (value === 2) value = 0;
// console.log(value);

// ********* const
// const value = 1;
// console.log(value);

// if (true) {
//   const value = 2;
//   console.log(value);
// }

// console.log(value);

// const profile = {
//   //Object
//   age: 45,
//   name: "Ham",
// };
// profile.gender = "male";
// profile["address"] = 124;

// console.log(profile);

// profile.age = 40;
// console.log(profile);

// ********* function
// function square(x) {
//   return x * x;
// }
// square(2);
// console.log(square(2));

// const calculatedArea = function (length) {
//   return length * length;
// };
// console.log(calculatedArea(10));

// ********* arrow function
// const square = (length) => {
//   return length * length;
// };
// console.log(square(2));
// console.log(square);

// ********* import and export
// import profile from "./profile.js";
// console.log(profile);

// ********* practice
// import area from "./utils.js";
// console.log(area(2));

// ********* template literals
// const nickname = "ham";
// const age = 45;
// console.log(`I am ${nickname}, ${age} years old.`);

// ********* destructuring assignment
// const array = ["Ham", 45, "aubergine", "Oranges"];
// const nickname = array[0];

// const [nickname, age, ...rest] = array; //rest operator
// console.log(nickname);
// console.log(age);
// console.log(rest);

// ********* destructuring assignment -Object
// const profile = { nickname: "ham", age: 45 };
// const { nickname, ...rest } = profile;
// console.log(nickname);
// console.log(rest);

// const printObject = ({ nickname }) => {
//   console.log(`nickname: ${nickname}`);
// };
// printObject(profile);

// ********* spread syntax
// const numbers = [1, 2, 3];
// const integers = [4, 5, 6];
// const all = [...numbers, ...integers];
// console.log(all);

// console.log(numbers.concat(integers));

// const profile1 = { nickname: "ham" };
// const profile2 = { age: 45 };
// const profile = { ...profile1, ...profile2 };
// console.log(profile);
// console.log(profile1);
// console.log(profile2);

// ********* map method
const numbers = [5, 4, 3];
const square = (number) => number * number;

const squares = numbers.map(square);
console.log(numbers);
console.log(squares);
