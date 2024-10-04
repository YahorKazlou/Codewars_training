function differenceInAges(ages) {
  const minAge = Math.min(...ages); // Находим самый младший возраст
  const maxAge = Math.max(...ages); // Находим самый старший возраст
  const difference = maxAge - minAge; // Считаем разницу

  return [minAge, maxAge, difference]; // Возвращаем новый массив
}
