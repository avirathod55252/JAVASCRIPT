const mynums = [1, 2, 3];

const mytotal = mynums.reduce(function (acc, currval) {
  console.log(`acc ${acc} currval ${currval}`);
  return acc + currval;
}, 0);

console.log(mytotal);

// arrowfunction
const total = [222, 2, 2];

const myTotal = total.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);
