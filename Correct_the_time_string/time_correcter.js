function timeCorrect(timestring) {
  console.log(timestring);
  if (timestring === null || timestring.trim() === "") {
    return timestring;
  }

  let isTimeRegexp = /^\d{2}:\d{2}:\d{2}$/;
  if (!isTimeRegexp.test(timestring)) {
    return null;
  }

  const timeParts = timestring.split(":");

  if (timeParts.length !== 3) {
    return null;
  }

  let [hours, minutes, seconds] = timeParts.map((part) => parseInt(part, 10));

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    return null;
  }

  if (seconds >= 60) {
    minutes += Math.floor(seconds / 60);
    seconds = seconds % 60;
  }

  if (minutes >= 60) {
    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;
  }

  if (hours >= 24) {
    hours = hours % 24;
  }

  return [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0"),
  ].join(":");
}
