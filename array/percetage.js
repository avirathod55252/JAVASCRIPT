let arr = [250, 645, 300, 900, 50];

for (let i = 0; i < arr.length; i++) {
  // console.log("before offer main price:");
  console.log(arr[i]);
  let offer = arr[i] / 10;
  arr[i] -= offer;
  // console.log("after apply offer: Prices are :");
}
console.log(arr);
