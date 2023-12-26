let a = 5;
let b = 9;
console.log(a);
console.log(a++);
console.log(a);
console.log(++b);
console.log(b);

a += 5;
console.log(a);

// console.log(a + b);
// console.log(a * b);
// console.log(a - b);
// console.log(a / b);

// console.log(a % b);

// comparison oprator

let c = 4;
let d = 4;

console.log(c === d);

console.log(c);
console.log(d);
console.log(c == d);
console.log(a != b);
console.log(a === b);

// Logical operators :
// logical and operators: &&
// Logical or oprators ||
// logical not !

let l = 5;
let m = 8;
let cond1 = l > m;
let cond2 = l < m;
console.log(cond1 && cond2);
console.log(cond1 || cond2);
console.log(!cond1);

// conditional statements :

let age = 22;

if (age > 18) {
  console.log("You can vote current age is " + age);
} else {
  console.log("You cannot  a vote Becaue You are under age :  " + age);
}
