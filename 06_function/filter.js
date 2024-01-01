let arr = [3, 2, 4, 5, 1, 2, 9];
// filter element as per condition of developer:

let newarr = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(newarr);
