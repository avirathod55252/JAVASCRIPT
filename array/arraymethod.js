// array methods :
// push () ;
/* 
1) push () : add to end 
2) pop() : delete from end to return 
3) toString() converts array to strings 
4)concat() // combine two array 
5) unshift() // add to starting 
6) shift() // delete from stat
7) slice(startindex, endindex)
8) splice(add,remove,replace);




*/

let name = ["avinash", "nilesh", "vishal", "akshay"];
console.log(name);
// push()
name.push("darshan");

console.log(name);

// pop ()
name.pop();
console.log(name);

// toString()
console.log(name.toString());

// concat ()

let firstname = ["avinash", "vishal", "nilesh"];
let lastname = ["rathod", "rathod", "rathod"];

let fullname = firstname.concat(lastname);
console.log(fullname);

// unshift() : add to start :
firstname.unshift("rathod");
console.log(firstname);

// shift() : delete start
firstname.shift();
console.log(firstname);

// slice ()
console.log(firstname.slice(1, 2));

// splice( add, remove,replace)

let numericalarr = [2, 3, 3, 4, 4, 9, 5];

// console.log(numericalarr);

// add element
console.log(numericalarr.splice(2, 0, 4));
// Delete element
numericalarr.splice(0, 1);
// replace ele
numericalarr.splice(0, 1, 9);
console.log(numericalarr);
