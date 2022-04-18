export const dateToString = date => {
  const displayOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };

  const newDate = new Date(date).toLocaleString('en-GB', displayOptions);

  return newDate;
};
