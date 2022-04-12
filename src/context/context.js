import { createContext, useReducer, useState, useEffect } from 'react';
import { invoicesReducers } from '../store/reducers/invoicesReducers';
import generatePaymentDueDate from '../store/action/invoicesAction';
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

   useEffect(() => {
      localStorage.setItem('invoices', JSON.stringify(state.invoices));
   }, [state]);

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

   const createInvoice = (data, status) => {
      console.log(data.items);
      dispatch({
         type: 'CREATE_INVOICE',
         payload: {
            ...data,
            id: generateUniqueId(state.invoices),
            status: status,
            paymentDue: generatePaymentDueDate(
               data.createdAt,
               data.paymentTerms
            ),
            total: data.items.reduce((curr, acc) => (curr += acc.total), 0),
         },
      });
   };

   const updateInvoice = data => {
      dispatch({
         type: 'UPDATE_INVOICE',
         payload: data,
      });
   };

   const deleteInvoice = id => {
      dispatch({
         type: 'DELETE_INVOICE',
         payload: id,
      });
   };

   const markAsPaid = data => {
      dispatch({
         type: 'MARK_AS_PAID',
         payload: data,
      });
   };

   const onHandleFormOpen = () => setIsFormOpen(isFormOpen => !isFormOpen);
   const onHandlePopUpOpen = () => setPopUpOpen(isPopUpOpen => !isPopUpOpen);

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
            filteredInvoices,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
