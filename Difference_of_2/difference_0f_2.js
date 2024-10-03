function twosDifference(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const num1 = input[i];

    if (input.includes(num1 + 2)) {
      result.push([num1, num1 + 2]);
    }
  }

  result.sort((a, b) => a[0] - b[0]);
  return result;
}
