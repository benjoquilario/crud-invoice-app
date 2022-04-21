import React from 'react';
import { Link } from 'react-router-dom';
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
}) => (
  <div className="px-4 md:px-6 pt-12 pb-7">
    <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between">
      <div>
        <Link
          to="/"
          className="flex gap-3 items-center mt-[-31px] text-[12px] text-[#121212] mb-4"
          aria-label="go back to homepage"
        >
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-[10px]">Go Back</span>
        </Link>
        <h1 className="text-[#121212] text-lg font-bold">#{id}</h1>
        <span className="text-sm text-[#888eb0]">{description}</span>
      </div>
      <address className="flex flex-col text-left md:text-right text-[#888eb0] text-[11px] md:text-[13px] not-italic leading-relaxed">
        <span>{senderAddress.street}</span>
        <span>{senderAddress.city}</span>
        <span>{senderAddress.postCode}</span>
        <span>{senderAddress.country}</span>
      </address>
    </div>
    <div className="mt-[23px] grid grid-cols-2 gap-2 md:flex md:justify-between">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-[#888eb0] text-xs">Invoice Date</span>
          <span className="font-bold text-sm md:text-base">
            {dateToString(createdAt)}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#888eb0] text-xs">Payment Due</span>
          <span className="font-bold text-sm md:text-base">
            {dateToString(paymentDue)}
          </span>
        </div>
      </div>
      <div>
        <span className="text-[#888eb0] text-xs">Bill To</span>
        <h2 className="font-bold text-sm md:text-base">{clientName}</h2>
        <address className="flex flex-col text-[#888eb0] text-[12px] md:text-[14px] not-italic leading-relaxed">
          <span>{clientAddress.street}</span>
          <span>{clientAddress.city}</span>
          <span>{clientAddress.postCode}</span>
          <span>{clientAddress.country}</span>
        </address>
      </div>
      <div className="col-span-full">
        <span className="text-[#888eb0] text-xs">Sent To</span>
        <h3 className="font-bold text-sm md:text-base">{clientEmail}</h3>
      </div>
    </div>
    <InvoiceItems items={items} total={total} />
  </div>
);

export default InvoiceDetails;
