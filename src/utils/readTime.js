const readTime = (rawTime) => {
  const hours = Math.floor(rawTime / 360000);
  const minutes = Math.floor((rawTime % 360000) / 6000);
  const seconds = Math.floor((rawTime % 6000) / 100);

  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export default readTime;
