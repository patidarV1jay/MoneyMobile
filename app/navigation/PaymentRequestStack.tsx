import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import { SearchHeader } from '../components';
import { Routes } from '../constants';
import {
  BankDetails,
  FundRequest,
  FundRequestReport,
  PaymentRequest,
} from '../modules';

const StackPaymentRequest = createNativeStackNavigator();

const PaymentRequestStack = () => {
  return (
    <StackPaymentRequest.Navigator>
      <StackPaymentRequest.Screen
        name={Routes.PaymentRequest}
        component={PaymentRequest}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.PaymentRequest}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackPaymentRequest.Screen
        name={Routes.BankDetails}
        component={BankDetails}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.PaymentRequest}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackPaymentRequest.Screen
        name={Routes.FundRequest}
        component={FundRequest}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.FundRequest}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackPaymentRequest.Screen
        name={Routes.FundRequestReport}
        component={FundRequestReport}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.FundRequestReport}
              Flag={true}
              IsDate={false}
            />
          ),
        }}
      />
    </StackPaymentRequest.Navigator>
  );
};

export default PaymentRequestStack;
