import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import InvoicesHeader from '../invoices/InvoicesHeader';
import Invoices from '../invoices/Invoices';

const Main = () => {
  const { filterInvoices } = useContext(AppContext);

  return (
    <main className="relative w-full h-full">
      <section className="pt-[83px] max-w-[1020px] w-full mx-auto">
        <InvoicesHeader />
        {filterInvoices?.length === 0 ? null : <Invoices />}
      </section>
    </main>
  );
};

export default Main;
