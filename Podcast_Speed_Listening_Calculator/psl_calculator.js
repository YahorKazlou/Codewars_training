function speedListen(audioLength, playSpeed) {
  const parts = audioLength.split(":");
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  const seconds = parseInt(parts[2], 10);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  const spedUpSeconds = Math.floor(totalSeconds / playSpeed);

  const newHours = Math.floor(spedUpSeconds / 3600);
  const newMinutes = Math.floor((spedUpSeconds % 3600) / 60);
  const newSeconds = spedUpSeconds % 60;

  const formattedTime =
    String(newHours).padStart(2, "0") +
    ":" +
    String(newMinutes).padStart(2, "0") +
    ":" +
    String(newSeconds).padStart(2, "0");

  return formattedTime;
}
