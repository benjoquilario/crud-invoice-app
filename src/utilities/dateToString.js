// Function to make a readable date
export const dateToString = date => {
  const dateOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };

  const newDate = new Date(date).toLocaleString('en-GB', dateOptions);

  return newDate;
};
