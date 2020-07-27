export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const convertToDateFormat = date => {
  const newDate = new Date(date);
  return `${newDate.getDate()} ${
    monthNames[newDate.getMonth()]
  } ${newDate.getFullYear()}`;
};
