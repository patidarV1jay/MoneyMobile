import * as Yup from 'yup';
import { EmailRegEx } from './RegEx';
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
