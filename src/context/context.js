import { createContext, useReducer, useState, useEffect } from 'react';
import { invoicesReducers } from '../store/reducers/invoicesReducers';
import generatePaymentDueDate from '../utilities/generatePaymentDueDate';
import data from '../data/data.json';
import generateUniqueId from '../utilities/generateId';

const getInvoicesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('invoices'));
};

// Initial state values
const initialState = {
  invoices: getInvoicesFromLocalStorage() || data,
  isFormOpen: false,
  isPopUpOpen: false,
};

export const AppContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(invoicesReducers, initialState);
  const [isFormOpen, setIsFormOpen] = useState(state.isFormOpen);
  const [isPopUpOpen, setPopUpOpen] = useState(state.isPopUpIsOpen);
  const [filter, setFilter] = useState(null);
  const [filteredInvoices, setFilteredInvoices] = useState(state.invoices);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoints = 768;

  const onHandleFormOpen = () => setIsFormOpen(isFormOpen => !isFormOpen);
  const onHandlePopUpOpen = () => setPopUpOpen(isPopUpOpen => !isPopUpOpen);

  // Resizing the innerWidth of the page to change content when breakpoint is met
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  });

  // Store data in the local storage every time state.invoice dependency array has changed
  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(state.invoices));
  }, [state.invoices]);

  // Setting the invoice state when user change the filter.
  useEffect(() => {
    if (state.invoices && filter) {
      setFilteredInvoices(
        state.invoices.filter(invoice => {
          return invoice.status === filter;
        })
      );
    } else {
      setFilteredInvoices(state.invoices);
    }
  }, [state.invoices, filter]);

  /**
   *  Function for creating a invoice data
   * @param {object} data invoices data when user created a invoice
   * @param {string} status String with the state status data ('pending', 'paid', 'draft')
   */
  const createInvoice = (data, status) => {
    console.log(data);
    dispatch({
      type: 'CREATE_INVOICE',
      payload: {
        ...data,
        id: generateUniqueId(state.invoices),
        status: status,
        paymentDue: generatePaymentDueDate(data.createdAt, data.paymentTerms),
        total: data.items.reduce((curr, acc) => (curr += acc.total), 0),
      },
    });
  };

  /**
   * Function for updating/editing invoice
   * @param {object} data updating invoices data when user edit a invoice
   */
  const updateInvoice = data => {
    dispatch({
      type: 'UPDATE_INVOICE',
      payload: data,
    });
  };

  /**
   * Function for deleting a invoice
   * @param {invoice id} id with id state of generateId function
   */
  const deleteInvoice = id => {
    dispatch({
      type: 'DELETE_INVOICE',
      payload: id,
    });
  };

  /**
   * Function for updating the status of invoice
   * @param {object} data invoices data to find what we want to update status
   */
  const markAsPaid = data => {
    dispatch({
      type: 'MARK_AS_PAID',
      payload: data,
    });
  };

  return (
    <AppContext.Provider
      value={{
        invoices: state.invoices,
        isFormOpen,
        isPopUpOpen,
        onHandleFormOpen,
        onHandlePopUpOpen,
        createInvoice,
        updateInvoice,
        deleteInvoice,
        markAsPaid,
        setFilter,
        filter,
        filteredInvoices,
        width,
        breakpoints,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
