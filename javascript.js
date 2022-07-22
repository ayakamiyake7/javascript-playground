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
// const numbers = [5, 4, 3];
// const square = (number) => number * number;

// const squares = numbers.map(square);
// console.log(numbers);
// console.log(squares);

// ********* asynchronous
// const request = new XMLHttpRequest();
// console.log(1);
// request.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
// console.log(2);
// request.onload = function () {
//   if (request.status === 200) {
//     console.log(3);
//     console.log(request.response);
//   }
// };
// const before = Date.now();
// request.send(null);
// const after = Date.now();
// const ms = after - before;
// console.log(`ms: ${ms}`);

// console.log(4);

// ********* weaknesses
// console.log(1);
// setTimeout(() => {
//   console.log(`1 sec...`);
//   setTimeout(() => {
//     console.log(`1 sec...`);
//     setTimeout(() => {
//       console.log(`1 sec...`);
//     }, 1000);
//   }, 1000);
// }, 1000);
// console.log(3);

// ********* promise
// console.log("start");

// const sleep = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`${milliseconds} ms`);
//       resolve();
//     }, milliseconds);
//   });
// };
// const promise = sleep();

// const isClosure = true;

// sleep(900)
//   .then(() => sleep(901))
//   .then(() => sleep(902))
//   .then(() => sleep(903))
//   .then(() => sleep(904))
//   .then(() => sleep(905));

// ********* async and await
// async function asyncCall() {
//   await sleep(900);
//   await sleep(901);
//   await sleep(902);
//   await sleep(903);
//   await sleep(904);
//   await sleep(905);
// }
// asyncCall();
// console.log("end");

// ********* fetch
// const result = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log({ result });
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     console.log({ response });
//     const json = response.json();
//     console.log({ json });
//     return json;
//     response.json();
//   })
//   .then((json) => console.log(json));

// ********* fetch by async and await
const url = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  const result = await fetch(url);
  console.log({ result });
  const json = await result.json();
  console.log({ json });
};
fetchUsers();
