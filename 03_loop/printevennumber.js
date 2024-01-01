// practice question : 1

// let i = 0;
// let count = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//     count++;
//   }
//   // console.log(count);
// }

let guesnum = 23;
let usernum = prompt("enter the user number");

while (guesnum != usernum) {
  usernum = prompt("enter the again ");
}
console.log("congratulations!  you entered the right number: ");
