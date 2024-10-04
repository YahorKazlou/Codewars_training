function valAndUnits(s) {
  const regex = /^\s*(-?\d+\.?\d*)\s*([a-zA-Z%]*)\s*$/;
  const match = s.match(regex);

  if (match) {
    const value = Number(match[1]);
    const units = match[2];

    return {
      val: value,
      units: units,
    };
  }

  return null;
}
