function sumAverage(array) {
  let totalSum = 0;

  for (let subArr of array) {
    let sum = subArr.reduce((a, b) => a + b, 0);
    let average = sum / subArr.length;

    totalSum += average;
  }

  return Math.floor(totalSum);
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
];
console.log(sumAverage(arr));
