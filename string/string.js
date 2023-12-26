/// create String :
let str = "avinashrathod";
console.log(str.length);
console.log(str[0]);

// template Literals :

let specialString = `This is a template literal `;
console.log(specialString);

let obj = {
  item: 3,
  price: 44,
};
let output = `item is ${obj.item} price is ${obj.price}`;
console.log(output);

// escape characters:
console.log("avinash\nrathod");
console.log("avinash\trathod");

let st = "avinash\trathod"; // \t count is an one so length is 14 :
console.log(st.length);

// String Methods:
// string are Immutable (cannot change:")
// There  are built in function to manipulate to string:
// 1) str.toUppercase()
// 2) str.toLowercase()
//  3) str.trim() // remove whitespaces:

let s = "avinash";
s.toUpperCase();
console.log(s); // original string not change beacuse print as it is:

let newstr = s.toUpperCase();
console.log(newstr);

let lowstr = newstr.toLowerCase();
console.log(lowstr);

// trim ()
let trimstr = "  avinash rathod          "; // starting and end space remove using trim();
console.log(trimstr.trim());

// string methods
// 4) str.slice(start,end);
//
let a = "avinash";
console.log(a.slice(0, 3));

// concat()

let str1 = "avinash";
let str2 = "rathod";
let res = str1.concat(str2);
console.log(res);

// replace()
let name = "hello";
console.log(name);
console.log(name.replace("h", "y"));

// str.charAt(idx)

let n = "avinash";
console.log(n.charAt(0));
for (let i = 0; i < n.length; i++) {
  console.log(n.charAt(i));
}

// practice  question :

// to create username like @username13
// input using prompt

let fullname = prompt("enter full name");
let username = "@" + fullname + fullname.length;
console.log(username);
