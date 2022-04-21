// Message when filtering invoices
const invoicesMessage = (num, filter) => {
  if (num === 0 && !filter) {
    return 'There are no invoices.';
  } else if (num === 1 && filter) {
    return `There are no ${filter}`;
  } else if (num === 1 && !filter) {
    return `There are is 1 invoice.`;
  } else if (num === 1 && filter) {
    return `There is 1 ${filter} invoice.`;
  } else if (!filter) {
    return `There are ${num} total invoices.`;
  } else {
    return `There are ${num} ${filter} invoices`;
  }
};

export default invoicesMessage;
