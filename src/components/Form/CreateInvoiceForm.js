import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context';
import { Formik, Form as FormikForm } from 'formik';
import Fields from '../Fields/Fields';
import { AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const initialValues = {
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientName: '',
  clientEmail: '',
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  createdAt: new Date(),
  paymentTerms: '30',
  description: '',
  items: [],
};

const dropdownOptions = [
  { name: 'Net 1 Day', value: 1 },
  { name: 'Net 7 Days', value: 7 },
  { name: 'Net 14 Days', value: 14 },
  { name: 'Net 30 Days', value: 30 },
];

const CreateInvoiceForm = () => {
  const { createInvoice } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const onHandleSubmit = values => {
    createInvoice(values, 'pending');
    navigate(`/` + location.search);
  };

  const onHandleDraftSubmit = values => {
    createInvoice(values, 'draft');
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onHandleSubmit}>
        {formik => (
          <FormikForm>
            <Fields />
            <button
              type="button"
              onClick={() => onHandleDraftSubmit(formik.values)}
            >
              Save as Draft
            </button>
            <button type="submit">Submit</button>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default CreateInvoiceForm;
