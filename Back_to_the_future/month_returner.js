function backToTheFuture(str) {
  const monthToReturn = {
    January: "October",
    April: "July",
    September: "December",
    February: ["March", "November"],
  };

  if (!str) {
    return "Doc, I can't get back to the future!";
  }

  const [dayOfWeek, day, month] = str.split(" ");

  if (monthToReturn[month]) {
    const returnMonth = monthToReturn[month];
    const formattedReturnMonth = Array.isArray(returnMonth)
      ? returnMonth[1]
      : returnMonth;
    return `I'm leaving here on ${dayOfWeek} ${day} ${formattedReturnMonth}!`;
  }

  return "Doc, I can't get back to the future!";
}
