import React from 'react';
import Input from '../Input';
import Items from '../Items/Items';

const Fields = () => {
  return (
    <>
      <fieldset>
        <Input type="text" label="Street Address" name="senderAddress.street" />
        <Input type="text" label="Street Address" name="senderAddress.city" />
        <Input type="text" label="Post Code" name="senderAddress.postCode" />
        <Input type="text" label="Country" name="senderAddress.country" />
      </fieldset>
      <fieldset>
        <Input type="text" label="Client Name" name="clientName" />
        <Input
          type="text"
          name="clientEmail"
          placeholder="e.g. email@example.com"
        />
        <Input type="text" label="Street Address" name="clientAddress.street" />
        <Input type="text" label="City" name="clientAddress.city" />
        <Input type="text" label="Post Code" name="clientAddress.postCode" />
        <Input type="text" label="Country" name="clientAddress.country" />
      </fieldset>

      {/* <DatePicker label="Invoice Date" name="createdAt"/>
                        <Select label="Payment Terms" name="paymentTerms" options={dropdownOptions}/>
                        <Input label="Description" name="description" placeholder="e.g. Graphic Design Service"/> */}
      <Items name="items" />
    </>
  );
};

export default Fields;
