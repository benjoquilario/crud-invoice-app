import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditInvoiceForm from '../components/Form/EditInvoiceForm';
import InvoicesDelete from '../components/invoices/InvoicesDelete';
import InvoiceAction from '../components/InvoiceView/InvoiceAction';
import InvoiceDetails from '../components/InvoiceView/InvoiceDetails';
import InvoiceHeader from '../components/InvoiceView/InvoiceHeader';
import Header from '../components/Layout/Header';
import { AppContext } from '../context/context';

const InvoiceView = () => {
  const { invoices, width, breakpoints } = useContext(AppContext);
  const { id } = useParams();

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    setInvoice(invoices.find(item => item.id === id));
  }, [id, invoice, invoices]);

  return (
    <section className="pt-[83px] max-w-[1020px] w-full mx-auto">
      <Header />
      {invoice && (
        <>
          <div className="mt-[-2px] md:mt-[30px] rounded-[12px]">
            <EditInvoiceForm invoice={invoice} />
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
            <InvoicesDelete id={invoice.id} />
          </div>
          {width < breakpoints && (
            <InvoiceAction status={invoice.status} invoice={invoice} />
          )}
        </>
      )}
    </section>
  );
};

export default InvoiceView;
