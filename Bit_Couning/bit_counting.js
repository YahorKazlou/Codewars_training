var countBits = function (n) {
  let count = 0;
  let bigIntN = BigInt(n);
  while (bigIntN > 0n) {
    count += Number(bigIntN % 2n);
    bigIntN >>= 1n;
  }
};
