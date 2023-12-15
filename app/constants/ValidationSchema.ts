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
    .matches(phoneRegExp, ValidationStrings.phoneInvalid)
    .required(ValidationStrings.required),
  amount: Yup.number()
    .typeError(ValidationStrings.invalidAmount)
    .required(ValidationStrings.required)
    .positive(ValidationStrings.negativeAmount),
});

export const NumberSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, ValidationStrings.phoneInvalid)
    .required(ValidationStrings.required),
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
    .matches(phoneRegExp, ValidationStrings.phoneInvalid)
    .required(ValidationStrings.required),
  aadhar: Yup.string()
    .matches(aadhaarRegExp, ValidationStrings.aadhaarInvalid)
    .required(ValidationStrings.required),
});

export const UpdatePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required(ValidationStrings.required)
    .min(8, ValidationStrings.min),
  newPassword: Yup.string()
    .required(ValidationStrings.required)
    .min(8, ValidationStrings.min),
  confirmPassword: Yup.string()
    .required(ValidationStrings.required)
    .oneOf([Yup.ref('newPassword')], ValidationStrings.noMatch),
});

export const PersonalInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(ValidationStrings.required)
    .min(3, ValidationStrings.min3),
  lastName: Yup.string()
    .required(ValidationStrings.required)
    .min(3, ValidationStrings.min3),
  email: Yup.string()
    .email(ValidationStrings.invalidMail)
    .required(ValidationStrings.required)
    .matches(EmailRegEx, ValidationStrings.invalidMail),
});

export const UpiCollectionSchema = Yup.object().shape({
  upiId: Yup.string().required(ValidationStrings.required),
  amount: Yup.number()
    .typeError(ValidationStrings.invalidAmount)
    .required(ValidationStrings.required)
    .positive(ValidationStrings.negativeAmount),
  remark: Yup.string().required(ValidationStrings.required),
});

export const FundRequestSchema =Yup.object().shape({
  amount: Yup.number()
  .typeError(ValidationStrings.invalidAmount)
  .required(ValidationStrings.required)
  .positive(ValidationStrings.negativeAmount),
  utr: Yup.string()
  .required(ValidationStrings.required)
  
})
