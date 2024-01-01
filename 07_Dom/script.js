alert();
console.log("hello");

let a = document.getElementById("header");
console.log(a);

let b = document.getElementsByClassName("heading");
console.log(b);

let c = document.getElementsByTagName("p");
console.log(c);

function print() {
  var name = document.form1.name.value;
  alert("welcome" + name);
}
function getcube() {
  var number = document.getElementById("number").value;
  alert(number * number * number);
}
