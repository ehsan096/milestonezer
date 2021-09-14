function perfectSquare(n, arr) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let y = Math.sqrt(arr[i]);

    // If arr[i] is a perfect square
    if (Math.floor(y) == Math.ceil(y)) {
      sum += arr[i];
    }
  }
  return sum;
}

let arr = [1, 2, 9, 10];
let n = arr.length;

console.log(perfectSquare(n, arr));
