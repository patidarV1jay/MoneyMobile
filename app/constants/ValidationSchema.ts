import * as Yup from 'yup';
import { EmailRegEx } from './RegEx';
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
