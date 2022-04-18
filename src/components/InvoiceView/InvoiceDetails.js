import React from 'react';
import InvoiceItems from './InvoiceItems';
import { dateToString } from '../../utilities/dateToString';

const InvoiceDetails = ({
  id,
  clientName,
  clientEmail,
  description,
  senderAddress,
  items,
  total,
  createdAt,
  paymentDue,
  clientAddress,
}) => {
  return (
    <div className="px-4 md:px-6 py-12">
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between">
        <div>
          <h1 className="text-[#121212] text-lg font-bold">#{id}</h1>
          <span className="text-sm">{description}</span>
        </div>
        <address className="flex flex-col text-left md:text-right text-[#888eb0] text-sm not-italic">
          <span>{senderAddress.street}</span>
          <span>{senderAddress.city}</span>
          <span>{senderAddress.postCode}</span>
          <span>{senderAddress.country}</span>
        </address>
      </div>
      <div className="mt-[23px] grid grid-cols-2 md:flex md:justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-[#888eb0] text-xs">Invoice Date</span>
            <span className="font-bold">{dateToString(createdAt)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#888eb0] text-xs">Payment Due</span>
            <span className="font-bold">{dateToString(paymentDue)}</span>
          </div>
        </div>
        <div>
          <span className="text-[#888eb0] text-xs">Bill To</span>
          <h2 className="font-bold">{clientName}</h2>
          <address className="flex flex-col text-[#888eb0] text-sm not-italic">
            <span>{clientAddress.street}</span>
            <span>{clientAddress.city}</span>
            <span>{clientAddress.postCode}</span>
            <span>{clientAddress.country}</span>
          </address>
        </div>
        <div>
          <span className="text-[#888eb0] text-xs">Sent To</span>
          <h3 className="font-bold">{clientEmail}</h3>
        </div>
      </div>
      <InvoiceItems items={items} total={total} />
    </div>
  );
};

export default InvoiceDetails;
