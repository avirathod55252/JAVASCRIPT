// array is collections of items ; Linear fashion

// create array :

let marks = [97, 82, 75, 66, 77];
console.log(marks);

console.log(marks.length);

let heroes = ["avinash", "rathod"];
console.log(heroes);

console.log(marks[3]);
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

for (let i of heroes) {
  console.log(i);
}
