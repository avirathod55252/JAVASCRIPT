// array is collections of items ; Linear fashion

// create array :

let marks = [97, 82, 75, 66, 77];
console.log(marks);

console.log(marks.length);
console.log(marks[3]);

let heroes = ["avinash", "rathod"];
console.log(heroes);
console.log(heroes.length);

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

for (let i of heroes) {
  console.log(i);
}

for (let i in heroes) {
  console.log(i);
}
// for of loop only used to array
for (let i of marks) {
  console.log(i);
}

let object = {
  name: "avi",
  id: 3,
};

// for in lopp only used in object
for (let i in object) {
  console.log(i);
}
