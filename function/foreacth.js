// for-each function is Higher Order function:

let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
  console.log(val);
});

console.log("practice question below:\n ");
// practice question

// declare array and print square of these number:  using high order function(for-each);
let square = [2, 4, 6, 8];

// square.forEach(function printsquare(val) {
//   console.log(val * val);
// });

square.forEach((num) => {
  console.log(num * num);
});
