const formatTimeToHumanReadable = (sec) => {
  if (sec < 0) sec = -sec;
  if (sec == 0) return "now";
  const time = {
    year: Math.floor(sec / 31536000),
    day: Math.floor(sec / 86400) % 365,
    hour: Math.floor(sec / 3600) % 24,
    minute: Math.floor(sec / 60) % 60,
    second: Math.floor(sec) % 60,
  };
  return Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
    .join(", ");
};
