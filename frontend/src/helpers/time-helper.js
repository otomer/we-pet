const formatAsHoursMinutes = minutes => {
  const num = minutes;
  const hours = num / 60;
  const floorHours = Math.floor(hours);
  const min = (hours - floorHours) * 60;
  const roundMinutes = Math.round(min);
  return floorHours + ' hour(s) and ' + roundMinutes + ' minute(s)';
};

export { formatAsHoursMinutes };
