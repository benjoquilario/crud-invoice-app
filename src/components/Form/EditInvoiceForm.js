import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { Formik, Form as FormikForm } from 'formik';
import Fields from '../Fields/Fields';

const EditInvoiceForm = ({ invoice }) => {
  const { updateInvoice, isFormOpen } = useContext(AppContext);

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
              <Fields />
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
