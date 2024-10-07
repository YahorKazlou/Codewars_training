function changeTime(input, delta) {
  let [hours, minutes] = input.split(":").map(Number);

  minutes += delta;

  if (minutes >= 60) {
    hours += Math.floor(minutes / 60);
    minutes %= 60;
  } else if (minutes < 0) {
    hours -= Math.ceil(Math.abs(minutes) / 60);
    minutes = (minutes + 60) % 60;
  }

  hours = (hours + 24) % 24;

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;

  return formattedTime;
}
