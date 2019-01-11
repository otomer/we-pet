const formatAsHoursMinutes = minutes => {
  const num = minutes;
  const hours = num / 60;
  const floorHours = Math.floor(hours);
  const min = (hours - floorHours) * 60;
  const roundMinutes = Math.round(min);
  return `${floorHours === 0 ? '' : floorHours + ' hour(s)'}${
    roundMinutes !== 0 && floorHours !== 0 ? ' and ' : ''
  }${roundMinutes !== 0 ? roundMinutes + ' minute(s)' : ''}`;
};

const generateUpTo = (times, minutesGap) => {
  return Array.apply(null, { length: times }).map((value, index) => {
    const minutes = (index + 1) * minutesGap;
    const text = formatAsHoursMinutes(minutes);
    return { text: text, value: minutes };
  });
};

const formatAsSpeed = n => {
  if (n < 60) {
    return 'fast';
  } else if (n < 150) {
    return 'fair';
  }
  return 'slow';
};

export { formatAsHoursMinutes, generateUpTo, formatAsSpeed };
