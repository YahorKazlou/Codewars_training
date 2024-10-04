function bloodAlcoholContent(drinks, weight, sex, time) {
  const r = sex === "male" ? 0.73 : 0.66;

  const A = drinks.ounces * drinks.abv;

  const BAC = (A * 5.14 * r) / weight - 0.015 * time;
  console.log(BAC);
  return Math.max(0, parseFloat(BAC.toFixed(4)));
}
