import * as Yup from 'yup';
import {
  EmailRegEx,
  PersonalPanRegExp,
  aadhaarRegExp,
  phoneRegExp,
} from './RegEx';
import { ValidationStrings } from './Strings';

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
  aadhaar: Yup.string()
    .matches(aadhaarRegExp, ValidationStrings.aadhaarInvalid)
    .required(ValidationStrings.required),
  amount: Yup.number()
    .typeError(ValidationStrings.invalidAmount)
    .required(ValidationStrings.required)
    .min(1, ValidationStrings.amountGreaterThanZero),
});

export const SchemaBalanceEnquiry = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, ValidationStrings.phoneInvalid)
    .required(ValidationStrings.required),
  aadhaar: Yup.string()
    .matches(aadhaarRegExp, ValidationStrings.aadhaarInvalid)
    .required(ValidationStrings.required),
});

export const UpdatePasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email(ValidationStrings.invalidMail)
    .required(ValidationStrings.required)
    .matches(EmailRegEx, ValidationStrings.invalidMail),
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

export const FundRequestSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError(ValidationStrings.invalidAmount)
    .required(ValidationStrings.required)
    .positive(ValidationStrings.negativeAmount),
  utr: Yup.string().required(ValidationStrings.required),
});

export const MoveToWalletSchema = Yup.object().shape({
  password: Yup.string()
    .required(ValidationStrings.required)
    .min(8, ValidationStrings.min),
  amount: Yup.number()
    .typeError(ValidationStrings.invalidAmount)
    .required(ValidationStrings.required)
    .positive(ValidationStrings.negativeAmount),
  remark: Yup.string().required(ValidationStrings.required),
});

export const BeneficiarySchema = Yup.object().shape({
  ifsc: Yup.string().required(ValidationStrings.required),
  accountNumber: Yup.string().required(ValidationStrings.required),
  beneficiaryName: Yup.string().required(ValidationStrings.required),
});

export const KYCSchema = Yup.object().shape({
  name: Yup.string()
    .required(ValidationStrings.required)
    .min(3, ValidationStrings.min3),
  email: Yup.string()
    .email(ValidationStrings.invalidMail)
    .required(ValidationStrings.required)
    .matches(EmailRegEx, ValidationStrings.invalidMail),
  mobile: Yup.string()
    .matches(phoneRegExp, ValidationStrings.phoneInvalid)
    .required(ValidationStrings.required),
  personal_pan: Yup.string()
    .required(ValidationStrings.required)
    .matches(PersonalPanRegExp, ValidationStrings.panInvalid),
  aadhar: Yup.string()
    .matches(aadhaarRegExp, ValidationStrings.aadhaarInvalid)
    .required(ValidationStrings.required),
  company_name: Yup.string().required(ValidationStrings.required),
  pan: Yup.string().matches(PersonalPanRegExp, ValidationStrings.panInvalid),
  gst: Yup.string(),
  website: Yup.string(),
  cin: Yup.string(),
  business_profile: Yup.string().required(ValidationStrings.required),
  master_state_id: Yup.string().required(ValidationStrings.required),
  address: Yup.string().required(ValidationStrings.required),
  account_number: Yup.string(),
  ifsc: Yup.string(),
  bank_name: Yup.string(),
  acc_holder_name: Yup.string(),
  dateOfBirth: Yup.string().required(ValidationStrings.required),
  personalPanCard: Yup.string().required(ValidationStrings.required),
  aadharCard: Yup.string().required(ValidationStrings.required),
  profilePhoto: Yup.string().required(ValidationStrings.required),
  companyPhoto: Yup.string().required(ValidationStrings.required),
});
