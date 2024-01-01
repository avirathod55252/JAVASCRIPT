let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "white") {
  color = "white";
} else if (mode === "pink") {
  color = "pink";
} else {
  color: "none";
}
console.log(color);

let age = 18;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

// practice question :

// to take a user input as also check multiply of 5

// let number = prompt("Enter the number : ");
// if (number % 5 == 0) {
//   console.log("multiple 5 ");
// } else {
//   console.log("not multiple of 5 ");
// }

// write a code  which can give grades to  students according to their scores:

let marks = prompt("enter the marks:");
let grade;
if (marks >= 90 && marks <= 100) {
  // console.log("A");
  grade = "a";
} else if (marks >= 70 && marks <= 89) {
  console.log("B grade");
} else if (marks >= 60 && marks <= 69) {
  console.log("C");
} else if (marks >= 50 && marks <= 59) {
  console.log("D");
}
elseif(marks >= 0 && marks <= 49);
{
  console.log("F");
}
console.log(grade);
