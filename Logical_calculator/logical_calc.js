function logicalCalc(array, op) {
  if (op === "AND") {
    return array.reduce((acc, curr) => acc && curr, true);
  } else if (op === "OR") {
    return array.reduce((acc, curr) => acc || curr, false);
  } else if (op === "XOR") {
    return array.reduce((acc, curr) => acc !== curr, false);
  } else {
    throw new Error("Unknown operator");
  }
}
