import * as Yup from 'yup';
import { EmailRegEx, aadhaarRegExp } from './RegEx';
import { ValidationStrings } from './Strings';
import { phoneRegExp } from './RegEx';

export const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email(ValidationStrings.invalidMail)
    .required(ValidationStrings.required)
    .matches(EmailRegEx, ValidationStrings.invalidMail),
  password: Yup.string()
    .required(ValidationStrings.required)
    .min(8, ValidationStrings.min),
});

export const ProviderSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required Field'),
  amount: Yup.number()
    .typeError('Please enter a valid amount.')
    .required('Required Field')
    .positive("Amount can't start with a minus"),
});

export const NumberSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required Field'),
});

export const AgentOnBoardSchema = Yup.object().shape({
  agentName: Yup.string()
    .required(ValidationStrings.required)
    .min(3, ValidationStrings.min3),
  email: Yup.string()
    .email(ValidationStrings.invalidMail)
    .required(ValidationStrings.required)
    .matches(EmailRegEx, ValidationStrings.invalidMail),
  panNumber: Yup.string().required(ValidationStrings.required),
  aadhaarNumber: Yup.string().required(ValidationStrings.required),
  shopName: Yup.string().required(ValidationStrings.required),
  gstNumber: Yup.string().required(ValidationStrings.required),
  address: Yup.string().required(ValidationStrings.required),
  cityName: Yup.string().required(ValidationStrings.required),
  districtName: Yup.string().required(ValidationStrings.required),
  pinCode: Yup.string().required(ValidationStrings.required),
});

export const BalanceEnquirySchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required Field'),
  aadhar: Yup.string()
    .matches(aadhaarRegExp, 'Aadhar number is not valid')
    .required('Required Field'),
});
