import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { Formik, Form as FormikForm } from 'formik';
import Input from '../Input';
import Items from '../Items/Items';

const EditInvoiceForm = ({ invoice }) => {
   const { updateInvoice, isFormOpen, setIsformOpen } = useContext(AppContext);

   const onHandleSubmit = values => {
      updateInvoice(values, 'pending');
      console.log(values);
   };

   return (
      <div>
         {isFormOpen && (
            <Formik
               initialValues={{
                  id: invoice.id,
                  senderAddress: invoice.senderAddress,
                  clientName: invoice.clientName,
                  clientEmail: invoice.clientEmail,
                  clientAddress: invoice.clientAddress,
                  createdAt: new Date(invoice.createdAt),
                  paymentTerms: invoice.paymentTerms,
                  description: invoice.description,
                  paymentDue: invoice.paymentDue,
                  status: invoice.status,
                  items: invoice.items,
                  total: invoice.total,
               }}
               onSubmit={onHandleSubmit}
            >
               {formik => (
                  <FormikForm>
                     <h1>
                        Edit <span>#</span>
                        {invoice.id}
                     </h1>
                     <Input
                        type="text"
                        label="Street Address"
                        name="senderAddress.street"
                     />
                     <Input
                        type="text"
                        label="Street Address"
                        name="senderAddress.city"
                     />
                     <Input
                        type="text"
                        label="Post Code"
                        name="senderAddress.postCode"
                     />
                     <Input
                        type="text"
                        label="Country"
                        name="senderAddress.country"
                     />
                     <Input type="text" label="Client Name" name="clientName" />
                     <Input
                        type="text"
                        name="clientEmail"
                        placeholder="e.g. email@example.com"
                     />

                     <Input
                        type="text"
                        label="Street Address"
                        name="clientAddress.street"
                     />
                     <Input
                        type="text"
                        label="City"
                        name="clientAddress.city"
                     />
                     <Input
                        type="text"
                        label="Post Code"
                        name="clientAddress.postCode"
                     />
                     <Input
                        type="text"
                        label="Country"
                        name="clientAddress.country"
                     />
                     <Items name="items" />
                     <div>
                        <button type="button" secondary>
                           Cancel
                        </button>
                        <button type="submit">Save Changes</button>
                     </div>
                  </FormikForm>
               )}
            </Formik>
         )}
      </div>
   );
};

export default EditInvoiceForm;
