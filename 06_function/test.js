// function calculatesum(...num1) {
//   return num1;
// }
// console.log(calculatesum(200, 400, 444));

// function calculatesum2(val1, val2, ...num1) {
//   return num1;
// }
// console.log(calculatesum2(100, 200, 300, 400));
// console.log(calculatesum2.val1);

// scope :

// let a = 444;
// var c = 199;
// const b = 33;
// if (true) {
//   let a = 10;
//   const b = 8;
//   var c = 999;
// }
// console.log(a);
// console.log(c);
// console.log(b);

// console.log(addone(2));
// function addone(num) {
//   return num + 1;
// }

// // console.log(addtow(2)); // not use before function
// const addtow = function (num) {
//   return num + 2;
// };

// console.log(addtow(3)); // used bewlow

/// these keyword :

const user = {
  username: "avinash",
  price: 4444,
  welcomemessage: function () {
    console.log(`${this.username} welcome to website`);
    // console.log(this);
  },
};

// user.welcomemessage();
// user.username = "vishal";
// user.welcomemessage();
// user.welcomemessage(this.user);
// console.log(this);

// function chai() {
//   let name = "avinash";
//   console.log(this);
//   console.log(this.name); // undefined
// }
// chai(); // node environment : run

// arrow function with this

const chai = () => {
  let username = "avi";
  console.log(this.username);
  console.log(this);
};
chai();

const addtwo = (num1, num2) => 4 + 4;
console.log(addtwo());

const addtwoo = (num1, num2) => 3 * 3;
console.log(addtwoo());

const add = (num1, num2) => ({ username: "avinash" });
console.log(add());
