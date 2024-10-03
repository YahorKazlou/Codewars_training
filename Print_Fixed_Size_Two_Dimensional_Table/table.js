function buildTableText(row, column, character) {
  let table = Array.from({ length: 4 }, () => Array(4).fill(" "));

  table[row][column] = character;

  let output = "---------\n";
  for (let i = 0; i < 4; i++) {
    output += "|" + table[i].join("|") + "|" + "\n";
    output += "---------\n";
  }
  console.log(output);
  return output;
}
