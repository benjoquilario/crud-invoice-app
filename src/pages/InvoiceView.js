import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditInvoiceForm from '../components/Form/EditInvoiceForm';
import InvoicesDelete from '../components/invoices/InvoicesDelete';
import { AppContext } from '../context/context';

const InvoiceView = () => {
   const { invoices, onHandleFormOpen, onHandlePopUpOpen, markAsPaid } =
      useContext(AppContext);
   const { id } = useParams();

   const [invoice, setInvoice] = useState(null);

   useEffect(() => {
      setInvoice(invoices.find(item => item.id === id));
   }, [id, invoice, invoices]);

   return (
      <div>
         {invoice && (
            <div>
               {invoice.clientName}
               {invoice.status}
               <button onClick={() => markAsPaid(invoice)}>Mark As Paid</button>
               <EditInvoiceForm invoice={invoice} />
               <button onClick={onHandleFormOpen}>Open Edit</button>
               <button onClick={onHandlePopUpOpen}>Delete</button>
               <InvoicesDelete id={invoice.id} />
            </div>
         )}
      </div>
   );
};

export default InvoiceView;
