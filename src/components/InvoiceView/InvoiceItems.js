import React from 'react';
import InvoiceItem from './InvoiceItem';

const InvoiceItems = ({ items, total }) => {
  return (
    <div className="bg-white overflow-hidden mt-[32px] pt-[32px]">
      <table className="w-full">
        <thead className="hidden md:table-header-group">
          <tr>
            <th className="pl-[32px] pb-[32px] text-left">Item Name</th>
            <th className="text-center pb-[32px]">QTY.</th>
            <th className="text-left pb-[32px]">Price</th>
            <th className="pr-[32px] pb-[32px] text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <InvoiceItem
              key={index}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              total={item.total}
            />
          ))}
        </tbody>
        <tfoot className="bg-[#121212] transition text-white rounded-b-3xl">
          <tr>
            <th className="py-[32px] pl-[32px] text-left text-sm">
              Amount Due
            </th>
            <th className="hidden md:table-cell md:p-0"></th>
            <th className="hidden md:table-cell md:p-0"></th>
            <th className="py-[32px] pr-[32px] text-right font-bold text-3xl">
              ${total}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InvoiceItems;
