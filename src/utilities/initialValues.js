// Initial state formik values
const initialValues = {
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientName: '',
  clientEmail: '',
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  createdAt: new Date(),
  paymentTerms: '30',
  description: '',
  items: [],
};

// initial state formik update
const updateInitialValues = invoice => {
  return {
    id: invoice.id,
    senderAddress: invoice.senderAddress,
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    clientAddress: invoice.clientAddress,
    createdAt: new Date(invoice.createdAt),
    paymentTerms: invoice.paymentTerms,
    description: invoice.description,
    paymentDue: invoice.paymentDue,
    status: invoice.status,
    items: invoice.items,
    total: invoice.total,
  };
};

// Option in Filter
const optionsFilter = [
  {
    id: 0,
    value: 'paid',
    checked: false,
  },
  {
    id: 1,
    value: 'pending',
    checked: false,
  },
  {
    id: 2,
    value: 'draft',
    checked: false,
  },
];

// PaymentTerms options
const dropdownOptions = [
  { name: 'Net 1 Day', value: 1 },
  { name: 'Net 7 Days', value: 7 },
  { name: 'Net 14 Days', value: 14 },
  { name: 'Net 30 Days', value: 30 },
];

export { optionsFilter, dropdownOptions, initialValues, updateInitialValues };
