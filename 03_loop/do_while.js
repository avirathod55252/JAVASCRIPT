let i = 1;

do {
  console.log("i = " + i);
  i++;
} while (i <= 7);

// for-of loop

let st = "avinash";
let size = 0;
for (let i of st) {
  // iterator -> characters:
  console.log("i = " + i);
  size++;
}

console.log("string size: " + size);

// for-in loop
let student = {
  name: "avinash rathod ",
  age: 22,
  percentage: 83.02,
  ispass: true,
};

for (let i in student) {
  console.log(i + student[i]);
}
for (let i in marks) {
  console.log(i);
}
