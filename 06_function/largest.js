let large = [2, 3, 4, 5, 6, 7, 8];

const output = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});

console.log(output);
