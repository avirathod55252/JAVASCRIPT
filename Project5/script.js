// generate  a random color:

const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomcolor());
let intervalId;
const startchangecolor = function () {
  if (!intervalId) {
    intervalId = setInterval(changebgcolor, 1000);
  }
  function changebgcolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopchangecolor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startchangecolor);
document.querySelector("#stop").addEventListener("click", stopchangecolor);
