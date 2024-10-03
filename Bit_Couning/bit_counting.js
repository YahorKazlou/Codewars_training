var countBits = function (n) {
  let count = 0;

  while (Math.abs(n)) {
    count += n & 1;
    n >>= 1;
  }

  return count;
};
