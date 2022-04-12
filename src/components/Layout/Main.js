import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import InvoiceFilter from '../invoices/InvoiceFilter';
import Invoices from '../invoices/Invoices';
import CreateInvoiceForm from '../Form/CreateInvoiceForm';

const Main = () => {
   const { filterInvoices, isFormOpen } = useContext(AppContext);

   return (
      <main className="relative w-full h-full">
         <section className="pt-[83px] max-w-[730px] w-full mx-auto">
            <InvoiceFilter />
            {filterInvoices?.length === 0 ? null : <Invoices />}
            {isFormOpen && <CreateInvoiceForm />}
         </section>
      </main>
   );
};

export default Main;
