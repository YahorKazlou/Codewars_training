function backToTheFuture(str) {
  const monthToReturn = {
    January: { month: "October", days: 31 },
    February: { month: "March", days: 31 },
    March: { month: "November", days: 30 },
    April: { month: "July", days: 31 },
    September: { month: "December", days: 31 },
  };

  if (!str) {
    return "Doc, I can't get back to the future!";
  }

  const [dayOfWeek, day, month] = str.split(" ");

  if (monthToReturn[month]) {
    const returnMonth = monthToReturn[month].month;
    const returnDays = monthToReturn[month].days;

    if (day > returnDays) {
      return "Doc, I can't get back to the future!";
    }

    return `I'm leaving here on ${dayOfWeek} ${day} ${returnMonth}!`;
  }

  return "Doc, I can't get back to the future!";
}
