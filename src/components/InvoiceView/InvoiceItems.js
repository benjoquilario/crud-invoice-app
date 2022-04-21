import React from 'react';
import InvoiceItem from './InvoiceItem';

const InvoiceItems = ({ items, total }) => (
  <div className="bg-white overflow-hidden mt-[32px] pt-[32px] rounded-b-3xl">
    <table className="w-full">
      <thead className="hidden md:table-header-group text-[#888eb0] font-normal">
        <tr>
          <th className="pl-[32px] pb-[32px] text-left">Item Name</th>
          <th className="text-center pb-[32px]">QTY.</th>
          <th className="text-left pb-[32px]">Price</th>
          <th className="pr-[32px] pb-[32px] text-right">Total</th>
        </tr>
      </thead>
      <tbody className="font-semibold text-[13px]">
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
      <tfoot className="bg-[#121212] transition text-white">
        <tr>
          <th className="py-[32px] pl-[32px] text-left text-xs md:text-sm">
            Amount Due
          </th>
          <th className="hidden md:table-cell md:p-0"></th>
          <th className="hidden md:table-cell md:p-0"></th>
          <th className="py-[32px] pr-[32px] text-right font-bold text-base md:text-3xl">
            ${total}
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default InvoiceItems;
