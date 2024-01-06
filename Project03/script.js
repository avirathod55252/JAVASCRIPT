const clock = document.getElementById("clock");
const dates = document.querySelector("#date");

// const clock = document.querySelector("#clock");

// console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  dates.innerHTML = date.toLocaleDateString();

  // clock.innerHTML = date.toLocaleDateString();
}, 1000);
