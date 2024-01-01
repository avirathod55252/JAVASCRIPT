let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toDateString());

console.log(typeof mydate);

let mycreatedate = new Date(2023, 0, 23);
let indiandate = new Date("01-14-2023"); // mm-dd-yy
console.log(mycreatedate);
console.log(indiandate.toString());
console.log(mycreatedate.toLocaleDateString());
console.log(mycreatedate.toLocaleString());

// time
let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now()) / 1000);

