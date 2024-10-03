const sumAverage = (arr) => {
  let result;

  result = 0;
  for (let subArr of arr) {
    let sum = subArr.reduce((a, b) => a + b, 0);
    let average = sum / subArr.length;

    result += average;
  }

  result = Math.floor(result);

  return result;
};
