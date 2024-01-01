// give me count of present in names :

function vowelscount(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
let val = vowelscount("avinash");
console.log(val);
