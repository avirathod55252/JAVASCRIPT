// maps
const map = new Map();
map.set("In", "India");

console.log(map);
for (const [key, value] of map) {
  console.log(key, value);
}
// for (let i in map) { // not working because map not iterate
//   console.log(i);
// }

// object
const myobject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
};

// keys and values
for (let i in myobject) {
  console.log(i + "= " + myobject[i]);
}

// for in array
let array = [3, 33, 33];
// for (let i in array) {
//   console.log(i + " =" + array[i]);
// }

// for- each loop

array.forEach(function (item) {
  console.log(item);
});

// arrow function :

array.forEach((item) => {
  console.log(item);
});

//
function printme(item) {
  console.log(item);
}
array.forEach(printme);

// object inside the array : accesing also :
const myCoding = [
  {
    languagename: "javascript",
    founder: "Brendan Eich",
  },
  {
    languagename: "c",
    founder: "Dennis Ritche",
  },
  {
    languagename: "java",
    founder: "James Gosling",
  },
];

myCoding.forEach((item) => {
  console.log(item.languagename);
});
myCoding.forEach((item) => {
  console.log(item);
});
