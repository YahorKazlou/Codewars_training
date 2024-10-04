function findOddDigits(n, k) {
  const strN = n.toString();
  const oddDigits = [];

  for (let char of strN) {
    if (char % 2 !== 0) {
      oddDigits.push(char);
    }

    if (oddDigits.length === k) {
      break;
    }
  }

  if (k === 0 || k > strN.length || k > oddDigits.length) {
    return 0;
  }

  return parseInt(oddDigits.slice(0, k).join(""));
}
