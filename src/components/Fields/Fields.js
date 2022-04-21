import React from 'react';
import Input from '../Input';
import Items from '../Items/Items';
import Select from './Select';
import DatePicker from './DatePicker';
import { dropdownOptions } from '../../utilities/initialValues';

const Fields = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 px-3 pb-5">
      <div className="flex flex-col gap-4">
        <fieldset>
          <legend className="mb-5 text-[12px] text-[#452da5] font-bold">
            Bill From
          </legend>
          <div className="flex flex-col gap-3">
            <Input
              type="text"
              label="Street Address"
              name="senderAddress.street"
            />
            <div className="flex gap-3">
              <Input type="text" label="City" name="senderAddress.city" />
              <Input
                type="text"
                label="Post Code"
                name="senderAddress.postCode"
              />
              <Input type="text" label="Country" name="senderAddress.country" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-5 text-[12px] text-[#452da5] font-bold">
            Bill To
          </legend>
          <Input type="text" label="Client Name" name="clientName" />
          <Input
            type="text"
            name="clientEmail"
            label="Client Email"
            placeholder="e.g. email@example.com"
          />
          <Input
            type="text"
            label="Street Address"
            name="clientAddress.street"
          />
          <div className="flex gap-3">
            <Input type="text" label="City" name="clientAddress.city" />
            <Input
              type="text"
              label="Post Code"
              name="clientAddress.postCode"
            />
            <Input type="text" label="Country" name="clientAddress.country" />
          </div>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <DatePicker label="Invoice Date" name="createdAt" />
              <Select
                label="Payment Terms"
                name="paymentTerms"
                options={dropdownOptions}
              />
            </div>
            <Input
              label="Description"
              name="description"
              placeholder="e.g. Graphic Design Service"
            />
          </div>
        </fieldset>
        <Items name="items" />
        <div className="flex mt-5 gap-2">{children}</div>
      </div>
    </div>
  );
};

export default Fields;
