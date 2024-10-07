function args(cmd) {
  cmd = cmd.trim();
  const args = [];
  let currentArg = "";
  let inQuotes = false;

  for (const char of cmd) {
    if (char === '"' || char === "'") {
      inQuotes = !inQuotes;
      currentArg += char;
    } else if (inQuotes) {
      currentArg += char;
    } else if ("&;>|".includes(char)) {
      break;
    } else if (char === " ") {
      if (currentArg) {
        args.push(currentArg);
        currentArg = "";
      }
    } else {
      currentArg += char;
    }
  }

  if (currentArg) {
    args.push(currentArg);
  }

  return args;
}
