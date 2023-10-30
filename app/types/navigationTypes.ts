export type RootStackParamList = {
  Signin: undefined;
  HomeStack: { screen: String };
  HomeScreen: undefined;
  DrawerNav: { screen: String };
  IncomeReport: undefined;
  MoneyTransferReport: undefined;
};

export interface FormikProps {
  handleBlur: Function;
  handleChange: Function;
  values: { [key: string]: string };
  touched: { [key: string]: boolean };
  errors: { [key: string]: string };
  handleSubmit: Function;
}
