// compact way of writing a function:

//  arrow function is part of modern js :

const arrowsum = (a, b) => {
  console.log(a + b);
};

arrowsum(4, 4);

const arrowmul = (a, b) => {
  return a * b;
};
let val = arrowmul(3, 3);
console.log(val);
