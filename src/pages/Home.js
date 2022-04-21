import React, { useContext } from 'react';
import InvoicesHeader from '../components/invoices/InvoicesHeader';
import Invoices from '../components/invoices/Invoices';
import { AppContext } from '../context/context';

const Home = () => {
  const { filterInvoices } = useContext(AppContext);

  return (
    <div className="min-h-screen">
      <main>
        <section className="pt-[83px] max-w-[1020px] w-full mx-auto">
          <InvoicesHeader />
          {filterInvoices?.length === 0 ? null : <Invoices />}
        </section>
      </main>
    </div>
  );
};

export default Home;
