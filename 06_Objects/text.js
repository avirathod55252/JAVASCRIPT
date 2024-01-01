// Object literals :

const mysum = Symbol("key1"); // Symbol key access in object

const JsUser = {
  name: "avinash",
  age: 22,
  [mysum]: "myke1",
  location: "Beed",
  email: "avi@gmail.com",
};

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mysum]);
console.log(JsUser);

const tinderUser = {};

tinderUser.id = 33;
tinderUser.name = "avinash";
// console.log(tinderUser);

const regularUser = {
  email: "avi@gmail.com",
  fullname: {
    userfullname: {
      firstname: "avinash",
      lastname: "rathod",
    },
  },
};

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

//
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 2: "c", 4: "c" };

const obj4 = { 5: "a", 7: "c" };

const obj3 = Object.assign({}, obj1, obj2, obj4);
console.log(obj3);

//

const users = [
  {
    id: 1,
    email: "avi@gmail.com",
  },
  {
    id: 3,
    email: "avinash@gmail.com",
  },
];

users[1].email;
console.log(users);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.values(users));

console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty("1"));
