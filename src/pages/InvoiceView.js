import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import UpdateInvoiceForm from '../components/Form/UpdateInvoiceForm';
import InvoiceDelete from '../components/InvoiceView/InvoiceDelete';
import InvoiceAction from '../components/InvoiceView/InvoiceAction';
import InvoiceDetails from '../components/InvoiceView/InvoiceDetails';
import InvoiceHeader from '../components/InvoiceView/InvoiceHeader';
import { AppContext } from '../context/context';
import { invoiceViewVariant } from '../utilities/framerVariants';
import Backdrop from '../components/Backdrop/Backdrop';

const InvoiceView = () => {
  const { invoices, width, breakpoints, isFormOpen, onHandleFormOpen } =
    useContext(AppContext);
  const { id } = useParams();

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    setInvoice(invoices.find(item => item.id === id));
  }, [id, invoice, invoices]);

  // Set the document title with invoice id
  useEffect(() => {
    document.title = `Invoice | ${id}`;
  }, [invoice, id]);

  // When isFormOpen body overflow will be hidden Pressing Escape Keyword will set the isFormOpen to False
  // Removing the event listener in the return function in order to avoid memory leak
  useEffect(() => {
    isFormOpen && (document.body.style.overflow = 'hidden');

    /**
     * Function to hide the form component
     */
    const focusTrap = event => {
      if (event.key === 'Escape') onHandleFormOpen();
      if (event.key !== 'Tab') return;
    };

    document.addEventListener('keydown', focusTrap);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', focusTrap);
    };
  }, [isFormOpen, onHandleFormOpen]);

  return (
    <main>
      <AnimatePresence>
        <motion.section
          variants={invoiceViewVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="pt-[83px] max-w-[1020px] w-full mx-auto"
        >
          {invoice && (
            <>
              <div className="mt-[-2px] md:mt-[30px] rounded-[12px]">
                <UpdateInvoiceForm invoice={invoice} />
                <InvoiceHeader status={invoice.status} invoice={invoice} />
                <InvoiceDetails
                  id={invoice.id}
                  clientName={invoice.clientName}
                  clientEmail={invoice.clientEmail}
                  description={invoice.description}
                  senderAddress={invoice.senderAddress}
                  items={invoice.items}
                  total={invoice.total}
                  createdAt={invoice.createdAt}
                  paymentDue={invoice.paymentDue}
                  clientAddress={invoice.clientAddress}
                />
                <InvoiceDelete id={invoice.id} />
              </div>
              {width < breakpoints && (
                <InvoiceAction status={invoice.status} invoice={invoice} />
              )}
            </>
          )}
          {isFormOpen && <Backdrop />}
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export default InvoiceView;
