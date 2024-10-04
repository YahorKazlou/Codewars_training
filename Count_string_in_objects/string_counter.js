function strCount(obj) {
  let count = 0;

  function countStrings(value) {
    if (typeof value === "string") {
      count++;
    } else if (typeof value === "object" && value !== null) {
      for (let key in value) {
        countStrings(value[key]);
      }
    }
  }

  countStrings(obj);
  return count;
}
