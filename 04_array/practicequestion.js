let techcompnay = [
  "bloomberg",
  "microsoft",
  "Uber",
  "Google",
  "ibm",
  "Netflix",
];

console.log(techcompnay);

// a) Remove the first company from the array:
// b) remove Uber & add ola in its place
// c) add amazaon to the last :
// a)
techcompnay.shift();
console.log(techcompnay);

// b

techcompnay.splice(1, 1, "Ola");
console.log(techcompnay);

// c

techcompnay.push("amazon");
console.log(techcompnay);
