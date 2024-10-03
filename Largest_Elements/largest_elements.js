function largest(n, array) {
  const sortedArr = array.sort((a, b) => b - a);
  return sortedArr.slice(0, n).sort((a, b) => a - b);
}
