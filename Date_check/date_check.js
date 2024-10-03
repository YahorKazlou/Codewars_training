function isJubilee(year) {
  if (year < 1900 || year > 2099) {
    return false;
  }

  const date = new Date(year, 6, 25);

  return date.getDay() === 0;
}
