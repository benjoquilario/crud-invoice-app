import * as Yup from 'yup';

const message = '- All fields must be filled';
const noInputMessage = '- Invalid input.';
const yupString = Yup.string().required(message);
const yupNumber = Yup.number().typeError(noInputMessage).required(message);

//Yup for formik to check if the user not inputing a value
export const validationSchema = Yup.object().shape({
  senderAddress: Yup.object().shape({
    street: yupString,
    city: yupString,
    postCode: yupString,
    country: yupString,
  }),
  clientName: yupString,
  clientEmail: yupString,
  clientAddress: Yup.object().shape({
    street: yupString,
    city: yupString,
    postCode: yupString,
    country: yupString,
  }),
  createdAt: Yup.date().required(message),
  paymentTerms: yupString,
  description: yupString,
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: yupString,
        quantity: yupNumber,
        price: yupNumber,
        total: Yup.number(),
      })
    )
    .min(1, '- An item must be added.'),
});
